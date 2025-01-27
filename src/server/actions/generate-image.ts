"use server";

import { env } from "@/env";

export async function generateImage(
  prompt: string,
): Promise<{ success: boolean; data: string | null; message: string }> {
  try {
    const res = await fetch(`${env.PIPELINE_URL}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!res.ok) {
      console.log(await res.json());
      throw new Error("Failed to generate image");
    }

    const { image_url }: { image_url: string } = await res.json();

    return {
      success: true,
      data: image_url,
      message: "Image generated successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      message: "An unexpected error occurred",
      success: false,
      data: null,
    };
  }
}
