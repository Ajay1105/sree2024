import { HeaderComp } from "@/components";
import { advisoryCommittee } from "@/components/content";
import { motion } from "framer-motion";

const AdvisoryCommittee = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <HeaderComp heading={"Advisory Committee"} />
        <div className="w-full px-[10%] my-8">
          {advisoryCommittee.map((items, ind) => (
            <motion.p
              className="my-2 text-lg"
              key={ind}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            >
              <span className="font-semibold">{items.name}</span>, {items.cllg}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AdvisoryCommittee;
