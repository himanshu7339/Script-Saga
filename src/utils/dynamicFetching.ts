
export async function getData(blogId: string) {
  if(!process.env.FRONTEND_URL){
    return null
  }
  const res = await fetch(`${process.env.FRONTEND_URL}/api/blogs/${blogId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
