import { header } from "@/assets";
import { HeaderComp, Navbar } from "@/components";
import { callForPaper } from "@/components/content";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <HeaderComp heading={"Call For Papers"}/>

      <div className="my-8 mx-[10%]">
        <p className="font-medium text-lg">
          We invite researchers, academics, industry professionals, and
          policymakers to submit original research papers for consideration in
          the upcoming conference on "Sustainable Research in Energy and the
          Environment (SREE-2024)" The conference aims to provide a platform for
          sharing cutting-edge research and fostering discussions on sustainable
          solutions in the fields of energy and the environment.
        </p>
        <p className="font-medium text-lg my-4">Topics of interest include, but are not limited to:</p>

        <ul className="list-disc">
          {callForPaper.map((items, ind) => (
            <li className="my-3" key={ind}>{items}</li>
          ))}
        </ul>

        <p className="italic text-lg font-semibold text-blue-600">
          All the presented papers in the conference will be considered for
          publication SCI /SCOPUS journals /book chapter with ISBN number as
          special issued with subject to peer review process.
        </p>
      </div>
    </div>
  );
};

export default page;
