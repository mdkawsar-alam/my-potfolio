"use client"
import { useRouter } from "next/navigation";

import { blogPosts } from "@/index";
import Container from "@/components/sheard/Contatiner/Container";
import Image from "next/image";

export default function BlogPostPage({ params }) {
  const { id } = params; 

 
  const post = blogPosts.find((post) => post.id === parseInt(id, 10));

  if (!post) return <div>Loading...</div>; 

  return (
    <div className="bg-[#09101A] pt-24">
      <Container>
        <div className=" p-8 space-y-11 ">
          <h1 className="text-3xl font-semibold text-gray-50 text-center">{post.title}</h1>

          <div className=" w-[500px] mx-auto">
            <Image
              src={post.image}
              alt={post.title}
              className="rounded-lg my-4"
              layout="responsive"
            />
          </div>
          <div
            className="text-gray-200 leading-7 tracking-normal text-base mt-4 "
            dangerouslySetInnerHTML={{ __html: post.fullDescription }}
          />
          <p className="text-xs pt-5 text-gray-300">
            {post.date} by {post.author}
          </p>
        </div>
      </Container>
    </div>
  );
}
