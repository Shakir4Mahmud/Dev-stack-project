

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white w-full">
      <div className="mx-auto flex h-14.5 max-w-7xl items-center justify-between px-6 pb-6 pt-4">

        <button className="flex flex-col gap-1.25 md:hidden">
          <span className="h-0.5 w-7 bg-gray-500"></span>
          <span className="h-0.5 w-7 bg-gray-500"></span>
          <span className="h-0.5 w-7 bg-gray-500"></span>
        </button>

        <div className="flex items-center gap-2">
          <img
            src="./B14-A05-DevStack/assets/logo-text.png"
            alt="Dev Stack Logo"
          />
        </div>

        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-pink-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm text-gray-600 transition hover:text-pink-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-600 transition hover:text-pink-600"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm text-gray-600 transition hover:text-pink-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-600 transition hover:text-pink-600"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700">
            Sign In
          </button>

          <button className="rounded-full bg-[#D91B7E] px-5 py-2 text-sm font-medium text-white transition hover:bg-pink-700">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
