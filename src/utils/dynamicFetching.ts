
export async function getData(blogId: string) {
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/blogs/${blogId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
