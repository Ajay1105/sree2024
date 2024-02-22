import {
  DrAjayKumarArora,
  ProfAjayKumarDalai,
  ProfAshokPandey,
  ProfShishirSinha,
  ProfThalladaBhaskar,
} from "@/assets";
import { HeaderComp } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

const ResourcePersons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <HeaderComp heading={"Resource Persons"} />
        <div className="w-full bg-gray-800">
          <p className="text-4xl text-white font-medium py-5 text-center">
            Chief Guest
          </p>
        </div>
        <div className="flex align-middle justify-center">
          <div className="w-[60%] mx-8 my-8 flex flex-col justify-start">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex justify-center flex-col md:flex-row"
            >
              <Image
                src={ProfAshokPandey}
                height={240}
                width={260}
                alt={"ProfAshokPandey"}
                className="w-[340px] h-[340px] rounded-lg mr-10"
              />
              <div className="flex flex-col justify-center mt-5">
                <p className="text-xl font-semibold italic my-2">
                  Professor Ashok Pandey{" "}
                </p>
                <p className="font-normal text-lg">
                  Distinguished Scientist at the Centre for Innovation and
                  Translational Research, CSIR-Indian Institute of Toxicology
                  Research, Lucknow, India and Executive Director (Honorary) at
                  the Centre for Energy and Environmental Sustainability - India
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full bg-gray-800">
          <p className="text-4xl text-white font-medium py-5 text-center">
            Guest of Honour
          </p>
        </div>
        <div className="flex align-middle justify-center">
          <div className="w-[60%] mx-8 my-8 flex flex-col justify-start">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex justify-center flex-col md:flex-row"
            >
              <Image
                src={ProfShishirSinha}
                height={240}
                width={240}
                alt={"ProfShishirSinha"}
                className="w-60 h-60 rounded-lg mr-10"
              />
              <div className="flex flex-col justify-center mt-5">
                <p className="text-xl font-semibold italic my-2">
                  Professor Shishir Sinha{" "}
                </p>
                <p className="font-normal text-lg">
                  Director General, Central Institute of Petrochemical
                  Engineering and Technology (CIPET) , Government of India
                  <br />&
                  <br />
                  Professor, Department of Chemical Engineering Indian Institute
                  of Technology Roorkee, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-800">
        <p className="text-4xl text-white font-medium py-5 text-center">
          Keynote Speakers
        </p>
      </div>

      <div className="flex align-middle justify-center">
        <div className="w-[60%] mx-8 my-8 flex flex-col justify-start">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex justify-center flex-col md:flex-row"
          >
            <Image
              src={ProfAjayKumarDalai}
              height={240}
              width={260}
              alt={"ProfThalladaBhaskar"}
              className="w-[340px] h-60 rounded-lg mr-10"
            />
            <div className="flex flex-col justify-center mt-5">
              <p className="text-xl font-semibold italic my-2">
                Professor Ajay Kumar Dalai{" "}
              </p>
              <p className="font-normal text-lg">
                Distinguished Professor and Canada Research Chair in Bioenergy
                and Environmental Friendly Chemical Processes,
                <br />
                Department of Chemical and Biological Engineering,
                <br />
                University of Saskatchewan, Canada
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex align-middle justify-center">
        <div className="w-[60%] mx-8 my-8 flex flex-col justify-start">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex justify-start flex-col md:flex-row"
          >
            <Image
              src={ProfThalladaBhaskar}
              height={240}
              width={260}
              alt={"ProfThalladaBhaskar"}
              className="w-60 h-60 rounded-lg mr-10"
            />
            <div className="flex flex-col justify-center mt-5">
              <p className="text-xl font-semibold italic my-2">
                Professor Thallada Bhaskar{" "}
              </p>
              <p className="font-normal text-lg">
                Chief Scientist & HoD,
                <br />
                Professor, Academy of Scientific and Innovative Research (AcSIR)
                <br />
                Material Resource Efficiency Division (MRED),
                <br />
                CSIR-Indian Institute of Petroleum
                <br />
                Dehradun-248005, Uttarakhand, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex align-middle justify-center">
        <div className="w-[60%] mx-8 my-8 flex flex-col justify-start">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex justify-start flex-col md:flex-row"
          >
            <Image
              src={DrAjayKumarArora}
              height={240}
              width={260}
              alt={"DrAjayKumarArora"}
              className="w-60 h-60 rounded-lg mr-10"
            />
            <div className="flex flex-col justify-center mt-5">
              <p className="text-xl font-semibold italic my-2">
                Dr Ajay Kumar Arora,{" "}
              </p>
              <p className="font-normal text-lg">
                Chief General Manager,
                <br />
                Indian Oil, Research & Development Centre
                <br />
                Faridabad, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourcePersons;
