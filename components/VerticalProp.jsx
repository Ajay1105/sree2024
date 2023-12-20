import Image from "next/image";

const VerticalProp = (props) => {
  return (
    <div className="flex flex-col lg:flex-row px-2 md:px-5 py-4 w-fit h-fit items-center align-middle text-center my-3 md:my-0">
      <Image
        src={props.img}
        width={""}
        height={""}
        alt={props.heading}
        className="h-[270px] w-[410px] rounded-lg"
      />
      <div className="md:ml-10 my-5">
        <p className="text-2xl font-medium italic my-3 text-red-600">
          {props.heading}
        </p>
        <p className=" text-justify">{props.content}</p>
      </div>
    </div>
  );
};

export default VerticalProp;
