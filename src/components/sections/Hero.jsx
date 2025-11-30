function Hero() {
  return (
    <section
      id="hero"
      className="text-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <main className="container mx-auto px-4 py-20">
        <div className="text-center p-4 flex flex-col justify-center items-center relative">
          <h1 className="text-5xl mx-auto font-bold w-full mb-4 text-amber-300 md:text-6xl md:w-200">
            Nurturing Healthy Chickens, Growing a Better Tomorrow
          </h1>

          <p className="text-xl hidden text-gray-100 mx-auto md:block md:w-150">
            At Beulah Poultry Farm, we are dedicated to raising strong, healthy,
            and organically-fed chickens. Our farm upholds high standards of
            hygiene, care, and sustainability—ensuring nutritious poultry
            products for families, businesses, and communities.
          </p>

          <div>
            <button className="mt-8 px-10 py-5 rounded-md font-bold cursor-pointer bg-amber-300 text-green-950">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Hero;
