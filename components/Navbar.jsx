"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[rgba(0,123,191,1)] h-fit w-[100%] fixed top-0 px-0 mx-0 flex flex-row justify-between items-center text-white py-2 z-10">
      <a href="/"><p className="font-normal text-[15pt] ml-5 w-fit">SREE-2024</p></a>

      <ul className="hidden md:visible md:flex flex-row w-[86%] mr-3 justify-between">
        {[
          "Home",
          "Call For Papers",
          "Abstract Submission",
          "Important Dates",
          "Registration",
          "Resource Persons",
          "Organizing Committee",
          "Advisory Committee",
          "Contact Us",
        ].map((item) => (
          <li className="md:mx-1 lg:mx-2 hover:text-gray-900" key={`links-${item}`}>
          <a href={(item==="Home")?"/":`${item.replace(/\s/g, '-').toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      {isOpen ? (
        <ul className="md:hidden flex flex-col w-fit mr-8">
          <li className="mr-2 lg:mr-0 font-bold text-red-800" onClick={() => setIsOpen(false)}>
            X
          </li>
          {[
            "Home",
            "Call For Papers",
            "Abstract Submission",
            "Important Dates",
            "Registration",
            "Resource Persons",
            "Organizing Committee",
            "Advisory Committee",
            "Contact Us",
          ].map((item) => (
            <li className="" key={`links2-${item}`}>
            <a href={(item==="Home")?"/":`${item.replace(/\s/g, '-').toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="md:hidden white mr-8" onClick={() => setIsOpen(true)}>
          ☰
        </div>
      )}
    </div>
  );
};

export default Navbar;
