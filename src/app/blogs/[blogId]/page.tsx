import { getData } from "@/utils/dynamicFetching";
import { Suspense } from "react";
import Loading from "../loading";
export default async function Page({ params }: { params: { blogId: string } }) {
  const blog = await getData(params.blogId);
  const { title, content } = blog.blog;

  return (
    <Suspense fallback={<Loading />}>
      <div className="blog-details-page">
        <div className="content m-10 flex flex-col justify-center items-center">
          <div className="heading m-6">
            <h1 className="text-3xl text-center">{title}</h1>
          </div>
          <div
            className="blog-content max-w-[60%]"
            dangerouslySetInnerHTML={{ __html: `${content}` }}
          />
        </div>
      </div>
    </Suspense>
  );
}
