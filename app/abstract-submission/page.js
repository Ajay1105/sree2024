"use client"

import { useState } from "react";
import { Navbar, HeaderComp } from "@/components";
import Upload from "@/components/Upload.jsx";

const page = () => {

const [clicked, setclicked] = useState(false);

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/sample.pdf'; // Replace with actual path of PDF
    downloadLink.download = 'example.pdf'; // Specify desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <HeaderComp heading={"Abstract Submission"} />
      <div className="w-full px-[10%] my-8">
        <p className="text-lg font-medium">
          All abstracts are being accepted for oral presentations. Abstracts
          must be clearly defined the objectives, methodology, results, and
          significance outcome of the research study. The length of extended
          abstract in your original submission should not exceed ONE page. It
          should be prepared according to the templates given below and
          <span className="text-red-600 italic">
            {" "}
            submitted as a single pdf file.
          </span>
        </p>
        <p className="font-medium text-xl my-4">Guideline</p>

        <ul className="list-disc">
          <li className="my-2">
            All abstracts must be submitted and presented in clear English with
            accurate grammar and spelling of a quality suitable for publication.
          </li>
          <li className="my-2">
            The presenting author is requested to ensure that all co-authors are
            aware of the content of the abstract before submission.
          </li>
          <li className="my-2">
            Only the abstracts of registered presenting authors will be included
            in the final programme.
          </li>
          <li className="my-2">
            The Technical Committee will determine whether abstracts will be
            accepted as oral presentations in SREE-2024. All the abstracts will
            be reviewed and assigned to appropriate sessions.
          </li>
          <li className="my-2">
            If your abstract is accepted, you will be invited to present your
            research work orally through virtual mode.
          </li>
          <li className="my-2">
            All abstracts must contain novel/new research data.
          </li>
          <li className="my-2">
            If the same research work was previously submitted to a different
            conference, but was not presented, it can be submitted to this
            conference as well. If it was previously presented, it cannot be
            submitted to SREE-2024.
          </li>
          <li className="my-2">
            Use template (MS Word), without changing the settings, to prepare
            your one pages abstract.
          </li>
        </ul>

        <p className="font-medium my-4 text-lg">
          Template of the extended abstract: <button onClick={handleDownload} className="italic underline">Click here</button>
        </p>
        <p className="text-lg text-semibold text-red-600 my-4">
          Submit Abstract to the SREE-2024: <button onClick={()=>setclicked(prev=> !prev)}  className="italic underline">Submit Now</button>
          </p>
          {clicked && <Upload/>}
        <p>
          If you encounter any problems using the templates orthe submission
          process, please email the (Dr. Anurag Kumar Tiwari) at
          XXXXX@nitj.ac.in
        </p>
      </div>
    </div>
  );
};

export default page;
