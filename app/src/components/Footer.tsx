export default function footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6">

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-10 mb-6">
          <a
            href="/"
            className="text-gray-300 hover:text-white hover:scale-105 transition-all"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:text-white hover:scale-105 transition-all"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-white hover:scale-105 transition-all"
          >
            Contact
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-700 mb-6"></div>

        {/* Branding */}
        <p className="text-center text-gray-400 text-sm px-4">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Ndurex Technical Services</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
