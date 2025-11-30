function About() {
  return (
    <section className="contaner mx-auto py-5 px-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-green-950 mb-6">
            Nurturing Quality Poultry With Excellence & Care
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Beulah Poultry Farm was founded with a mission to provide healthy,
            well-nurtured chickens raised in a clean, controlled environment.
            What began as a small family initiative has grown into a trusted
            poultry brand known for premium broilers, layers, kienyeji chickens,
            and fresh farm eggs.
            <br />
            Over the years, we have built a reputation for ethical farming, high
            hygiene standards, and reliable supply to households, hotels,
            butcheries, and small businesses.
          </p>
        </div>

        <div>
          <img
            src="/two.png"
            alt="beulah poultry farm"
            className="w-full h-90 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
