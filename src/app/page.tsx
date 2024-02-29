

import BlogCard from "@/components/server/BlogCard";
import React from "react";
import { Suspense } from "react";
import Loading from "@/components/server/LoadingCard";
import { BASE_URL } from "@/utils/constVariable";

async function getData() {
  const res = await fetch(`${BASE_URL}/api/blogs`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const page = async () => {

  if(!BASE_URL){
    return null
  }
  interface IBlogData {
    title: string;
    content: string;
    _id: string;
  }
  const blogData: { blogs: IBlogData[] } = await getData();
  return (
    <div className="blogs flex justify-center">
      <Suspense fallback={<Loading />}>
        <div className="blogs m-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {blogData.blogs.length > 0 &&
            blogData.blogs.map((item, index) => (
              <BlogCard
                key={index}
                title={item.title}
                content={item.content}
                blogId={item._id}
              />
            ))}
        </div>
      </Suspense>
    </div>
  );
};

export default page;
