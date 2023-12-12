import { HeaderComp, Navbar } from "@/components";

const page = () => {
  return (
    <div>
      <HeaderComp heading={"Important Dates"} />
      <div className="w-full px-[10%] my-8">
        <div className="flex">
          <p className="text-3xl my-2 font-medium flex-1">Last date of receipt the abstract</p>
          <p className="text-3xl my-2 font-medium flex-1 text-right">March 10, 2024</p>
        </div>
        <div className="flex">
          <p className="text-3xl my-2 font-medium flex-1">Intimation of acceptance</p>
          <p className="text-3xl my-2 font-medium flex-1 text-right">March 15, 2024</p>
        </div>
        <div className="flex">
          <p className="text-3xl my-2 font-medium flex-1">Last date of Registration</p>
          <p className="text-3xl my-2 font-medium flex-1 text-right">March 26, 2024</p>
        </div>
        <div className="flex">
          <p className="text-3xl my-2 font-medium flex-1">Last date of submission of full paper</p>
          <p className="text-3xl my-2 font-medium flex-1 text-right">May 15, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default page;