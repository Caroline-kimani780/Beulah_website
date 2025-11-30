import React, { useState } from "react";

const poultryProducts = [
  {
    id: 1,
    name: "Day-Old Chicks",
    image: "/chicks.png",
    price: 120,
    oldPrice: 150,
  },
  {
    id: 2,
    name: "Broilers (Fully Grown)",
    image: "/chicken.png",
    price: 450,
    oldPrice: 500,
  },
  {
    id: 3,
    name: "Improved Kienyeji Chickens",
    image: "/eggs.png",
    price: 550,
    oldPrice: 600,
  },
  {
    id: 4,
    name: "Layers (Egg-Laying)",
    image: "/basket.png",
    price: 600,
    oldPrice: 700,
  },
  {
    id: 5,
    name: "Fresh Farm Eggs (Tray)",
    image: "/eggs.png",
    price: 350,
    oldPrice: 380,
  },
  {
    id: 6,
    name: "Organic Chicken Feeds",
    image: "/feeds.png",
    price: 1800,
    oldPrice: 2000,
  },
  {
    id: 7,
    name: "Chicken Manure (Organic Fertilizer)",
    image: "/basket.png",
    price: 250,
    oldPrice: 300,
  },
  {
    id: 8,
    name: "Vaccinated Chick Packages",
    image: "/image.png",
    price: 300,
    oldPrice: 350,
  },
  {
    id: 9,
    name: "Starter Feed Pack",
    image: "/feeds.png",
    price: 700,
    oldPrice: 800,
  },
  {
    id: 10,
    name: "Growers Feed Pack",
    image: "/feeds.png",
    price: 950,
    oldPrice: 1100,
  },
  {
    id: 11,
    name: "Chick Drinkers",
    image: "/chicken.png",
    price: 300,
    oldPrice: 350,
  },
  {
    id: 12,
    name: "Feeders",
    image: "/chicks.png",
    price: 450,
    oldPrice: 500,
  },
];

const ITEMS_PER_PAGE = 8;

const Poultry = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(poultryProducts.length / ITEMS_PER_PAGE);

  const currentProducts = poultryProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <section className="container mx-auto py-10 px-4">
      {/* SECTION TITLE */}
      <div className="text-center">
        <h1 className="text-center mb-5 font-bold text-green-950 text-3xl md:text-4xl">
          Our Poultry Products
        </h1>
        <p className="text-lg text-gray-700 mb-10 mx-auto md:w-150">
          Explore our high-quality poultry products including chicks, grown
          chickens, fresh eggs, and essential farm supplies — all raised and
          prepared with exceptional care and hygiene.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {currentProducts.map((product) => (
          <div key={product.id} className="w-64">
            {/* Card */}
            <div className="bg-white border border-gray-300 rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition relative">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-contain bg-white"
                />
                <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition cursor-pointer">
                  +
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="text-left mt-3 px-1">
              <h3 className="text-lg font-medium mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <p className="text-gray-700 font-semibold text-base">
                  Ksh{product.price.toFixed(2)}
                </p>
                <p className="text-gray-400 line-through text-sm">
                  Ksh{product.oldPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="p-2 text-xl disabled:opacity-50 cursor-pointer"
        >
          ←
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-3 h-3 rounded-full ${
              page === i + 1 ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="p-2 text-xl disabled:opacity-50 cursor-pointer"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Poultry;
