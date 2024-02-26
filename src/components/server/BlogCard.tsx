import React from "react";
import {
  Card,
  CardHeader,
  CardBody,

  Divider,

} from "@nextui-org/react";
import Link from "next/link";
import { FaBookOpenReader } from "react-icons/fa6";

interface IBlogCardProps {
  title: string;
  content: string;
  blogId: string;
}
const extractFirstWords = (text: string, wordCount: number): string => {
  const words = text.split(' ').slice(0, wordCount);
  return words.join(' ');
};
export default function BlogCard({ title, content, blogId }: IBlogCardProps) {
  const truncatedContent = extractFirstWords(content, 10);
  return (
    <Link href={`/blogs/${blogId}`}>
      <Card className="min-w-[400px]">
        <CardHeader className="flex gap-3">
        <FaBookOpenReader
        className="text-4xl" />
          <div className="flex flex-col">
            <p className="text-md">{title}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
        <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />
        </CardBody>
        <Divider />
      
      </Card>
    </Link>
  );
}
