"use client";
import { director } from "@/assets";
import { HeaderComp, Navbar } from "@/components";
import Professor from "@/components/Professor";
import Professor2 from "@/components/Professor2";
import { motion } from "framer-motion";

import {
  conferenceChair,
  conferenceOrganizingSecetary,
  localAdvisoryCommitte,
  organizingCommitteMembers,
} from "@/components/content";

const page = () => {
  return (
    <div>
      <HeaderComp heading={"Organizing Committee"} className="w-[100vw]" />

      <div className="w-full bg-gray-800">
        <p className="text-4xl text-white font-medium py-5 text-center">
          PATRON
        </p>
      </div>
      <Professor
        img={director}
        name="Prof. Binod Kumar Kanaujia"
        desg="Director"
        cllg="Dr B R Ambedkar National Institute of Technology Jalandhar"
        key="director"
      />

      <div className="w-full bg-gray-800">
        <p className="text-4xl text-white font-medium py-5 text-center">
          CONFERENCE CHAIR
        </p>
      </div>
      {conferenceChair.map((items, ind) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: "tween" }}
          key={`profm-${ind}`}
        >
          <Professor
            img={items.img}
            name={items.name}
            desg={items.desg}
            dept={items.dept}
            cllg={items.cllg}
            key={`prof-${ind}`}
          />
        </motion.div>
      ))}
      <div className="w-full bg-gray-800">
        <p className="text-4xl text-white font-medium py-5 text-center">
          CONFERENCE ORGANIZING SECRETARY
        </p>
      </div>
      {conferenceOrganizingSecetary.map((items, ind) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: "tween" }}
          key={`prof2m-${ind}`}
        >
          <Professor
            img={items.img}
            name={items.name}
            desg={items.desg}
            dept={items.dept}
            cllg={items.cllg}
            key={`prof2-${ind}`}
          />
        </motion.div>
      ))}

      <div className="w-full bg-gray-800">
        <p className="text-4xl text-white font-medium py-5 text-center">
          LOCAL ADVISORY COMMITTEE
        </p>
      </div>
      <div className="flex flex-row justify-center text-center flex-wrap">
        {localAdvisoryCommitte.map((items, ind) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={`prof3m-${ind}`}
          >
            <Professor2
              img={items.img}
              name={items.name}
              desg={items.desg}
              key={`prof3-${ind}`}
            />
          </motion.div>
        ))}
      </div>

      <div className="w-full bg-gray-800">
        <p className="text-4xl text-white font-medium py-5 text-center">
          ORGANIZING COMMITTEE MEMBERS
        </p>
      </div>
      <div className="flex flex-row justify-center text-center flex-wrap">
        {organizingCommitteMembers.map((items, ind) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            key={`prof4m-${ind}`}
          >
            <Professor2
              img={items.img}
              name={items.name}
              desg={items.desg}
              key={`prof4-${ind}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default page;
