import { FiCheck } from "react-icons/fi";
import Title from "../components/Title";

const Step2 = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Title title={"Netflix"} />
      <div className="flex flex-col items-center text-center bg--400 w-[30rem] px-10">
        <div className="">
          <img src="/assets/Checkmark.png" className="w-16" alt="" />
        </div>
        <div className="mt-5">
          <span>STEP 1 OF 3</span>
          <h1 className="text-4xl mt-2 font-semibold text-zinc-800">
            Choose your plan.
          </h1>
          <div className="flex flex-col text-2xl py-6 w-full items-start text-start">
            <h2 className="flex items-center gap-2">
              <FiCheck className="text-3xl text-red-600" /> No commitments,
              cancel anytime.
            </h2>
            <h2 className="flex items-center gap-2">
              <FiCheck className="text-3xl text-red-600" />
              Everything on Netflix for one <br /> low price.
            </h2>
            <h2 className="flex items-center gap-2">
              <FiCheck className="text-3xl text-red-600" />
              No ads and no extra fees. Ever.
            </h2>
          </div>
        </div>
        <button className="w-full inline-block p-5 mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold text-2xl rounded-md transition-all duration-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
