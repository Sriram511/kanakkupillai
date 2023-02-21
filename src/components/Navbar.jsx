import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Startup",
    },
    {
      id: 2,
      link: "GST",
    },
    {
      id: 3,
      link: "Incometax",
    },
    {
      id: 4,
      link: "Tax & Companies",
    },
    {
      id: 5,
      link: "Intellectual Property",
    },
    {
      id: 6,
      link: "Partner with us",
    },
    {
      id: 7,
      link: "Contact us",
    },
    {
      id: 8,
      link: "Service status",
    },
    {
      id: 9,
      link: "Connect with us 7305 345 345",
    },
  ];

  return (
    <div className="flex justify-between mb-5  items-center w-full h-20 bg-white text-gray-700 px-4 fixed">
      <div>
        <h1 className="text-3xl italic font-signature ml-3 text-sky-400">
          Kanakku<span className="text-green-500">pillai</span>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-800 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-3 z-10 md:hidden"
      >
        {nav ? (
          <FaIcons.FaTimes size={25} className="text-gray-300" />
        ) : (
          <FaIcons.FaBars size={25} className="text-gray-800" />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute w-full h-screen top-0 bg-slate-700 left-0 text-gray-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
