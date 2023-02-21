import React from "react";

function Plan() {
  const plans = [
    {
      id: 1,
      title: "Proprietorship Registration",
      price: "₹1999",
      style: "text-2xl",
      tc: "* T&C Apply",
      benefits: {
        b1: "GST Registration",
        b2: "MSME Registration",
        b3: "Current Account Opening - ICICI Bank",
      },
    },
    {
      id: 2,
      title: "Incorporation of Private Limited Company",
      price: "₹6141",
      style: "text-2xl",
      tc: "* T&C Apply",
      benefits: {
        b1: "DSC - 2 Nos. (2yrs validity)",
        b2: "Director Identification Number - 2 Nos.",
        b3: "Name Approval for Company",
        b4: "Incorporation of Pvt Ltd Company",
        b5: "PAN & TAN for the Company",
        b6: "Current Account Opening - ICICI Bank",
        b7: "Compliance Software",
      },
    },
    {
      id: 3,
      title: "Incorporation of Limited Liability Partnership",
      price: "₹6525",
      style: "text-2xl",
      tc: "* T&C Apply",
      benefits: {
        b1: "DSC - 2 Nos. (2yrs validity)",
        b2: "DPIN - 2 Nos.",
        b3: "Name Approval for LLP",
        b4: "Preparation of LLP Agreement",
        b5: "Incorporation of LLP",
        b6: "Form-3 Filing",
        b7: "PAN & TAN for the LLP",
        b8: "Current Account Opening - ICICI Bank",
        b9: "Compliance Software",
      },
    },
  ];
  return (
    <div className="h-full mt-20 w-full">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-3xl">Choose Our Best Plans</h1>
        </div>
        <div className="w-full grid grid-cols-1 mt-8 sm:grid-cols-3 gap-10 text-center py-0 px-20 sm:px-0">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="px-10 py-10  shadow-sm hover:scale-105 duration-200 shadow-gray-700"
            >
              <h1 className="text-2xl font-bold border-b-2 border-gray-500">
                {plan.title}
              </h1>
              <h1 className={`${plan.style} font-bold mt-5 `}>
                {plan.price} <span className="text-sm">/ Excl GST</span>
              </h1>
              <span className="border-b-2 border-gray-500">{plan.tc}</span>
              <ul className="flex flex-col justify-start items-start mt-4 leading-9">
                <li>{plan.benefits.b1}</li>
                <li>{plan.benefits.b2}</li>
                <li>{plan.benefits.b3}</li>
                <li>{plan.benefits.b4}</li>
                <li>{plan.benefits.b5}</li>
                <li>{plan.benefits.b6}</li>
                <li>{plan.benefits.b7}</li>
                <li>{plan.benefits.b8}</li>
                <li>{plan.benefits.b9}</li>
              </ul>
              <button className="mt-8 bg-green-700 px-4 rounded-lg py-3  text-white font-bold">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plan;
