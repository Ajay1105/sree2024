import Image from "next/image";

const Professor = (props) => {
  return (
    <div className="w-full px-[10%] my-8 flex flex-row justify-start">
      <Image
        src={props.img}
        height={""}
        width={""}
        alt="director"
        className="w-40"
      />
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
