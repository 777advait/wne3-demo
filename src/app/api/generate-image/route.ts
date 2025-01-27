import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const GenerateImageSchema = z.object({
  prompt: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = GenerateImageSchema.safeParse(body);

  if (!validation.success) {
    return new NextResponse(JSON.stringify(validation.error), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const { prompt } = validation.data;

  try {
    const res = await fetch(`${env.PIPELINE_URL}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to generate image");
    }

    const { image_url }: { image_url: string } = await res.json();

    return NextResponse.json(
      JSON.stringify({
        success: true,
        data: image_url,
        message: "Image generated successfully",
      }),
      {
        status: 201,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      JSON.stringify({
        message: "An unexpected error occurred",
        success: false,
        data: null,
      }),
      {
        status: 500,
      },
    );
  }
}
