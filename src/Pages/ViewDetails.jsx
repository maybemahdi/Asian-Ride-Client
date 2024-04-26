import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const loadedSpot = useLoaderData();
  const [spot, setSpot] = useState(loadedSpot);
  return (
    <div data-aos="zoom-in" className="p-5 rounded-md">
      <Helmet>
        <title>Asian Ride | View Details</title>
      </Helmet>
      <div className="flex flex-col mb-12 items-center">
        <h3 data-aos="zoom-in" className="text-3xl text-center mt-10 font-bold">
          View Spot: Just a look of{" "}
          <span className="text-[#B99470]">{spot.spotName}</span>
        </h3>
        <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
          Visitors can explore historic wonders like the Taj Mahal in India,
          delve into the vibrant street markets of Kathmandu in Nepal, or
          indulge in the spicy culinary delights of Sri Lanka.
        </p>
      </div>
      <img className="rounded h-[550px] w-full" src={spot.photo} alt="" />
      <div data-aos="fade-right" className="my-10 flex flex-col gap-4">
        <p className="font-semibold text-lg">Spot Name: {spot.spotName}</p>
        <p className="font-semibold text-lg">Country: {spot.country}</p>
        <p className="font-semibold text-lg">
          Short Description: {spot.description}
        </p>
        <p className="font-semibold text-lg">Season: {spot.season}</p>
        <p className="font-semibold text-lg">
          Average Cost:{" "}
          <span className="text-[#B99470]">
            ${spot.cost}/{spot.time}day
          </span>
        </p>
        <p className="font-semibold text-lg">Spot Location: {spot.location}</p>
        <p className="font-semibold text-lg">
          Total Visitors: {spot.visitors}/Year
        </p>
        <p className="font-semibold text-lg">
          User Name (whoever added): {spot.name}
        </p>
        <p className="font-semibold text-lg">
          User Email (whoever added): {spot.email}
        </p>
      </div>
    </div>
  );
};

export default ViewDetails;
