import React from "react";
import ScrollIntoView from "react-scroll-into-view";

const Intro = () => {
  return (
    <div className="bg-indigo-900 text-gray-50 min-h-screen flex flex-col relative">
      <h1 className="text-center py-8">Water Card</h1>
      <div className="flex flex-col mx-20 md:mx-60 flex-1">
        <h2 className=" text-4xl md:text-5xl py-8 font-bold">
          Hydration Nation wants to help you save water.
        </h2>
        <h3 className="text-xl md:text-2xl">
          We believe in saving both our environment and your wallet through
          making your water data accessible by generating a personalized water
          card.
        </h3>
        <span className="text-xs mt-2">
          Disclaimer: This data is purely a rough estimate.
        </span>
        <ScrollIntoView
          selector="#InputSection"
          className="h-full flex flex-1 relative md:top-12"
        >
          <div className="flex justify-center items-center flex-1 ">
            <button className=" bg-indigo-500 hover:bg-indigo-600 text-gray-50 font-bold py-4 px-8 rounded-full text-xl md:text-2xl">
              I&apos;m ready for my water card!
            </button>
          </div>
        </ScrollIntoView>
      </div>
      <img
        src="src/assets/layered-waves.svg"
        alt="waves svg"
        className="w-full"
      />
    </div>
  );
};

export default Intro;
