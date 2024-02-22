import React from "react";
import { homeimg } from "@/assets";
import { HorizontalProp, VerticalProp } from "@/components";
import Image from "next/image";
import { horizontal, verticle } from "@/components/content";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="font-bold"
    >
      <div className="flex flex-col items-center">
        <div className="relative w-[100%] h-[518px]">
          <Image
            src={homeimg}
            width={""}
            height={""}
            alt="cllg Img"
            className="absolute w-[100vw] h-[518px] -z-10 filter brightness-50 blur-[1px]"
          />
          <div className="text-white flex flex-col w-full h-full items-center justify-center">
            <div className="my-5 w-[100%] flex overflow-x-hidden">
              <button
                type="button"
                className="font-bold ml-7 py-2 px-5 me-2 mb-2 text-lg text-gray-900 focus:outline-none bg-gray-300 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                onClick={() => {
                  const downloadLink = document.createElement("a");
                  downloadLink.href = "/SREE24.pdf"; // Replace with actual path of PDF
                  downloadLink.download = "SREE24.pdf"; // Specify desired file name
                  document.body.appendChild(downloadLink);
                  downloadLink.click();
                  document.body.removeChild(downloadLink);
                }}
              >
                Download
              </button>
              <div className="w-[100%] overflow-x-hidden outline-1 outline-white">
                <div className="w-fit marquee text-2xl text-yellow-400 ">
                  <span className="w-fit">SREE 2024 Information Brochure</span>
                </div>
              </div>
            </div>

            <h1 className="mb-3 text-2xl md:text-4xl font-medium">
              International conference
            </h1>
            <p className="mb-3 text-xl md:text-3xl font-medium">
              (Self-Sponsored)
            </p>
            <p className="mb-3 text-xl md:text-2xl font-medium">On</p>
            <h1 className="mb-3 text-3xl md:text-5xl font-medium flex flex-wrap justify-center">
              <span className="text-[#00ff00] px-4">
                <span className="text-[#ff0000]">S</span>ustainable{" "}
              </span>
              <span className="text-[#00ff00] px-4">
                <span className="text-[#ff0000]">R</span>esearch{" "}
              </span>
              in
              <span className="text-[#00ff00] px-4">
                <span className="text-[#ff0000]"> E</span>nergy{" "}
              </span>
              and
              <span className="text-[#00ff00] px-4">
                <span className="text-[#ff0000]"> E</span>nvironment
              </span>
              -2024
            </h1>
            <p className="mb-3 text-2xl font-medium text-[#ffff00] md:text-white">
              Jointly Organized by
            </p>
            <h2 className="mb-3 text-2xl font-medium text-[#ffff00] text-center">
              Department of Chemical Engineering & Centre for Energy and
              Environment
            </h2>
            <h3 className="text-white text-2xl font-semibold">
              APRIL 5-6, 2024
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap flex-row my-5 mt-12 w-full justify-center">
          {horizontal.map((items, ind) => (
            <HorizontalProp
              img={items.img}
              heading={items.heading}
              content={items.content}
              key={ind}
            />
          ))}
        </div>
        <div className=" bg-[#EBF3E8] my-7">
          <div className="mx-[10%] text-justify items-center flex flex-col my-8 text-red-600">
            <motion.p
              className="text-4xl font-semibold italic text-blue-500 my-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            >
              {" "}
              About Conference
            </motion.p>
            <motion.p
              className="my-3 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            >
              The conference on
              <span className="italic text-red-700">
                {" "}
                "Sustainable Research in Energy and Environment (SREE-2024)"{" "}
              </span>
              serves as a platform for scholars, researchers, industry
              professionals, and policymakers to converge and engage in
              discussions centered around the critical nexus of energy and
              environmental sustainability. This gathering aims to foster a
              collaborative environment where innovative ideas, cutting-edge
              research, and practical solutions are shared to address the
              challenges and opportunities in the realms of energy production,
              consumption, and their impact on the environment. The conference
              is designed to showcase the latest advancements in sustainable
              energy technologies, explore strategies for minimizing
              environmental footprints, and promote interdisciplinary approaches
              to tackle the pressing issues related to climate change and
              resource depletion. Participants will have the opportunity to
              delve into diverse topics such as renewable energy sources, energy
              efficiency, environmental conservation, and the intersection of
              technology and policy for sustainable development.
            </motion.p>
            <motion.p
              className="my-3 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            >
              Through keynote presentations, panel discussions, and interactive
              sessions, the conference seeks to bridge the gap between theory
              and practice, providing a comprehensive understanding of the
              current state of sustainable research in energy and the
              environment. Attendees will gain insights into emerging trends,
              share experiences, and contribute to the collective effort aimed
              at creating a more sustainable and resilient future.
            </motion.p>
            <motion.p
              className="my-3 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            >
              <span className="italic text-red-700">
                Sustainable Research in Energy and Environment (SREE-2024){" "}
              </span>{" "}
              conference is a pivotal event that catalyzes collaboration and
              knowledge exchange to pave the way for a greener and more
              sustainable world.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-wrap flex-row my-5 w-full px-10 md:px-28 items-center justify-center">
          {verticle.map((items, ind) => (
            <VerticalProp
              img={items.img}
              heading={items.heading}
              content={items.content}
              key={ind}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
