import { FaCheckCircle } from "react-icons/fa";

function Specialty() {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
        <div>
          <img
            src="/five.png"
            alt="Beulah Poultry Staff"
            className="w-full h-90 object-cover rounded-3xl"
          />
        </div>

        <div className="container mx-auto">
          <h2 className="text-4xl text-green-950 font-bold mb-4 mt-4 md:text-5xl">
            Raising Healthy Chickens With Care & Precision
          </h2>

          <p className="text-lg text-gray-700 mb-4 md:text-xl">
            At Beulah Poultry Farm, we combine modern farming techniques with
            high-quality nutrition and hygiene standards to ensure strong,
            healthy chickens for every customer.
          </p>

          <div className="mb-4">
            <p className="flex items-start text-lg font-medium gap-2">
              <FaCheckCircle className="text-green-950 text-lg mr-2" />
              Clean & Controlled Environment
            </p>
            <p className="pl-9">
              Our birds are raised in a well-maintained environment with proper
              ventilation, lighting, and temperature control to minimize stress
              and promote healthy growth.
            </p>
          </div>

          <div>
            <p className="flex items-start text-lg font-medium gap-2">
              <FaCheckCircle className="text-green-950 text-lg mr-2" />
              Organic & Nutritious Feeding
            </p>
            <p className="pl-9">
              We provide a balanced, organic diet that enhances immunity, boosts
              growth, and ensures our chickens are free from harmful additives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialty;
