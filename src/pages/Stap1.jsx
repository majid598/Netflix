import Title from "../components/Title";

const Step1 = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Title title={"Netflix"} />
      <div className="flex flex-col items-start bg--400 w-[40rem] px-10">
        <div className="mt-10">
          <span>STEP 1 OF 3</span>
          <h1 className="text-4xl mt-2 font-semibold text-zinc-800">
            Create a password to start <br /> your membership
          </h1>
          <h3 className="text-xl mt-5">
            Just a few more steps and you're done! <br /> We hate paperwork,
            too.
          </h3>
        </div>
        <div className="w-full mt-5">
          <input
            type="text"
            className="w-full p-4 rounded-md bg-transparent outline-none focus:ring-2 ring-black border border-black"
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full p-4 mt-3 rounded-md bg-transparent outline-none focus:ring-2 ring-black border border-black"
            placeholder="Add a password"
          />
          <label className="flex gap-2 text-xl items-center mt-2">
            <input type="checkbox" className="w-5 h-5 cursor-pointer"/>
            Please do not email me Netflix special offers.
          </label>
        </div>
        <button className="w-full inline-block p-5 mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold text-2xl rounded-md transition-all duration-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
