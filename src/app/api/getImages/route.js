import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = searchParams.get("folder");

    // Parse CLOUDINARY_URL
    let cloudName, apiKey, apiSecret;

    if (process.env.CLOUDINARY_URL) {
      try {
        const url = new URL(process.env.CLOUDINARY_URL);
        cloudName = url.hostname;
        apiKey = url.username;
        apiSecret = url.password;
      } catch (e) {
        return NextResponse.json({
          error: "Failed to parse CLOUDINARY_URL",
          details: e.message,
          cloudinaryUrl: process.env.CLOUDINARY_URL ? "exists but invalid" : "missing"
        }, { status: 500 });
      }
    }

    // Override with individual env vars if they exist
    cloudName = process.env.CLOUDINARY_CLOUD_NAME || cloudName;
    apiKey = process.env.CLOUDINARY_API_KEY || apiKey;
    apiSecret = process.env.CLOUDINARY_API_SECRET || apiSecret;

    // Validate we have credentials
    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json({
        error: "Missing Cloudinary credentials",
        hasCloudName: !!cloudName,
        hasApiKey: !!apiKey,
        hasApiSecret: !!apiSecret,
        hasCloudinaryUrl: !!process.env.CLOUDINARY_URL,
      }, { status: 500 });
    }

    if (!folder) {
      return NextResponse.json({ 
        error: "Missing folder parameter",
        receivedParams: Object.fromEntries(searchParams)
      }, { status: 400 });
    }

    // Configure Cloudinary
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
    });

    console.log("Searching Cloudinary for folder:", folder);

    // Search Cloudinary
    const result = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("public_id", "desc")
      .max_results(300)
      .execute();

    console.log(`Found ${result.resources.length} images`);

    const images = result.resources.map((file) => ({
      id: file.asset_id,
      url: file.secure_url,
      title: file.public_id.split("/").pop(),
      public_id: file.public_id,
    }));

    return NextResponse.json(images);
    
  } catch (err) {
    console.error("Full error object:", err);
    
    return NextResponse.json(
      { 
        error: "Server error", 
        details: err.message,
        errorName: err.name,
        errorStack: err.stack?.split('\n').slice(0, 3).join('\n'),
        cloudinaryConfigured: !!(process.env.CLOUDINARY_URL || process.env.CLOUDINARY_CLOUD_NAME),
      },
      { status: 500 }
    );
  }
}
