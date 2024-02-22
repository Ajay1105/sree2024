"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  HomePage,
  AdvisoryCommittee,
  AbstractSubmission,
  CallForPapers,
  ContactUs,
  ImportantDates,
  OrganizingCommittee,
  OnlineRegistration,
  PublicationPartners,
  ResourcePersons,
} from "@/components";

const componentMap = {
  AdvisoryCommittee,
  AbstractSubmission,
  HomePage,
  CallForPapers,
  ContactUs,
  ImportantDates,
  OrganizingCommittee,
  OnlineRegistration,
  PublicationPartners,
  ResourcePersons,
};

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("HomePage");
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (componentName) => {
    if (componentName !== activeComponent) {
      setActiveComponent(componentName);
    }
  };

  const handleListItemClick = (item) => {
    if (item == "Home") {
      setActiveComponent("HomePage");
    }
    const itemNameWithoutSpaces = item.replace(/\s/g, ""); // Remove white spaces
    handleButtonClick(itemNameWithoutSpaces);
    setIsOpen(false);
  };

  const DynamicComponent = componentMap[activeComponent];
  return (
    <div>
      <div className="bg-[rgba(0,123,191,1)] h-fit w-[100%] fixed top-0 px-0 mx-0 flex flex-row items-center justify-between text-white py-2 z-10">
        <a href="/">
          <motion.p
            className="font-normal text-[15pt] ml-5 mr-6 w-fit"
            whileHover={{ scale: 1.5 }}
          >
            SREE-2024
          </motion.p>
        </a>

        <ul className="hidden md:visible md:flex flex-row w-[90%] mr-3 justify-between">
          <div>
            <motion.li
              className="md:mx-1 lg:mx-2 hover:text-gray-900"
              key={`links-${"home"}`}
              onClick={() => handleListItemClick("HomePage")}
              whileHover={{ scale: 1.1 }}
            >
              {"Home"}
            </motion.li>
            {activeComponent === "HomePage" && (
              <motion.div
                className="ml-[20%] w-[70%] h-1 bg-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 0.8 }}
              />
            )}
          </div>
          {[
            "Call For Papers",
            "Abstract Submission",
            "Important Dates",
            "Online Registration",
            "Publication Partners",
            "Resource Persons",
            "Organizing Committee",
            "Advisory Committee",
            "Contact Us",
          ].map((item) => (
            <div key={`links-${item}`}>
              <motion.li
                className="md:mx-1 hover:text-gray-900"
                onClick={() => handleListItemClick(item)}
                whileHover={{ scale: 1.2 }}
              >
                {item}
                {item==="Abstract Submission" && <sup className="animate-blinking-fast italic text-base ml-1 font-semibold">new</sup>}
                {activeComponent == item.replace(/\s/g, "") && (
                  <motion.div
                    className="ml-[10%] w-[90%] h-1 bg-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </motion.li>
            </div>
          ))}
        </ul>

        {isOpen ? (
          <ul className="md:hidden flex flex-col w-fit mr-8">
            <motion.li
              className="mr-2 lg:mr-0 font-bold text-red-800"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: 0.3 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            >
              X
            </motion.li>
            <li
              className=""
              key={`links2-${"home"}`}
              onClick={() => handleListItemClick("HomePage")}
            >
              {"Home"}
            </li>
            {[
              "Call For Papers",
              "Abstract Submission",
              "Important Dates",
              "Online Registration",
              "Publication Partners",
              "Resource Persons",
              "Organizing Committee",
              "Advisory Committee",
              "Contact Us",
            ].map((item, ind) => (
              <motion.li
                className=""
                key={`links2-${item}`}
                onClick={() => handleListItemClick(item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: ind * 0.1 },
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
              >
                {item}
                {item==="Abstract Submission" && <sup className="animate-blinking-fast italic text-base ml-1 font-semibold">new</sup>}
              </motion.li>
            ))}
          </ul>
        ) : (
          <div className="md:hidden white mr-8" onClick={() => setIsOpen(true)}>
            ☰
          </div>
        )}
              </div>
      <DynamicComponent />
    </div>
  );
}
