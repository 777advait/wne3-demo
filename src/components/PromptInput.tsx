"use client";

import { toast } from "sonner"; // For toast notifications
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { promptFormInput } from "@/lib/definitions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonLoading } from "./ui/button-loading";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

// PromptInput Component
export default function PromptInput({
  initialValue,
  onValueChange,
}: {
  initialValue: string;
  onValueChange: (value: string) => void;
}) {
  const form = useForm<z.infer<typeof promptFormInput>>({
    defaultValues: { prompt: initialValue }, // Initialize with the passed value
    resolver: zodResolver(promptFormInput),
  });
  const router = useRouter();

  // Update the form value when initialValue changes
  useEffect(() => {
    form.setValue("prompt", initialValue);
  }, [initialValue, form]);

  async function onSubmit(data: z.infer<typeof promptFormInput>) {
    console.log(data);

    // Send an API call to image generation module
    toast("Generation started", {
      description: "This may take a while...",
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Send an API call to mockup generation module
    toast("Generating mockup...", {
      description: "We're almost there!",
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Save the product image and mockup to the database
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to the product page
    toast("Your product is ready!", {
      description: "Redirecting to the product page...",
    });
    router.push("/product/hahaha");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Textarea
                    className="min-h-20 resize-none rounded-xl p-4 enabled:text-lg"
                    placeholder="Imagination is the only limit..."
                    {...field}
                    onChange={(e) => {
                      field.onChange(e); // Update form value
                      onValueChange(e.target.value); // Notify parent component
                    }}
                  />
                  {form.formState.isSubmitting ? (
                    <ButtonLoading className="absolute bottom-4 right-4">
                      Generating...
                    </ButtonLoading>
                  ) : (
                    <Button type="submit" className="absolute bottom-4 right-4">
                      Generate
                    </Button>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}