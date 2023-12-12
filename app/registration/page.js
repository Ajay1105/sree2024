import { HeaderComp, Navbar } from "@/components";

const page = () => {
  return (
    <div>
      <HeaderComp heading={"Registrations"} />
      <div className="w-full px-[10%] my-8 flex flex-col justify-center items-center">
        <p className="text-4xl font-semibold">Registration Fees</p>
        <p className="my-8">
          The authors presenting the papers and others who are interested to
          participate in the conference must register themselves before the last
          date of registration. Only the registered persons will be given the
          conference certificates. Registration fee does not include the
          accommodation charges
        </p>
        <p className="text-2xl font-medium">SREE-2024 Registration Fee</p>

        <table className="border-collapse my-8">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 text-center">Category</th>
              <th className="py-2 text-center">
                Eirly Bird Registration Fee (before August 16, 2021)
              </th>
              <th className="py-2 text-center">
                Late Registration Fee (after August 16, 2021)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold py-2">Indian Participant</td>
              <td className="py-2 text-center">Rs.4500</td>
              <td className="py-2 text-center">Rs.5000</td>
            </tr>
            <tr>
              <td className="font-bold py-2">International Participant</td>
              <td className="py-2 text-center">$200</td>
              <td className="py-2 text-center">$250</td>
            </tr>
            <tr>
              <td className="font-bold py-2">Listener (Indian Participant)</td>
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

        <div className="w-full mt-4">
        <p>For any query regarding registration, please contact:</p>
        <p className="font-bold">Dr. Anurag Kumar Tiwari</p>
        <p className="font-bold">Email: xxxxxxxx@nitj.ac.in</p>
        </div>

      </div>
    </div>
  );
};

export default page;
