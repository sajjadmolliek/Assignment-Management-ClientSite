import CngThm from "../../../Components/CngThm";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay">
        <CngThm></CngThm>
        <div className="flex justify-Start items-center">
          <div className="md:w-4/5 lg:w-2/5 text-Center p-10">
            <h1 className="text-black text-4xl md:text-6xl font-normal ">
              THE BIGGEST <br />
            </h1>
            <h1 className="font-semibold text-4xl md:text-6xl text-[#FFA800] my-4">
              DISCOUNT!
            </h1>
            <div className="h-1 bg-[#FFA800]"></div>
            <h1 className="mt-7"><span className="text-white text-2xl md:text-3xl">Coming soon </span> <span className="text-4xl md:text-5xl font-medium text-[#FFA800]">50%</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Banner;
