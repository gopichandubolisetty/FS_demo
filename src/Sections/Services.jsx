import React from "react";

const Services = () => {
  return (
    <div className="mt-[5rem] min-w-[100vw]">
      <div>
        <h1 className="font-heading text-6xl mix-blend-difference px-[5rem]">
          From vision to velocity, we are
        </h1>
        <h1 className="font-body text-6xl mt-1.5 mb-[7rem] mix-blend-difference px-[5rem]">
          all in one place.
        </h1>
      </div>

      {/* Stacking Container */}
      <div className="relative h-[300vh]">
        {/* Service 1 */}
        <div className="sticky top-0 h-screen flex gap-6 items-center justify-around bg-[#3F2FEE] px-[5rem]">
          <div className="flex flex-col max-w-[50%] justify-center">
            <h1 className="font-bold text-5xl font-heading text-white">
              Branding Identity
            </h1>
            <p className="mt-4 text-2xl leading-relaxed text-white">
              Create a trusted, global brand with our expert designs and strategies.
              We help improve your brand's visibility, credibility, and connection
              with customers both online and offline.
            </p>
          </div>
          <img
            src="./src/assets/sport.webp"
            alt="Branding Identity"
            className="h-[40vh] w-[30vw] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Service 2 */}
        <div className="sticky top-[5rem] h-screen flex gap-6 items-center justify-around bg-white px-[5rem]">
          <div className="flex flex-col max-w-[50%] justify-center">
            <h1 className="font-bold text-5xl font-heading text-black">
              UI UX Design
            </h1>
            <p className="mt-4 text-2xl leading-relaxed text-black">
              Turn your ideas into designs that help business growth. Our UI/UX
              services create easy-to-use, eye-catching digital experiences that
              keep users engaged and improve satisfaction.
            </p>
          </div>
          <img
            src="./src/assets/Crypto.jpg"
            alt="UI UX Design"
            className="h-[40vh] w-[30vw] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Service 3 */}
        <div className="sticky top-[10rem] h-screen flex gap-6 items-center justify-around bg-[#FFD500] px-[5rem]">
          <div className="flex flex-col max-w-[50%] justify-center">
            <h1 className="font-bold text-5xl font-heading text-black">
              Website Design
            </h1>
            <p className="mt-4 text-2xl leading-relaxed text-black">
              Get a website that looks great and drives real results. With
              responsive, user-friendly design, your site will engage visitors,
              boost conversions, and enhance your brand’s online presence.
            </p>
          </div>
          <img
            src="./src/assets/beclothing.jpg"
            alt="Website Design"
            className="h-[40vh] w-[30vw] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
