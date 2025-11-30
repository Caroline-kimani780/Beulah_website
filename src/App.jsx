import "./App.css";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Specialty from "./components/sections/Specialty";
import Products from "./components/sections/Products";
import About from "./components/sections/About";
import Poultry from "./components/sections/Poultry";
import Testimony from "./components/sections/Testimony";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <div className=" py-15 absolute hidden top-160 left-0 right-0 mx-auto w-11/12 md:block md:w-3/4 md:absolute md:top-125 md:left-0 md:right-0 md:mx-auto ">
        <Stats />
      </div>

      <div className=" py-5 px-15">
        <Specialty />
      </div>

      <Products />

      <div className=" py-5 px-15">
        <About />
      </div>

      <Poultry />
      <Testimony />

      <div className="bg-amber-200 py-5 px-10">
        <Contact />
      </div>

      <div className="bg-green-950">
        <Footer />
      </div>
    </>
  );
}

export default App;
