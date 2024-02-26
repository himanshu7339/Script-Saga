import mongoose from "mongoose";

interface Blog {
  title: string;
  content: string;
}

const blogSchema = new mongoose.Schema<Blog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// Delete the model if it already exists
if (mongoose.models.Blog) {
  delete mongoose.models.Blog;
}
export const Blog = mongoose.model("Blog", blogSchema);
