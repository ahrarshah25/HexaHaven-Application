import React from "react";

const Tabs = ({ mobile }) => {
  return (
    <ul
      className={`${mobile ? "flex flex-col gap-4 text-center" : "flex items-center gap-8"
        } ${mobile ? "" : "px-6 py-2 rounded-full"
        } text-gray-700 font-medium`}
    >
      <li>
        <a
          href="/"
          className="relative transition hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="/about"
          className="relative transition hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="/reviews"
          className="relative transition hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
        >
          Reviews
        </a>
      </li>
      <li>
        <a
          href="/contact"
          className="relative transition hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Tabs;