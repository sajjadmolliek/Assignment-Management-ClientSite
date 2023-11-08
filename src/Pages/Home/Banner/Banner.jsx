import CngThm from "../../../Components/CngThm";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay  bg-[#fe844c20]">
        <CngThm></CngThm>
        <div className="flex    justify-Start items-center">
          <div className="md:w-4/5 lg:w-3/5 w-[26rem] text-Center md:mx-auto lg:mx-0 p-10">
            <h1 className="text-[#FE834C] text-3xl lg:text-6xl md:text-4xl font-bold lg:opacity-100 lg:bg-transparent text-center md:bg-black md:opacity-80 md:rounded-t-xl md:pt-5 font-serif ">
            Always do your best <br />
            <div className="h-1 md:w-[33.4rem] lg:w-[45rem] w-[15rem] mx-auto my-4 mb-10  md:my-8 bg-[#FE834C]"></div>
            </h1>
            <h1 className=" text-sm text-center md:text-xl lg:text-3xl text-[#000000] my-3 -mt-5 font-serif font-light ">
            Education has limit but learning not! <br /> Be a good learner lifelong. Todays reader can be a <br /> tomorrows leader. Focus on education to <br />develop the nation.
            </h1>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};


export default Banner;
