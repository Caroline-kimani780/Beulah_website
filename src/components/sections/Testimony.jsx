import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Michael",
    role: "Restaurant Owner – Sunrise Eatery",
    text: "Beulah Poultry Farm has been our trusted supplier for over two years. Their chicken is always fresh, clean, and healthy. I’ve never been disappointed.",
    image: "/test7.png",
  },
  {
    id: 2,
    name: "Sarah ",
    role: "Retailer – FreshMart Butchery",
    text: "Their consistency is unmatched. Whether buying eggs or broiler chicken, the quality remains top-notch. My customers love their products.",
    image: "/test2.png",
  },
  {
    id: 3,
    name: "Kevin ",
    role: "Home Customer",
    text: "I appreciate their reliable delivery and the hygiene standards they maintain. Beulah Poultry is the only place I trust for fresh, organic chicken.",
    image: "/test8.png",
  },
];

const Testimony = () => {
  const [index, setIndex] = useState(0);
  const { name, role, text, image } = testimonials[index];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div>
        <h2 className="text-4xl font-bold text-green-950 mb-10">
          What Our Customers Say
        </h2>

        <div className="flex items-center gap-4 mb-6 transition-all duration-500">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover shadow-md"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>

        <p className="text-gray-700 text-xl italic mb-15 leading-relaxed transition-all duration-500">
          "{text}"
        </p>

        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 bg-green-950 text-white hover:bg-green-900 rounded-full transition"
          >
            <FaChevronLeft className="cursor-pointer" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-green-950 text-white hover:bg-green-900 rounded-full transition"
          >
            <FaChevronRight className="cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="flex justify-center shadow-md">
        <img
          src="/one.png"
          alt="testimonial background"
          className="w-full h-[400px] object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
  );
};

export default Testimony;
