import { useState } from "react";
import Title from "../components/Title";
import { Header2 } from "../components/Header";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("Premium");
  const plans = [
    {
      name: "Premium",
      quality: "4K + HDR",
      monthlyPrice: "1,100",
      qualityStatus: "Best",
      resolution: "4k (Ultra HD) + HDR",
      spatialAudio: true,
      supportedDevices: "TV, computer, mobile phone, tablet",
      allowDevices: 4,
      downloadDevices: 6,
      bgColor: "premium-bg",
    },
    {
      name: "Standard",
      quality: "1080p",
      monthlyPrice: "800",
      qualityStatus: "Great",
      resolution: "1080p (Full HD)",
      spatialAudio: false,
      supportedDevices: "TV, computer, mobile phone, tablet",
      allowDevices: 2,
      downloadDevices: 2,
      bgColor: "standard-bg",
    },
    {
      name: "Basic",
      quality: "720p",
      monthlyPrice: "450",
      qualityStatus: "Good",
      resolution: "720p (HD)",
      spatialAudio: false,
      supportedDevices: "TV, computer, mobile phone, tablet",
      allowDevices: 1,
      downloadDevices: 1,
      bgColor: "basic-bg",
    },
    {
      name: "Mobile",
      quality: "480p",
      monthlyPrice: "250",
      qualityStatus: "Fair",
      resolution: "480p",
      spatialAudio: false,
      supportedDevices: "mobile phone, tablet",
      allowDevices: 1,
      downloadDevices: 1,
      bgColor: "mobile-bg",
    },
  ];
  return (
    <div className="w-full">
      <Header2 />
      <Title title={"Netflix"} />
      <span className="mt-10 inline-block px-32">STEP 2 OF 3</span>
      <h1 className="text-4xl px-32 font-semibold text-zinc-800 mt-">
        Choose the plan that&apos;s right for you
      </h1>
      <div className="w-full px-32 min-h-[70vh] grid grid-cols-4 mt-10 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`w-full h-full relative rounded-2xl transition-all duration-300 border-2 overflow-hidden border-black/20 ${
              plan.name === selectedPlan && "shadow-sm"
            }`}
          >
            <button
              onClick={() => setSelectedPlan(plan.name)}
              className="w-full h-full absolute top-0 left-0 z-50"
            ></button>
            <div className="w-full p-3">
              <div
                className={`w-full min-h-20 rounded-xl p-3 flex flex-col relative ${plan.bgColor}`}
              >
                <span className="text-white font-bold text-xl">
                  {plan.name}
                </span>
                <span className="text-white font-bold">{plan.quality}</span>
                <FaCheckCircle
                  className={`text-white transition-all duration-300 absolute right-3 bottom-3 ${
                    plan.name === selectedPlan ? "scale-100" : "scale-0"
                  }`}
                />
              </div>
              <div className="w-full py-5 px-4 flex flex-col gap-3">
                <div className="pb-4 border-b border-black/20">
                  <h4 className="text-sm text-zinc-600 font-semibold">
                    Monthly price
                  </h4>
                  <span className="mt-1 inline-block text-zinc-700 font-semibold">
                    Rs {plan.monthlyPrice}
                  </span>
                </div>
                <div className="pb-4 border-b border-black/30">
                  <h4 className="text-sm text-zinc-600 font-semibold">
                    Video and sound quality
                  </h4>
                  <span className="mt-1 inline-block text-zinc-700 font-semibold">
                    {plan.qualityStatus}
                  </span>
                </div>
                <div className="pb-4 border-b border-black/30">
                  <h4 className="text-sm text-zinc-600 font-semibold">
                    Resolution
                  </h4>
                  <span className="mt-1 inline-block text-zinc-700 font-semibold">
                    {plan.resolution}
                  </span>
                </div>
                {plan.spatialAudio && (
                  <div className="pb-4 border-b border-black/30">
                    <h4 className="text-sm text-zinc-600 font-semibold">
                      Spatial audio (immersive sound)
                    </h4>
                    <span className="mt-1 inline-block text-zinc-700 font-semibold">
                      {plan.spatialAudio ? "Included" : ""}
                    </span>
                  </div>
                )}
                <div className="pb-4 border-b border-black/30">
                  <h4 className="text-sm text-zinc-600 font-semibold">
                    Supported devices
                  </h4>
                  <span className="mt-1 inline-block text-zinc-700 font-semibold">
                    {plan.supportedDevices}
                  </span>
                </div>
                <div className="pb-4 border-b border-black/30">
                  <h4 className="text-sm text-zinc-600 font-semibold">
                    Devices you household can watch at the same time
                  </h4>
                  <span className="mt-1 inline-block text-zinc-700 font-semibold">
                    {plan.allowDevices}
                  </span>
                </div>
                <div className="pb-4">
                  <h4 className="text-sm text-zinc-600 font-semibold">
                    Download devices
                  </h4>
                  <span className="mt-1 inline-block text-zinc-700 font-semibold">
                    {plan.downloadDevices}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full px-32 pb-20 flex flex-col items-center">
        <h4 className="text-zinc-500 my-5">
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our{" "}
          <Link className="text-blue-600">Terms of Use</Link> for more details.
          Only people who live with you may use your account. Watch on 4
          different devices at the same time with Premium, 2 with Standard, and
          1 with Basic and Mobile.
        </h4>
        <button
          onClick={() => {
            toast.success(`You Have Subscribed ${selectedPlan}`);
          }}
          className="py-4 rounded-md bg-red-600 hover:bg-red-700 transition-all duration-300 text-white text-2xl font-semibold px-60"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Plans;
