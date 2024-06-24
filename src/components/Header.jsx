const Header = () => {
  return (
    <div className="w-full px-52 h-28 py-6 flex justify-between items-center">
      <div className="w-44">
        <img src="/assets/logo.svg" alt="" />
      </div>
      <div className="">
        <button className="px-6 py-2 bg-[#C11119] rounded-md text-white font-semibold">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;

export const Header2 = () => {
  return (
    <div className="w-full px-20 border-b-2 h-28 py-6 flex justify-between items-center">
      <div className="w-44">
        <img src="/assets/logo.svg" alt="" />
      </div>
      <div className="">
        <button className="px-6 py-2 rounded-md text-zinc-600 text-2xl font-semibold">
          Sign in
        </button>
      </div>
    </div>
  );
};
