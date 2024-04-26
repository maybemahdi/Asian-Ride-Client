import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const AllTouristSpot = () => {
  const loadedSpots = useLoaderData();
  const [filter, setFilter] = useState(loadedSpots);
  const handleFilter = (filterText) => {
    if (filterText === "cost") {
      setFilter(() => [...filter].sort((a, b) => b.cost - a.cost));
    }
  };
  return (
    <div className="my-12">
      <div className="flex flex-col mb-8 items-center">
        <h3 data-aos="zoom-in" className="text-3xl text-center mt-10 font-bold">
          Spots: Just a look of our Spots
        </h3>
        <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
          Visitors can explore historic wonders like the Taj Mahal in India,
          delve into the vibrant street markets of Kathmandu in Nepal, or
          indulge in the spicy culinary delights of Sri Lanka.
        </p>
      </div>
      <div className="dropdown w-fit mx-auto flex my-5 items-center justify-center">
        <div
          tabIndex={0}
          role="button"
          className="px-7 py-2 flex items-center rounded-lg text-white font-bold gap-2 bg-[#B99470]"
        >
          Short By <IoIosArrowDown />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content p-1 mt-24 z-[1] menu shadow bg-[#e3e3e3] rounded-box"
        >
          <li onClick={() => handleFilter("cost")}>
            <a>Average Cost</a>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up" className="grid grid-cols-3 gap-6">
        {filter.map((spot) => (
          <div
            data-aos="zoom-in"
            key={spot._id}
            className="p-5 shadow-md rounded-md"
          >
            <img className="rounded h-[250px] w-full" src={spot.photo} alt="" />
            <div className="mt-6 flex flex-col gap-2">
              <p className="font-semibold text-xl">
                Spot Name: {spot.spotName}
              </p>
              <p className="font-semibold text-lg">
                Average Cost:{" "}
                <span className="text-green-600">${spot.cost}</span>
              </p>
              <p className="font-semibold text-lg">
                Visitors: {spot.visitors}/Year
              </p>
              <p className="font-semibold text-lg">
                Travel Time: {spot.time} days
              </p>
              <p className="font-semibold text-lg">Season: {spot.season}</p>
              <Link to={`/spot/${spot._id}`}>
                <button className="bg-[#b9947000] font-semibold border border-black no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-black hover:bg-[#DEAC80]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
