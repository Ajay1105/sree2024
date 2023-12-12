import { HeaderComp, Navbar } from "@/components";
import { advisoryCommittee } from "@/components/content";

const page = () => {
  return (
    <div>
      <HeaderComp heading={"Important Dates"} />
      <div className="w-full px-[10%] my-8">
      {advisoryCommittee.map((items)=>(
        <p className="my-2 text-lg"><span className="font-semibold">{items.name}</span>,{" "}{items.cllg}</p>
      ))}
      </div>
    </div>
  );
};

export default page;
