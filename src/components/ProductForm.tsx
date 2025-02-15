"use client";
import * as formComponent from "@/components/ui/form";
import * as selectComponent from "@/components/ui/select";
import * as tooltipComponent from "@/components/ui/tooltip";
import { ControllerRenderProps, useForm } from "react-hook-form";
import type { z } from "zod";
import { productFormInput } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function ColorSelector({
  colors,
  field,
}: {
  colors: { id: string; value: string }[];
  field: ControllerRenderProps<
    {
      color: string;
      size: string;
    },
    "color"
  >;
}) {
  return (
    <formComponent.FormItem>
      <formComponent.FormControl>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <tooltipComponent.TooltipProvider key={color.id}>
                <tooltipComponent.Tooltip>
                  <tooltipComponent.TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={() => field.onChange(color.id)}
                      className={`relative h-14 w-14 rounded-full border transition-all ${
                        field.value === color.id
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                          : "hover:ring-1 hover:ring-primary/50 hover:ring-offset-1 hover:ring-offset-background"
                      }`}
                      style={{ backgroundColor: color.value }}
                    >
                      <span className="sr-only">{color.value}</span>
                    </button>
                  </tooltipComponent.TooltipTrigger>
                  <tooltipComponent.TooltipContent className="capitalize">
                    {color.id}
                  </tooltipComponent.TooltipContent>
                </tooltipComponent.Tooltip>
              </tooltipComponent.TooltipProvider>
            ))}
          </div>
          <formComponent.FormMessage />
        </div>
      </formComponent.FormControl>
    </formComponent.FormItem>
  );
}

export default function ProductForm({
  sizes,
  colors,
}: {
  sizes: { id: string; value: string }[];
  colors: { id: string; value: string }[];
}) {
  const form = useForm<z.infer<typeof productFormInput>>({
    resolver: zodResolver(productFormInput),
  });

  const {
    formState: { isValid },
  } = form;

  return (
    <formComponent.Form {...form}>
      <form className="space-y-8">
        <formComponent.FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <ColorSelector colors={colors} field={field} />
          )}
        />

        <formComponent.FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <formComponent.FormItem>
              <selectComponent.Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <formComponent.FormControl>
                  <selectComponent.SelectTrigger className="w-full">
                    <selectComponent.SelectValue placeholder="Select your size" />
                  </selectComponent.SelectTrigger>
                </formComponent.FormControl>
                <selectComponent.SelectContent>
                  {sizes.map((size) => (
                    <selectComponent.SelectItem value={size.id} key={size.id}>
                      {size.value}
                    </selectComponent.SelectItem>
                  ))}
                </selectComponent.SelectContent>
              </selectComponent.Select>
            </formComponent.FormItem>
          )}
        />

        <Button
          className="w-full gap-2 rounded-full"
          size="lg"
          disabled={!isValid}
        >
          <Plus className="h-4 w-4" />
          Add To Cart
        </Button>
      </form>
    </formComponent.Form>
  );
}
