export async function getData(blogId: string) {
  if (!process.env.NEXT_PUBLIC_FRONTEND_URL) {
    return null;
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/blogs/${blogId}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
