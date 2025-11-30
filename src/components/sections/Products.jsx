import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";

function Products() {
  // Poultry farm product items
  const products = [
    {
      id: 1,
      image: "/feeds.png",
    },
    {
      id: 2,
      image: "/broiler.png",
    },
    {
      id: 3,
      image: "/eggs.png",
    },
    {
      id: 4,
      image: "/chicks.png",
    },
    {
      id: 5,
      image: "/chicken.png",
    },
    {
      id: 6,
      image: "/chicks.png",
    },
    {
      id: 7,
      image: "/feeds.png",
    },
  ];

  return (
    <section className="container mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {/* LEFT SIDE */}
        <div>
          <h3 className="text-3xl font-bold text-blue-950 md:text-4xl mb-10">
            Our Products
          </h3>
          <p className="text-lg mb-8 md:text-xl text-gray-700">
            Explore our wide range of poultry products — from day-old chicks to
            fresh eggs, all raised with care, hygiene, and premium nutrition.
          </p>
        </div>

        {/* SLIDER */}
        <div className="lg:col-span-3">
          <Swiper
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            touchRatio={1}
            allowTouchMove={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
            className="w-full"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-70 rounded-2xl border border-gray-300 shadow-md object-contain bg-white"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Products;
