import { BiPlus } from "react-icons/bi";
import { FaChevronRight, FaSortDown } from "react-icons/fa";
import Header from "../components/Header";
import {
  AIcon,
  ArrowIcon,
  CartoonIcon,
  TorchIcon,
  TvIcon,
} from "../components/Icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [active, setActive] = useState(false);
  const cards = [
    {
      heading: "Enjoy on your TV",
      text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: <TvIcon />,
    },
    {
      heading: "Download your shows to watch offline",
      text: "Download your shows to watch offline",
      icon: <ArrowIcon />,
    },
    {
      heading: "Watch everywhere",
      text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: <TorchIcon />,
    },
    {
      heading: "Create profiles for kids",
      text: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      icon: <CartoonIcon />,
    },
  ];
  const faqs = [
    "What is Netflix?",
    "How much does Netflix cost?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch on Netflix?",
    "Is Netflix good for kids?",
  ];
  const links = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  return (
    <div className="w-full text-white">
      <div className="w-full relative h-screen bg-[url('/assets/bg.jpg')] bg-cover">
        <div className="w-full h-full absolute top-0 left-0 bg-black/80"></div>
        <div className="w-full h-full relative  z-50">
          <Header />
          <div className="w-full h-[calc(100vh-7rem)] flex flex-col justify-center items-center">
            <h1 className="text-7xl text-center font-bold">
              Unlimited movies,
              <br /> TV shows, and more
            </h1>
            <span className="text-xl font-semibold mt-6">
              Starts at Rs 250. Cancel anytime.
            </span>
            <h3 className="text-xl mt-8">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="flex gap-2 mt-5 w-full justify-center">
              <input
                type="text"
                className="px-2 py-4 bg-transparent border-2 border-zinc-600 focus:ring-2 ring-white outline-none rounded-lg w-1/4"
                placeholder="Email Address"
              />
              <button className="px-12 bg-[#C11119] hover:bg-red-800 transition-all duration-300 p-4 rounded-lg flex text-xl font-semibold gap-4 items-center">
                Get Started <FaChevronRight className="text-xl" />
              </button>
            </div>
          </div>
          <div className="w-full overflow-hidden left-1/2 -translate-x-1/2 absolute top-[95%] z-[99] h-52">
            <div className="w-[120vw] left-1/2 -translate-x-1/2 absolute z-[99] h-52">
              <div className="w-full border-t-[5px] border-red-600 h-full bg-black relative z-[99] overflow-hidden rounded-[50%]">
                <div className="w-2/3 mx-auto h-14 rounded-[50%] bg-[#10193A] left-1/2 -translate-x-1/2 z-[99] absolute blur-xl -top-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative bg-black p-32">
        <div className="w-full h-full relative z-[999]">
          <h1 className="text-3xl font-semibold">
            Get More From Your Membership
          </h1>
          <div className="w-full flex flex-col justify-center h-[60vh] rounded-3xl p-10 overflow-hidden bg relative mt-5">
            <h1 className="text-4xl font-bold">
              Mobile games now included in <br /> every plan
            </h1>
            <h4 className="text-xl font-semibold mt-5">
              No ads, extra fees, or in-app purchases. Enjoy unlimited access{" "}
              <br /> to a growing catalog of popular and exclusive games.
            </h4>
            <img
              src="/assets/netflix.webp"
              className="w-1/2 absolute top-0 right-0 h-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full px-32 bg-black pb-32">
        <h1 className="text-3xl font-semibold">More Reasons to Join</h1>
        <div className="mt-5 grid grid-cols-4 gap-5">
          {cards.map((card) => (
            <div
              key={card.heading}
              className="w-full min-h-[50vh] gap-5 cardbg rounded-3xl px-5 py-8 flex flex-col justify-between"
            >
              <div>
                <h1 className="text-3xl font-semibold">{card.heading}</h1>
                <p className="text-xl text-zinc-400 font-semibold mt-5">
                  {card.text}
                </p>
              </div>
              <div className="w-full flex justify-end">{card.icon}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full px-32 bg-black">
        <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
        <div className="w-5/6 mt-5 h-screen flex flex-col gap-3">
          {faqs.map((faq) => (
            <button
              onClick={() => setActive((prev) => !prev)}
              key={faq}
              className="w-full h-24 relative bg-[#2D2D2D] z-50 transition-all duration-300 hover:bg-[#414141] cursor-pointer"
            >
              <div className=" flex justify-between items-center px-5 w-full h-full relative z-50">
                <h2 className="text-2xl font-semibold">{faq}</h2>
                <BiPlus className="text-4xl" />
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-screen bg-black px-32">
        <h1 className="text-xl font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className="flex gap-2 mt-5 w-full">
          <input
            type="text"
            className="px-2 py-4 bg-transparent border-2 border-zinc-600 focus:ring-2 ring-white outline-none rounded-lg w-3/5"
            placeholder="Email Address"
          />
          <button className="px-12 bg-[#C11119] hover:bg-red-800 transition-all duration-300 p-4 rounded-lg flex text-xl font-semibold gap-4 items-center">
            Get Started <FaChevronRight className="text-xl" />
          </button>
        </div>
        <div className="w-full mt-5 text-xl">
          <Link className="underline text-zinc-300">
            Questions? Contact us.
          </Link>
          <div className="w-full grid gap-4 mt-10 text-zinc-300 grid-cols-4">
            {links.map((link) => (
              <Link key={link}>{link}</Link>
            ))}
          </div>
          <button className="flex gap-3 items-center py-2 px-4 rounded-md mt-10 border-2 border-zinc-300">
            <AIcon /> English <FaSortDown />
          </button>
          <div className="mt-6">
            <h2>
              Netflix Pakistan By code_with_raju &copy; All Rights reserved.{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
