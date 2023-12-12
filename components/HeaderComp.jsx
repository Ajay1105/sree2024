import Image from "next/image";
import { header } from "@/assets";

const HeaderComp = ({heading}) => {
  return (
    <div className="relative w-[100%] h-[320px]">
        <Image
          src={header}
          width={""}
          height={""}
          alt="cllg Img"
          className="absolute w-[100vw] h-[320px] -z-10"
        />
        <div className="text-white w-full h-full flex items-center justify-center text-center">
          <p className="mb-3 text-3xl md:text-7xl font-semibold">{heading}</p>
        </div>
      </div>

  )
}

export default HeaderComp