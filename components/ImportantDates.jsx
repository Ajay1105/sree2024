import { HeaderComp } from "@/components";
import { motion } from "framer-motion";

const ImportantDates = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div>
        <HeaderComp heading={"Important Dates"} />
        <div className="w-full px-[10%] my-8">
          <div className="flex">
            <p className="text-3xl my-2 font-medium flex-1">
              Last date of receipt the abstract
            </p>
            <p className="text-3xl my-2 font-medium flex-1 text-right">
              March 25, 2024
            </p>
          </div>
          <div className="flex">
            <p className="text-3xl my-2 font-medium flex-1">
              Intimation of acceptance
            </p>
            <p className="text-3xl my-2 font-medium flex-1 text-right">
              March 27, 2024
            </p>
          </div>
          <div className="flex">
            <p className="text-3xl my-2 font-medium flex-1">
              Last date of Registration
            </p>
            <p className="text-3xl my-2 font-medium flex-1 text-right">
              March 28, 2024
            </p>
          </div>
          <div className="flex">
            <p className="text-3xl my-2 font-medium flex-1">
              Last date of submission of full paper (only selected high quality paper)
            </p>
            <p className="text-3xl my-2 font-medium flex-1 text-right">
              May 15, 2024
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImportantDates;
