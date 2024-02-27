import { BASE_URL } from "./constVariable";

export async function getData(blogId: string) {
  if (!BASE_URL) {
    return null;
  }
  const res = await fetch(
    `${BASE_URL}/api/blogs/${blogId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
