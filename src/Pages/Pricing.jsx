import React from 'react'
import PriceCards from '../Components/PriceCards'
import Nav from '../Components/nav';
import Copywright from '../Components/Copywright';

const Pricing = () => {

const pricingData = [
  {
    plan: "Standard",
    price: "$2,200/monthly",
    subtitle: "Per month / cancel any time",
    buttonLabel: "Get start today",
    buttonLink: "#", // Replace with correct link
    included: [
      "40 hours of per month",
      "Dedicated design team",
      "All design services included",
      "2 meetings per month",
      "Daily communication Slack + Loom",
      "Weekly updates and monthly reports",
    ],
    spotsLeft: "2 Spots",
    spotsNote: "left this month",
    highlight: false,
  },
  {
    plan: "Pro",
    price: "$4,400/monthly",
    subtitle: "Per month / cancel any time",
    buttonLabel: "Get start today",
    buttonLink: "#", // Replace with correct link
    included: [
      "80 hours of per month",
      "Dedicated design team",
      "4 meetings per month",
      "All design services included",
      "Daily communication Slack + Loom",
      "Weekly updates and monthly reports",
    ],
    spotsLeft: "4 Spots",
    spotsNote: "left this month",
    highlight: true, // For "Popular" style highlighting
  },
  {
    plan: "Enterprise",
    price: "Custom",
    subtitle: "Price per project or monthly subscription",
    buttonLabel: "Contact us",
    buttonLink: "#", // Replace with correct link
    included: [
      "Service based on your needs",
      "Full-stack delivery team",
      "All design services included",
      "Meetings",
      "Daily Communication Slack + Loom",
      "Fixed pricing",
    ],
    spotsLeft: "4 Enterprise slots",
    spotsNote: "left this year",
    highlight: false,
  },
];


  return (
    <>
        <Nav></Nav>
        <div className='py-[6rem] px-[8rem]'>
            <h3 className='text-center text-xl'>All-in-one product design plan. No hourly rates, no hidden fees, just fast, <br />expert work and unlimited requests for one fixed monthly price.</h3>
            <h1 className='text-center mt-[2rem] text-6xl font-para font-semi-bold'>Your on-demand design team on call,<br /> for one flat monthly price</h1>
            <div className=" grid grid-cols-3 mt-[3rem] gap-[2rem]">
                {
                    pricingData.map((el, idx) => (
                        <PriceCards key={idx} {...el} />
                    ))
                }
            </div>
        </div>
        <div className='h-[10rem]'></div>
        <Copywright></Copywright>
    </>
  )
}

export default Pricing