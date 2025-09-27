import React from "react";

const PriceCards = ({
  plan,
  price,
  subtitle,
  buttonLabel,
  included,
  spotsLeft,
  spotsNote,
  highlight,
}) => {
  return highlight ? (
    <div className="animate-animebor h-[100vh] bg-[#242424] rounded-xl m-1 py-[2.75rem] px-[2rem] flex flex-col justify-between items-center">
      <h1 className="font-heading self-start font-semibold text-2xl">{plan}</h1>

      <div className="self-start">
        <h1 className="font-heading text-4xl font-bold">{price}</h1>
        <p className="text-[#ABAB8D] font-body text-sm">{subtitle}</p>
      </div>

      <button className="pricebtn cursor-pointer">Get Started Today</button>

      <div className="text-center">
        <a href="#" className="font-para text-xl m-1 hover:text-[#009dff] cursor-pointer">
          {buttonLabel}
        </a>
      </div>

      <div className="self-start mb-3">
        <h1 className="text-xl font-para">What’s included</h1>
        <ul>
          {included.map((item, idx) => (
            <li key={idx}>
              <span>✔</span> {item}
            </li>
          ))}
        </ul>

        <div className="w-full border-t-2 border-gray-500 mt-2 h-[4rem] flex items-center justify-center">
          <h1>
            <span className="text-[#009dff] text-2xl">{spotsLeft}  </span>
            {spotsNote}
          </h1>
        </div>
      </div>
    </div>
  ) : (
        <div className="h-[100vh] bg-[#242424] rounded-xl m-1 py-[2.75rem] px-[2rem] flex flex-col justify-between items-center">
      <h1 className="font-heading self-start font-semibold text-2xl">{plan}</h1>

      <div className="self-start">
        <h1 className="font-heading text-4xl font-bold">{price}</h1>
        <p className="text-[#ABAB8D] font-body text-sm">{subtitle}</p>
      </div>

      <button className="pricebtn">Get Started Today</button>

      <div className="text-center">
        <a href="#" className="font-para text-xl m-1 hover:text-[#009dff]">
          {buttonLabel}
        </a>
      </div>

      <div className="self-start mb-3">
        <h1 className="text-xl font-para">What’s included</h1>
        <ul>
          {included.map((item, idx) => (
            <li key={idx}>
              <span>✔</span> {item}
            </li>
          ))}
        </ul>

        <div className="w-full border-t-2 border-gray-500 mt-2 h-[4rem] flex items-center justify-center">
          <h1>
            <span className="text-[#009dff] text-2xl">{spotsLeft}</span>
            {spotsNote}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
