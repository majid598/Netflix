import { Link } from "react-router-dom";
import Title from "../components/Title";

const Step0 = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Title title={"Netflix"} />
      <div className="flex flex-col items-center text-center bg--400 w-[30rem] px-10">
        <div className="w-5/6">
          <img src="/assets/devices.png" alt="" />
        </div>
        <div className="mt-10">
          <span>STEP 1 OF 3</span>
          <h1 className="text-4xl mt-2 font-semibold text-zinc-800">
            Finish setting up your account
          </h1>
          <h3 className="text-xl mt-5">
            Netflix is personalized for you. Create a password to watch on br
            any device at <br /> any time.
          </h3>
        </div>
        <Link to={"/signup/regform"} className="w-full inline-block p-5 mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold text-2xl rounded-md transition-all duration-300">
          Next
        </Link>
      </div>
    </div>
  );
};

export default Step0;
