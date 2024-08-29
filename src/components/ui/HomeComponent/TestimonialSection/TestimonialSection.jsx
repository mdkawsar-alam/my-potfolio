
import Container from '@/components/sheard/Contatiner/Container';
import { testimonials } from '@/index';
import Image from 'next/image';

function TestimonialCard({ image, name, title, quote }) {
  return (
    <div className="p-4 bg-[#1b2a40] rounded-lg shadow-md">
      <Image src={image} alt={name} width={100} height={100} className="rounded-full mx-auto" />
      <h3 className="text-lg font-bold mt-4 text-gray-100" >{name}</h3>
      <p className="text-sm text-gray-200">{title}</p>
      <p className="mt-4 text-gray-300">{quote}</p>
    </div>
  );
}

;

export default function Testimonial()  {
 

  return (
    <div className='bg-[#09101A] py-16'>
        <Container>
        <div className=" ">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-50">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
        </Container>
    </div>
  );
}