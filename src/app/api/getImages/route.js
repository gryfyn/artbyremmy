import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder");

  if (!folder) {
    return NextResponse.json({ error: "Missing folder parameter" }, { status: 400 });
  }

  try {
    // Use Cloudinary's SDK instead of fetch()
    const result = await cloudinary.search
      .expression(`folder=${folder}/*`)
      .sort_by("public_id", "desc")
      .max_results(300)
      .execute();

    const images = result.resources.map((file) => ({
      id: file.asset_id,
      url: file.secure_url,
      title: file.public_id.split("/").pop(),
    }));

    return NextResponse.json(images);
  } catch (err) {
    console.error("Error fetching Cloudinary images:", err);
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}
