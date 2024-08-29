
import Container from '@/components/sheard/Contatiner/Container';
import { blogPosts } from '@/index';
import Image from 'next/image';

function BlogPost({ title, date, author, content, image }) {
  return (
    <div className="p-4 bg-[#1B2A40]  rounded-lg shadow-md">
      <Image src={image} alt={title} className="  rounded-lg mb-4" />
      <h2 className="text-lg font-bold mb-2 text-gray-100">{title}</h2>
      <p className=" mb-4 text-sm text-gray-300">
        {date} by {author}
      </p>
      <div className='text-gray-200 text-base' dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}


export default function Blogs() {
    return (
      <div className=" bg-[#09101A] ">
        <Container>
          <h1 className="text-3xl font-bold mb-4 text-gray-50">My Blog</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {blogPosts.map((post, index) => (
              <BlogPost  key={index} {...post} />
            ))}
          </div>
        </Container>
      </div>
    );
  }