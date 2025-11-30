import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white py-6 ">
      <div className="container mx-auto text-center">
        {/* Logo + Socials */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-5">
          <div className="flex items-baseline space-x-3 mx-20">
            <img
              src="/image.png"
              alt="Beulah Poultry Farm Logo"
              className="h-15 w-auto hidden md:block"
            />
            <h1 className="text-xl font-bold">Beulah Poultry Farm</h1>
          </div>

          <div className="hidden md:flex md:justify-center md:space-x-6 my-4 mx-10 text-xl">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
          </div>
        </div>

        <hr className="border-t-2 mx-auto border-white my-5" />

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center md:justify-around gap-8 text-left mt-10">
          <div>
            <h2 className="text-lg font-semibold">Our Products</h2>
            <ul>
              <li className="my-2 cursor-pointer">Fresh Eggs</li>
              <li className="my-2 cursor-pointer">Broiler Chicken</li>
              <li className="my-2 cursor-pointer">Kienyeji Chicken</li>
              <li className="my-2 cursor-pointer">Day-old Chicks</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Company</h2>
            <ul>
              <li className="my-2 cursor-pointer">About Us</li>
              <li className="my-2 cursor-pointer">Our Farm</li>
              <li className="my-2 cursor-pointer">Contact</li>
              <li className="my-2 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Get in Touch</h2>
            <ul>
              <li className="my-2 cursor-pointer">beulahfarm@gmail.com</li>
              <li className="my-2 cursor-pointer">+254 712 345 678</li>
              <li className="my-2 cursor-pointer">Nairobi, Kenya</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold hidden md:block">
              Quick Links
            </h2>
            <ul>
              <li className="my-2 cursor-pointer">Terms & Conditions</li>
              <li className="my-2 cursor-pointer">Delivery Information</li>
              <li className="my-2 cursor-pointer">FAQ</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-sm">
          &copy; {new Date().getFullYear()} Beulah Poultry Farm — All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
