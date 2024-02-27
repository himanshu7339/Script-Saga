import { getData } from "@/utils/dynamicFetching";
import { Suspense } from "react";
import Loading from "../loading";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { blogId: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await getData(params.blogId);
  const { title } = blog.blog;
  return {
    title: title,
  };
}
export default async function Page({ params }: { params: { blogId: string } }) {
  const blog = await getData(params.blogId);
  const { title, content } = blog.blog;

  return (
    <Suspense fallback={<Loading />}>
      <div className="blog-details-page">
        <div className="content m-10 flex flex-col justify-center items-center">
          <div className="heading m-6 flex justify-center">
            <h1 className="lg:text-5xl text-3xl  font-bold">{title}</h1>
          </div>
          <div
            className="blog-content  mt-9 leading-loose "
            dangerouslySetInnerHTML={{ __html: `${content}` }}
          />
        </div>
      </div>
    </Suspense>
  );
}
