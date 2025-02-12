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
import { generateImage } from "@/server/actions/generate-image";
import { generateMockup } from "@/server/actions/generate-mockup";
import { createProduct } from "@/server/db/queries";
import { Input } from "./ui/input";

// PromptInput Component
export default function PromptInput() {
  const form = useForm<z.infer<typeof promptFormInput>>({
    defaultValues: { prompt: "" }, // Initialize with the passed value
    resolver: zodResolver(promptFormInput),
  });
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof promptFormInput>) {
    const start = new Date();
    // Send an API call to image generation module
    toast("Generation started", {
      description: "This may take a while...",
    });
    const image = await generateImage(data.prompt);

    if (!image.success || image.data === null) {
      toast.error(image.message);
      return;
    }

    // Send an API call to mockup generation module
    toast("Generating mockup...", {
      description: "We're almost there!",
    });
    const mockup = await generateMockup([image.data]);

    if (!mockup.success || mockup.data === null) {
      toast.error(mockup.message);
      return;
    }

    const end = new Date();

    // Save the product image and mockup to the database
    const { data: product } = await createProduct({
      title: data.prompt,
      image_url: image.data,
      mockup_url: mockup.data,
      time_taken: (end.getTime() - start.getTime()) / 1000,
    });

    if (!product) {
      toast.error("Failed to create product");
      return;
    }

    // Redirect to the product page
    toast("Your product is ready!", {
      description: "Redirecting to the product page...",
    });
    router.push(`/product/${product.id}`);
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
                <div className="flex items-center gap-4">
                  <Input
                    className="w-full rounded-lg py-5"
                    placeholder="Imagination is the only limit..."
                    {...field}
                  />
                  {form.formState.isSubmitting ? (
                    <ButtonLoading className="rounded-full bg-white text-black hover:bg-white/75">
                      Generating...
                    </ButtonLoading>
                  ) : (
                    <Button
                      type="submit"
                      className="rounded-full bg-white text-black hover:bg-white/75"
                    >
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
