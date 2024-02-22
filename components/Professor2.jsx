import Image from "next/image";
import { motion } from "framer-motion";

const Professor2 = (props) => {
  return (
    <div className="w-60 mx-8 my-8 flex flex-col justify-start">
      <motion.div whileHover={{ scale: 1.2 }} className="flex justify-center">
        <Image
          src={props.img}
          height={240}
          width={240}
          alt={props.img}
          className="w-60 h-60 rounded-lg"
        />
      </motion.div>
      <div className="flex flex-col justify-center mt-5">
        <p className="text-lg font-medium italic my-2">{props.name}</p>
        <p className="">{props.desg}</p>
      </div>
    </div>
  );
};

export default Professor2;
