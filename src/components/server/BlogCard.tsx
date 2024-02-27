import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Divider,

} from "@nextui-org/react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

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
        <FaCode
        className="text-4xl" />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
        <Button radius="md" size="md" fullWidth ={false} className="w-10 font-semibold">
       Read Now
      </Button>   
        </CardBody>
        <Divider />
      
      </Card>
    </Link>
  );
}
