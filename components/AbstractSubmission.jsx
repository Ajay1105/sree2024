"use client";

import { useState } from "react";
import { HeaderComp } from "@/components";
import Upload from "@/components/Upload.jsx";
import { motion } from "framer-motion";

const AbstractSubmission = () => {
  const [clicked, setclicked] = useState(false);

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/Paper_template.docx"; // path of PDF
    downloadLink.download = "Paper_template.docx"; // desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
    <div>
      <HeaderComp heading={"Abstract Submission"} />
      <div className="w-full px-[10%] my-8">
        <motion.p className="text-lg font-medium"
        initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            >
          All abstracts are being accepted for oral presentations. Abstracts
          must be clearly defined the objectives, methodology, results, and
          significance outcome of the research study. The length of abstract in
          your original submission should not exceed ONE page. It should be
          prepared according to the templates given below and
          <span className="text-red-600 italic">
            {" "}
            submitted as a single pdf file.
          </span>
        </motion.p>
        <motion.p className="font-medium text-3xl my-4"
        initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            >Guidelines</motion.p>

        <motion.ul className="list-disc"
        initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            >
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
        </motion.ul>

        <motion.div className=" flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            >
          <p className="font-medium my-4 text-3xl">
            Template of the abstract:{" "}
            <button
              onClick={handleDownload}
              className="md:ml-5 block md:inline text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              Click here
            </button>
          </p>
          <p className="text-3xl text-semibold text-red-600 my-4">
            Submit Abstract to the SREE-2024:{" "}
            <button
              onClick={() => {
                window.open("https://forms.gle/XximgV2DFhpBYpM49",'_blank');
              }}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              Submit Now
            </button>
          </p>
          {clicked && <Upload />}
        </motion.div>

        <p>
          If you encounter any problems using the templates orthe submission
          process, please email the (Dr. Anurag Kumar Tiwari) at
          sree2024@nitj.ac.in
        </p>
      </div>
    </div>
    </motion.div>
  );
};

export default AbstractSubmission;
