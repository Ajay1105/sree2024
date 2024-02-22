import { HeaderComp } from "@/components";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div>
        <HeaderComp heading={"Contact Us"} />
        <div className="w-full px-[10%] py-8 bg-[#EBF3E8]">
          <p className="text-2xl font-semibold text-blue-800 py-12">
            If you have any queries or require further information, please
            contact:{" "}
          </p>
          <p className="text-lg font-semibold py-2">Dr. Anurag Kumar Tiwari</p>
          <p className="py-1">
            Assistant Professor, Department of Chemical Engineering
          </p>
          <p className="py-1">
            Dr B R Ambedkar National Institute of Technology Jalandhar
          </p>
          <p className="py-1">
            Punjab - 144011, India, Email: sree2024@nitj.ac.in
          </p>
          <p className="py-1">
            Phone No: +91-181-2690301 Ext. 2420, Mob No: +91-9956356951
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
