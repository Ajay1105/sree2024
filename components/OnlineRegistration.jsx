import { HeaderComp } from ".";
import { motion } from "framer-motion";

const OnlineRegistration = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <HeaderComp heading={"Registrations"} />
        <div className="w-full px-[10%] my-8 flex flex-col justify-center items-center">
          {/*<p className="text-4xl font-semibold">Registration Fees</p>*/}
          <p className="my-8 font-bold">
            The authors presenting the papers and others who are interested to
            participate in the conference must register themselves before the
            last date of registration. Only the registered persons will be given
            the conference certificates. Registration fee does not include the
            accommodation charges.
          </p>
          <p className="text-2xl font-medium">SREE-2024 Registration Fee</p>

          <table className="border-collapse my-8">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 text-center">Category</th>
                <th className="py-2 pr-2 text-center">
                  Eirly Bird Registration Fee (before March 26, 2024)
                </th>
                <th className="py-2 text-center">
                  Late Registration Fee (after March 26, 2024)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold py-2">Indian Participant (Student)</td>
                <td className="py-2 text-center">Rs.2500</td>
                <td className="py-2 text-center">Rs.3000</td>
              </tr>
              <tr>
                <td className="font-bold py-2">Indian Participant (Faculty or industry person)</td>
                <td className="py-2 text-center">Rs.4500</td>
                <td className="py-2 text-center">Rs.5000</td>
              </tr>
              <tr>
                <td className="font-bold py-2">International Participant</td>
                <td className="py-2 text-center">$200</td>
                <td className="py-2 text-center">$250</td>
              </tr>
              <tr>
                <td className="font-bold py-2">
                  Listener (Indian Participant)
                </td>
                <td className="py-2 text-center">Rs.1000</td>
                <td className="py-2 text-center">Rs.1500</td>
              </tr>
              <tr>
                <td className="font-bold py-2">
                  Listener (International Participant)
                </td>
                <td className="py-2 text-center">$25</td>
                <td className="py-2 text-center">$30</td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col md:flex-row items-center">
            <p className="font-semibold md:text-2xl py-3">
              To Online registration please follow this link:
            </p>
            <p>
              <a
                href="https://www.nitj.ac.in/events_registration/sree2024/login"
                className="font-bold text-xs md:ml-2 md:text-2xl text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.nitj.ac.in/events_registration/sree2024/login
              </a>
            </p>
          </div>

          <div className="w-full mt-4">
            <p>For any query regarding registration, please contact:</p>
            <p className="font-bold">Dr. Anurag Kumar Tiwari</p>
            <p className="font-bold">Email: sree2024@nitj.ac.in</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OnlineRegistration;
