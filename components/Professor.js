import Image from "next/image";
import { motion } from "framer-motion";

const Professor = (props) => {
  return (
    <div className="w-full px-[10%] my-8 flex flex-col md:flex-row justify-start">
      <motion.div whileHover={{ scale: 1.2 }} className="flex justify-center">
        <Image
          src={props.img}
          height={200}
          width={200}
          alt={props.img}
          className="w-48 h-48 md:h-60 rounded-lg"
        />
      </motion.div>
      <div className="flex flex-col justify-center pl-12">
        <p className="text-2xl font-semibold italic my-2">{props.name}</p>
        <p className="text-xl font-medium ">{props.desg}</p>
        <p className="text-xl font-medium my-1">{props.dept}</p>
        <p className="text-xl font-medium ">{props.cllg}</p>
      </div>
    </div>
  );
};

export default Professor;
