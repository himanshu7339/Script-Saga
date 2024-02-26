import { mongoDbConnection } from "@/database/mongodb";
import { Blog } from "@/model/blogModel";

// blog post by id
export async function GET(
  request: Request,
  { params }: { params: { blogId: string } }
) {
  const { blogId } = params;
  await mongoDbConnection();

  const blog = await Blog.findById(blogId);

  if (!blog) {
    return Response.json({ success: false, message: "Blog not found" });
  }

  return Response.json({
    success: true,
    blog,
  });
}

// update post by id
export async function PUT(
  request: Request,
  { params }: { params: { blogId: string } }
) {
  const body = await request.json();
  const { title, content } = body;
  const { blogId } = params;
  await mongoDbConnection();
  const isExistBlog = await Blog.findOne({ _id: blogId });
  if (!isExistBlog) {
    return Response.json({ success: false, message: "Blog not found" });
  }

  const blog = await Blog.findByIdAndUpdate(
    { _id: blogId },
    { title, content },
    {
      new: true,
    }
  );

  return Response.json({
    success: true,
    message: "Blog Update successfully",
    blog,
  });
}

// delete blog
export async function DELETE(
  request: Request,
  { params }: { params: { blogId: string } }
) {
  const { blogId } = params;
  await mongoDbConnection();
  if (!blogId) {
    return Response.json({ success: false, message: "Blog not found" });
  }

  const blog = await Blog.findByIdAndDelete(blogId);

  return Response.json({
    success: true,
    message: "Blog delete successfully",
  });
}
