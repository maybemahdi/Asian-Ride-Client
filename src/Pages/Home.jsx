import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiArrowFromLeft } from "react-icons/bi";
AOS.init({
  duration: 1200,
});
const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <div data-aos="zoom-in" className="carousel w-full my-12">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/smF6vYb/ashraful-pranto-s-Z90-UEv0-CHw-unsplash.jpg"
          className="w-full rounded-lg h-[560px]"
        />
        <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
        <div
          data-aos="zoom-in"
          className="flex absolute flex-col space-y-6 justify-center my-40 items-center text-white"
        >
          <h3 className="lg:text-6xl text-4xl text-center font-black text-[#9dad68]">
            Welcome to Cox's Bazar
          </h3>
          <h5 className="text-white text-center w-[80%] font-semibold text-2xl">
            Discover The World Largest Sea Beach With a near eye
          </h5>
          <p className="text-center w-[90%] lg:w-[50%] mx-auto">
            Explore our listings for Visit, vacation offer, and more. With a
            seamless view experience and comprehensive staying, finding your
            holiday has been easier.
          </p>
          <button className="rounded px-5 font-semibold cursor-pointer py-3 overflow-hidden group bg-[#9dad68] relative hover:bg-gradient-to-r hover:from-[#81924c] hover:bg-black text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="flex gap-1 items-center">Learn More <BiArrowFromLeft/></span>
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/chMW7bH/md-nazmul-islam-nayeem-Bixju-B4xe0w-unsplash.jpg"
          className="w-full rounded-lg h-[560px]"
        />
        <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
        <div
          data-aos="zoom-in"
          className="flex absolute flex-col space-y-6 justify-center my-40 items-center text-white"
        >
          <h3 className="lg:text-6xl text-4xl text-center font-black text-[#9dad68]">
            Welcome to Rangamati
          </h3>
          <h5 className="text-white text-center w-[80%] font-semibold text-2xl">
            Discover The Beauty of Bangladesh
          </h5>
          <p className="text-center w-[90%] lg:w-[50%] mx-auto">
            Explore our listings for Visit, vacation offer, and more. With a
            seamless view experience and comprehensive staying, finding your
            holiday has been easier.
          </p>
          <button className="rounded px-5 font-semibold cursor-pointer py-3 overflow-hidden group bg-[#9dad68] relative hover:bg-gradient-to-r hover:from-[#8b9c54] hover:bg-black text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="flex gap-1 items-center">Learn More <BiArrowFromLeft/></span>
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/dgQJzy9/mamun-srizon-qay3l-NDSHzc-unsplash.jpg"
          className="w-full rounded-lg h-[560px]"
        />
        <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
        <div
          data-aos="zoom-in"
          className="flex absolute flex-col space-y-6 justify-center my-40 items-center text-white"
        >
          <h3 className="lg:text-6xl text-4xl text-center font-black text-[#9dad68]">
            Welcome to Sundarban
          </h3>
          <h5 className="text-white text-center w-[80%] font-semibold text-2xl">
            Discover The World One of the beautiful Jungle
          </h5>
          <p className="text-center w-[90%] lg:w-[50%] mx-auto">
            Explore our listings for Visit, vacation offer, and more. With a
            seamless view experience and comprehensive staying, finding your
            holiday has been easier.
          </p>
          <button className="rounded px-5 font-semibold cursor-pointer py-3 overflow-hidden group bg-[#9dad68] relative hover:bg-gradient-to-r hover:from-[#8fa058] hover:bg-black text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="flex gap-1 items-center">Learn More <BiArrowFromLeft/></span>
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/g9Shh8g/austin-wehrwein-7-Mu0-COMi-U-unsplash.jpg"
          className="w-full rounded-lg h-[560px]"
        />
        <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
        <div
          data-aos="zoom-in"
          className="flex absolute flex-col space-y-6 justify-center my-40 items-center text-white"
        >
          <h3 className="lg:text-6xl text-4xl text-center font-black text-[#9dad68]">
            Welcome to Saint Martin Island
          </h3>
          <h5 className="text-white text-center w-[80%] font-semibold text-2xl">
            Discover The best beauty With a near eye
          </h5>
          <p className="text-center w-[90%] lg:w-[50%] mx-auto">
            Explore our listings for Visit, vacation offer, and more. With a
            seamless view experience and comprehensive staying, finding your
            holiday has been easier.
          </p>
          <button className="rounded px-5 font-semibold cursor-pointer py-3 overflow-hidden group bg-[#9dad68] relative hover:bg-gradient-to-r hover:from-[#90a05b] hover:bg-black text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="flex gap-1 items-center">Learn More <BiArrowFromLeft/></span>
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
