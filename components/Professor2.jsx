import Image from "next/image";

const Professor2 = (props) => {
  return (
    <div className="w-60 mx-8 my-8 flex flex-col justify-start">
      <Image
        src={props.img}
        height={""}
        width={""}
        alt="director"
        className="w-60 h-60 rounded-lg"
      />
      <div className="flex flex-col justify-center mt-5">
        <p className="text-lg font-medium italic my-2">{props.name}</p>
        <p className="">{props.desg}</p>
      </div>
    </div>
  );
};

export default Professor2;
