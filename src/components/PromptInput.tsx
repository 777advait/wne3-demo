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

// PromptInput Component
export default function PromptInput() {
  const form = useForm<z.infer<typeof promptFormInput>>({
    defaultValues: { prompt: "" }, // Initialize with the passed value
    resolver: zodResolver(promptFormInput),
  });
  const router = useRouter();

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
