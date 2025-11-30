import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm  z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/image.png"
            alt="Logo"
            className="w-15 h-15 object-contain"
          />
          <h1 className="text-2xl font-bold text-amber-400">Beulah</h1>
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
