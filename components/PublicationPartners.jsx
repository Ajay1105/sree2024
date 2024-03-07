import { ScopusIndexJournal, sci, scie, v1 } from "@/assets";
import { HeaderComp } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

const PublicationPartners = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <HeaderComp heading={"Publication Partners"} />
        <div className="w-full px-[10%] my-8">
          <ul className="text-lg italic font-bold text-blue-900">
            <li className="mb-10">
              All selected abstract will be published with ISBN number.
            </li>
            <li className="my-5">
              All selected high-quality papers in the conference will be
              considered for publication in SCI/Scopus journals as special
              issues, subject to the peer review process.
            </li>
          </ul>
          <div className="flex flex-row">
            <motion.div
              initial={{ translateY: 100 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col w-[250px] md:w-[420px] rounded-lg hover:border-black border-[1px] border-solid"
            >
              <Image
                src={v1}
                width={400}
                height={400}
                className="px-2"
                alt="thomson"
              />
              <p className="px-2 text-xl italic font-semibold">
                Emerging Sources Citation Index (ESCI) Web of Science (Thomson
                Reuters)
              </p>
            </motion.div>
            <motion.div
              initial={{ translateY: 100, opacity: 0}}
              animate={{ translateY: 0, opacity: 1}}
              transition={{ duration: 1,  delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col ml-12 w-[250px] md:w-[420px] rounded-lg hover:border-black border-[1px] border-solid"
            >
              <Image
                src={ScopusIndexJournal}
                width={370}
                height={500}
                className="ml-2 px-1 mt-5 mb-10"
                alt="thomson"
              />
              <p className="px-2 text-xl italic flex justify-center font-semibold">
                Scopus Index Journal
              </p>
            </motion.div>
            <motion.div
              initial={{ translateY: 100, opacity: 0}}
              animate={{ translateY: 0, opacity: 1}}
              transition={{ duration: 1,  delay: 1.6 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col ml-12 w-[250px] md:w-[420px] rounded-lg hover:border-black border-[1px] border-solid"
            >
              <Image
                src={scie}
                width={350}
                height={400}
                className="ml-2 px-2 mt-5 mb-10"
                alt="thomson"
              />
              <p className="px-2 text-xl italic flex justify-center font-semibold">
              SCIE index journal
              </p>
            </motion.div>

            <motion.div
              initial={{ translateY: 100, opacity: 0}}
              animate={{ translateY: 0, opacity: 1}}
              transition={{ duration: 1,  delay: 2.4 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col ml-12 w-[250px] md:w-[420px] rounded-lg hover:border-black border-[1px] border-solid"
            >
              <Image
                src={sci}
                width={350}
                height={400}
                className="ml-2 px-2 mt-5 mb-10"
                alt="thomson"
              />
              <p className="px-2 text-xl italic flex justify-center font-semibold">
              SCI index journal
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PublicationPartners;
