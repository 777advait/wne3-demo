"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { promptFormInput } from "@/lib/definitions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonLoading } from "./ui/button-loading";

export default function PromptInput() {
  const form = useForm<z.infer<typeof promptFormInput>>({
    defaultValues: { prompt: "" },
    resolver: zodResolver(promptFormInput),
  });

  async function onSubmit(data: z.infer<typeof promptFormInput>) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
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
                    className="min-h-48 resize-none rounded-xl p-4 enabled:text-lg"
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
