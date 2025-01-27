"use server";

import { env } from "@/env";

export async function generateMockup(
  image_url: string[],
): Promise<{ success: boolean; data: string | null; message: string }> {
  try {
    const res = await fetch(`${env.MOCKUP_MODULE_URL}/generate-mockup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url,
      }),
    }); 

    if (!res.ok) {
      console.log(await res.json());
      throw new Error("Failed to generate mockup");
    }

    const { data }: { data: [{ url: string }] } = await res.json();

    return {
      success: true,
      data: data[0].url,
      message: "Mockup generated successfully",
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
