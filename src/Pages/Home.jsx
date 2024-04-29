import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiArrowFromLeft } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
AOS.init({
  duration: 1200,
});
const Home = () => {
  const { loading } = useContext(AuthContext);
  const loadedSpots = useLoaderData();
  const [spots, setSpots] = useState(loadedSpots);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-kappa-wheat.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Helmet>
        <title>Asian Ride | Home</title>
      </Helmet>
      {/* banner slider  */}
      <div data-aos="zoom-in" className="carousel w-full my-12">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/smF6vYb/ashraful-pranto-s-Z90-UEv0-CHw-unsplash.jpg"
            className="w-full rounded-lg h-[560px]"
          />
          <div className="absolute rounded-lg inset-0 bg-black opacity-50"></div>
          <div
            data-aos="zoom-in"
            className="flex absolute flex-col space-y-6 justify-center my-28 md:my-40 items-center text-white"
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
              <span className="flex gap-1 items-center">
                Learn More <BiArrowFromLeft />
              </span>
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn border hover:border-collapse hover:bg-[#bcae7d] border-black bg-[#ffffff00] btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn border hover:border-collapse hover:bg-[#bcae7d] border-black bg-[#ffffff00] btn-circle"
            >
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
              <span className="flex gap-1 items-center">
                Learn More <BiArrowFromLeft />
              </span>
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn border hover:border-collapse hover:bg-[#bcae7d] border-black bg-[#ffffff00] btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn border hover:border-collapse hover:bg-[#bcae7d] border-black bg-[#ffffff00] btn-circle"
            >
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
              <span className="flex gap-1 items-center">
                Learn More <BiArrowFromLeft />
              </span>
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn border hover:border-collapse hover:bg-[#bcae7d] border-black bg-[#ffffff00] btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn border hover:border-collapse hover:bg-[#bcae7d] border-black bg-[#ffffff00] btn-circle"
            >
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
              <span className="flex gap-1 items-center">
                Learn More <BiArrowFromLeft />
              </span>
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn border hover:border-collapse hover:bg-[#bcae7d] border-black bg-[#ffffff00] btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn border hover:border-collapse hover:bg-[#bcae7d] border-black bg-[#ffffff00] btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* Loaded 6 spot places  */}
      <div className="flex flex-col my-12 items-center">
        <h3 data-aos="zoom-in" className="text-3xl text-center mt-10 font-bold">
          <Typewriter
            cursor
            cursorBlinking
            cursorColor="#000000"
            cursorStyle={null}
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              "Spots: Just a look of our Spots",
              "Welcome to Asian Ride",
              "Find Your Favorite Spot",
              "Choose Your Destination Quickly 😵",
            ]}
          />
        </h3>
        <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
          Visitors can explore historic wonders like the Taj Mahal in India,
          delve into the vibrant street markets of Kathmandu in Nepal, or
          indulge in the spicy culinary delights of Sri Lanka.
        </p>
      </div>
      <div data-aos="fade-up" className="grid lg:grid-cols-3 gap-6">
        {spots.slice(0, 6).map((spot) => (
          <div
            data-aos="zoom-in"
            key={spot._id}
            className="p-5 shadow-md bg-[#b5c18e39] rounded-md"
          >
            <img className="rounded h-[250px] w-full" src={spot.photo} alt="" />
            <div className="mt-6 flex flex-col gap-4">
              <p className="font-semibold text-lg">
                {spot.spotName} {spot.country}
              </p>
              <p className="font-semibold">
                Cost:{" "}
                <span className="text-green-600">
                  ${spot.cost}/{spot.time}day
                </span>
              </p>
              <Link to={`/spot/${spot._id}`}>
                <button className="bg-[#b9947000] font-semibold border border-black no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-black hover:bg-[#DEAC80]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* countries section  */}
      <div className="flex flex-col my-12 items-center">
        <h3 data-aos="zoom-in" className="text-3xl text-center mt-10 font-bold">
          <Typewriter
            cursor
            cursorBlinking
            cursorColor="#000000"
            cursorStyle={null}
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              "Countries: We offer to Visit",
              "Select Your Country",
              "Fall in Love with our Tour 😍",
            ]}
          />
        </h3>
        <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
          Explore historic wonders like the Himalaya in Nepal, delve into the
          vibrant street markets of Dhaka, or indulge in the spicy culinary
          delights of Sri Lanka.
        </p>
      </div>
      <div data-aos="fade-up" className="grid lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <Link
            key={country._id}
            to={`/country/${country.country_name.toLowerCase()}`}
          >
            <div
              data-aos="zoom-in"
              className="p-5 lg:h-[482px] shadow-md bg-[#b5c18e39] rounded-md"
            >
              <img
                className="rounded h-[250px] shadow w-full"
                src={country.image}
                alt=""
              />
              <div className="flex flex-col gap-3 mt-8">
                <h3 className="text-xl font-bold">{country.country_name}</h3>
                <p className="text-base font-normal text-[#636262]">
                  {country.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* testimonial section */}
      <div className="my-10">
        <div className="flex flex-col my-10 items-center">
          <h3
            data-aos="zoom-in"
            className="text-3xl text-center mt-10 font-bold"
          >
            <Typewriter
              cursor
              cursorBlinking
              cursorColor="#000000"
              cursorStyle={null}
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={[
                "Testimonials: What visitors Are Saying",
                "Reviews: What our Clients Are Saying",
              ]}
            />
          </h3>
          <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
            Explore firsthand experiences from tenants who have utilized our
            Tourism packages. Read authentic reviews to gain insights into the
            process, quality, and overall user satisfaction
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="grid gap-8 grid-cols-1 lg:grid-cols-3"
        >
          <div
            data-aos="fade-down"
            className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-slate-200 dark:text-gray-800"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    data-aos="zoom-in"
                    src="https://source.unsplash.com/150x150/?portrait?1"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 data-aos="fade-down" className="font-bold">
                    Leroy Jenkins
                  </h4>
                  <span
                    data-aos="fade-up"
                    className="text-xs dark:text-gray-600"
                  >
                    3 days ago
                  </span>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="flex items-center space-x-2 dark:text-yellow-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span data-aos="fade-left" className="text-xl font-bold">
                  4.6
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p data-aos="fade-in">
                My South Asia visit was an unforgettable journey filled with
                vibrant cultures, breathtaking landscapes, and warm hospitality.
                From exploring the ancient temples of Angkor Wat to savoring the
                flavors of authentic street food in Bangkok, every moment was a
                treasure. The diversity of experiences, from bustling city life
                to serene countryside, left me spellbound. I returned home with
                a heart full of memories and a newfound appreciation for the
                beauty of South Asia.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-slate-200 dark:text-gray-800"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    data-aos="zoom-in"
                    src="https://source.unsplash.com/150x150/?portrait?2"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 data-aos="fade-down" className="font-bold">
                    Tahsin Hasan
                  </h4>
                  <span
                    data-aos="fade-up"
                    className="text-xs dark:text-gray-600"
                  >
                    2 days ago
                  </span>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="flex items-center space-x-2 dark:text-yellow-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span data-aos="fade-left" className="text-xl font-bold">
                  4.9
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p data-aos="fade-in">
                Embarking on a South Asia adventure was the best decision I've
                ever made. The rich tapestry of history and traditions, coupled
                with the friendliness of the people, made every destination come
                alive. Whether it was marveling at the majestic Taj Mahal or
                cruising along the backwaters of Kerala, each day was an
                enriching experience. I'm grateful for the opportunity to
                immerse myself in such a captivating region and create memories
                that will last a lifetime.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-slate-200 dark:text-gray-800"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    data-aos="zoom-in"
                    src="https://source.unsplash.com/150x150/?portrait?3"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 data-aos="fade-down" className="font-bold">
                    Tahmid Hasan
                  </h4>
                  <span
                    data-aos="fade-up"
                    className="text-xs dark:text-gray-600"
                  >
                    1 days ago
                  </span>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="flex items-center space-x-2 dark:text-yellow-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span data-aos="fade-left" className="text-xl font-bold">
                  4.7
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p data-aos="fade-in">
                Words cannot express the magic of my South Asia journey. From
                the mystical allure of the Himalayas to the tranquil beauty of
                Sri Lanka's beaches, every destination was a revelation. The
                warmth and hospitality of the locals touched my heart, making me
                feel like a part of their vibrant communities. Exploring the
                colorful markets of Jaipur and witnessing the sunset over the
                Ganges were moments I'll cherish forever. South Asia truly
                captured my soul, leaving me longing to return and discover even
                more of its wonders.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* our gallery section */}
      <div className="flex flex-col my-12 items-center">
        <h3 data-aos="zoom-in" className="text-3xl text-center mt-10 font-bold">
          <Typewriter
            cursor
            cursorBlinking
            cursorColor="#000000"
            cursorStyle={null}
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              "Gallery: Just a look of our Gallery",
              "Look: How Beautiful Images these are! 😍",
            ]}
          />
        </h3>
        <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
          Visitors can explore historic wonders like the Taj Mahal in India,
          delve into the vibrant street markets of Kathmandu in Nepal, or
          indulge in the spicy culinary delights of Sri Lanka.
        </p>
      </div>
      <section
        data-aos="fade-right"
        className="py-6 mb-10 dark:bg-gray-100 dark:text-gray-900"
      >
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://source.unsplash.com/random/301x301/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?0"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?1"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?2"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?3"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?4"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?5"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?6"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?7"
          />
          <img
            src="https://source.unsplash.com/random/302x302/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
