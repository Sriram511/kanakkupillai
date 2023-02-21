import React from "react";
import * as bsIcon from "react-icons/bs";
import * as giIcons from "react-icons/gi";
import * as aiIcons from "react-icons/ai";
import * as ioIcons from "react-icons/md";

function Quality() {
  const qualities = [
    {
      id: 1,
      icon: <bsIcon.BsNewspaper />,
      title: "GST Registration",
      price: "₹ 999",
      detail:
        "Apply for New GST by online Registration with Kanakkupillai! Without Visiting the Govt. office, get your GST Registered in India in just seven days.",
      style: "text-green-500",
    },
    {
      id: 2,
      icon: <bsIcon.BsBriefcase />,
      title: "Pvt Ltd Company",
      price: "₹ 6141",
      detail:
        "Register your Company with Kanakkupillai in 7 days at the lowest price with free compliance software + DIN & DSC for 2 Directors + MOA & AOA + ROC Fees, PAN & TAN.",
      style: "text-blue-500",
    },
    {
      id: 3,
      icon: <bsIcon.BsFillPersonFill />,
      title: "One Person Company",
      price: "₹ 6104",
      detail:
        "OPC is a business having one owner. Before the Companies Act 2013, a company could only be founded with a minimum of two directors and members.",
      style: "text-orange-500",
    },
    {
      id: 4,
      icon: <bsIcon.BsPersonCheckFill />,
      title: "LLP Registration",
      price: "₹ 6525",
      detail:
        "Get started for LLP registration right away for your partnership business through Kanakkupillai! Limit your liability and face lesser compliance issues than a PLC registration.",
      style: "text-green-500",
    },
    {
      id: 5,
      icon: <giIcons.GiForkKnifeSpoon />,
      title: "FSSAI / Food License",
      price: "₹ 1999",
      detail:
        "Get FSSAI license Now! All manufacturers, traders, and restaurants operating any food business that may include manufacturing or processing are given food license or FSSAI license.",
      style: "text-blue-500",
    },
    {
      id: 6,
      icon: <aiIcons.AiOutlineTrademarkCircle />,
      title: "Trademark",
      price: "₹999",
      detail:
        "Get trademark for your brand name or logo with unique identity and secure legal protection within a week! Get trademark registration for any sign you use to identify your business.",
      style: "text-orange-500",
    },
    {
      id: 7,
      icon: <bsIcon.BsGlobe2 />,
      title: "Import & Export code",
      price: "₹ 1999",
      detail:
        "Apply for IEC registration online Now! And get the 10-digit IEC code. Without IEC, primarily importers merchants cannot import products, and primarily exporters merchants cannot receive benefits from DGFT.",
      style: "text-blue-500",
    },
    {
      id: 8,
      icon: <ioIcons.MdOutlineFingerprint />,
      title: "MSME Registration",
      price: "₹ 999 ",
      detail:
        "Registrations for manufacturing or service lines can be obtained through the MSME act. This registration provides many benefits regarding taxation, setting up the business, credit facilities, loans, etc.",
      style: "text-green-500",
    },
  ];

  return (
    <div className="h-full mt-10 w-full">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-3xl font-bold">We Provide</h1>
          <h1 className="text-3xl inline font-bold">
            Best <span className="text-green-500">Quality</span> Service
          </h1>
        </div>
        <div className="mt-5">
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center py-0 px-20 sm:px-0">
            {qualities.map((quality) => (
              <div key={quality.id} className="border px-10 py-5 border-black">
                <span className={` ${quality.style} text-3xl`}>
                  {quality.icon}
                </span>
                <h2 className="text-xl font-bold">{quality.title}</h2>
                <p>
                  <span className="text-2xl font-bold text-green-600">
                    {quality.price}
                  </span>
                  / Excl GST
                </p>
                <p>{quality.detail}</p>
                <div className="mt-5 flex justify-between">
                  <button className="px-3 text-white py-1 bg-green-600 rounded-lg">
                    Read More
                  </button>
                  <p className="font-bold text-xs mt-3 text-center">
                    * T & C Apply{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
