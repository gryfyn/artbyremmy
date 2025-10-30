import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = searchParams.get("folder");

    if (!folder) {
      return NextResponse.json(
        { error: "Missing folder parameter" },
        { status: 400 }
      );
    }

    // Use your Cloudinary credentials from environment variables
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      console.error("Missing Cloudinary environment variables");
      return NextResponse.json(
        { error: "Cloudinary config missing" },
        { status: 500 }
      );
    }

    // Fetch images from Cloudinary folder
    const cloudinaryUrl = `https://${apiKey}:${apiSecret}@api.cloudinary.com/v1_1/${cloudName}/resources/search`;
    const body = {
      expression: `folder:${folder}`,
      max_results: 50,
    };

    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Cloudinary error:", errorText);
      return NextResponse.json(
        { error: "Failed to fetch from Cloudinary" },
        { status: 500 }
      );
    }

    const result = await response.json();
    const images =
      result.resources?.map((img) => ({
        id: img.asset_id,
        url: img.secure_url,
        title: img.public_id.split("/").pop(),
      })) || [];

    return NextResponse.json(images);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
