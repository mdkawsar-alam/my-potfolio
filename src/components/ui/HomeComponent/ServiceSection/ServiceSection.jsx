import Container from '@/components/sheard/Contatiner/Container';
import { services } from '@/index'; // Make sure this path is correct.

const Services = () => {
  return (
    <section className='bg-[#09101A]' id="services">
      <Container>
        <div className="mx-auto py-10">
          <h2 className=" font-semibold text-2xl font-serif lg:text-3xl text-white">
            SERVICES
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center pt-5 mx-auto">
            {services.map((service, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-[#09101A] border border-[#0ef] rounded-md p-5">
                  <h3 className="text-white font-bold">{service.title}</h3>
                  <p className="text-gray-300 font-serif">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
