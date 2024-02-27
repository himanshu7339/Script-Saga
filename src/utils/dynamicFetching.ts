

export async function getData(blogId: string) {

  const res = await fetch(
    `/api/blogs/${blogId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
