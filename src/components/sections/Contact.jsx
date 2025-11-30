function Contact() {
  return (
    <section className="container mx-auto p-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
        <div className="hidden lg:block">
          <img
            src="/image.png"
            alt="Contact Us"
            className="mx-auto z-20 w-90 h-90"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-9 text-green-950">
            Ready to Order Fresh Poultry Products? <br /> Contact Beulah Poultry
            Farm Today
          </h2>

          <p className="text-lg text-green-950 mb-12">
            Whether you need fresh eggs, broilers, or kienyeji chicken, our team
            is ready to assist you. Reach out and we’ll get back to you
            immediately with availability and delivery details.
          </p>

          <div className="w-full">
            <form
              action="#"
              className="flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-3 bg-white rounded-md w-full sm:w-64 focus:outline-none"
              />

              <button
                type="submit"
                className="bg-green-950 text-white p-3 rounded-md cursor-pointer hover:bg-green-900 transition-colors w-full sm:w-auto"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
