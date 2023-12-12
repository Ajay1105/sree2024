import Image from "next/image";

const HorizontalProp = (props) => {
  return (
    <div className="flex flex-col w-[400px] px-5 py-2 h-fit items-center align-middle text-center my-3 md:my-0">
      <Image src={props.img} width={""} hidden={""} alt={props.heading} className="h-[350px] w-[350px] rounded-lg"/>
      <p className="text-2xl font-medium italic my-3">{props.heading}</p>
      <p className=" text-justify">{props.content}</p>
    </div>
  );
};

export default HorizontalProp;
