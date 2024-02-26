import { mongoDbConnection } from "@/database/mongodb";
import { type NextRequest } from "next/server";
import { Blog } from "@/model/blogModel";

// create new blog
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, content } = body;

  if (!title || !content) {
    return Response.json({ success: false, message: "Please enter all filed" });
  }
  await mongoDbConnection();

  const blog = await Blog.create({
    title,
    content,
  });

  return Response.json({
    success: true,
    message: "Blog created successfully",
    blog,
  });
}

// Get all blogs
export async function GET(request: NextRequest) {
  await mongoDbConnection();
  const blogs = await Blog.find();
  
  return Response.json({
    success: true,
    blogs,
  });
}
