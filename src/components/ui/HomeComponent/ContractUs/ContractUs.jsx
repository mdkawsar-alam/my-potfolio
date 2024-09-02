"use client";


import Container from '@/components/sheard/Contatiner/Container';
import React from 'react';
import { useForm } from 'react-hook-form';

const InputField = ({ register, name, placeholder, required }) => (
  <input
    {...register(name, { required })}
    placeholder={placeholder}
    className="mt-1 p-4 w-full border border-[#0EF] rounded bg-slate-500 text-gray-900 focus:outline-none focus:border-blue-500"
  />
);

const TextAreaField = ({ register, name, placeholder, required, rows = 4 }) => (
  <textarea
    {...register(name, { required })}
    placeholder={placeholder}
    rows={rows}
    className="mt-2 p-4 w-full border border-[#0EF] rounded bg-slate-500 text-gray-900 focus:outline-none focus:border-blue-500"
  ></textarea>
);

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Handle form submission (e.g., send data to an API)

    // Clear form inputs
    reset();
  };

  return (
    <section
      className="bg-[#09101A] py-16"
      style={{ backgroundImage: 'url(/imgs/contract-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Container>
        <h2 className="text-center text-2xl lg:text-3xl font-semibold text-gray-50 mb-8">
          CONTACT US
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto bg-[#132031] bg-opacity-80 p-5 rounded-md shadow-lg">
          <div className="mb-4">
            <InputField register={register} name="name" placeholder="Your Name" required />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>
          <div className="mb-4">
            <InputField register={register} name="email" placeholder="Your Email" required />
            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
          </div>
          <div className="mb-4">
            <InputField register={register} name="phone" placeholder="Your Phone Number" required />
            {errors.phone && <span className="text-red-500 text-sm">Phone number is required</span>}
          </div>
          <div className="mb-4">
            <TextAreaField register={register} name="message" placeholder="Your Message" required />
            {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
          </div>
          <button
            type="submit"
            className="bg-[#0EF] text-black hover:bg-blue-700 hover:text-white transition duration-300 px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
};

export default ContactUs;
