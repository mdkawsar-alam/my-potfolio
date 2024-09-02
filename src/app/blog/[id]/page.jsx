"use client";
import Container from "@/components/sheard/Contatiner/Container";
import { blogPosts } from "@/index";
import Image from "next/image";
import { useEffect, useState } from "react";



const Page = ( {params}) => {
  const [data, setData] = useState  ( null);

  const getBlogData = () => {
    const blogPost = blogPosts.find((blog) => blog.id === params.id);
    if (blogPost) {
      setData(blogPost);
    } else {
      console.log("Blog post not found");
    }
  };

  useEffect(() => {
    if (params && params.id) {
      getBlogData();
    }
  }, [params]);

  if (!data) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="pt-24">
      <Container>
        {data.image && (
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={500}
            className="w-full h-auto"
          />
        )}
        <h3 className="font-semibold text-2xl mt-4">{data.title}</h3>
        <p className="mt-2">{data.content}</p>
        <div className="flex justify-between mt-4 text-gray-600">
          <p>By {data.author}</p>
          <p>{data.date}</p>
        </div>
      </Container>
    </div>
  );
};

export default Page;
