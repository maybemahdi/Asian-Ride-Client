import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  const allSpot = useLoaderData();
  const { country } = useParams();
  const filteredSpots = allSpot.filter(
    (single) => single.country.toLowerCase() === country.toLowerCase()
  );
  console.log(filteredSpots);
  //   console.log(country)
  //   console.log(allSpot)
  return (
    <div>
      <Helmet>
        <title>Asian Ride | {country.toLowerCase()}</title>
      </Helmet>
      <div className="flex flex-col mb-8 items-center">
        <h3 data-aos="zoom-in" className="text-3xl text-center mt-10 font-bold">
          Just a look of {" "}
          <span className="text-[#B99470]">{country.toUpperCase()}</span>
        </h3>
        <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
          Visitors can explore historic wonders like the Taj Mahal in India,
          delve into the vibrant street markets of Kathmandu in Nepal, or
          indulge in the spicy culinary delights of Sri Lanka.
        </p>
      </div>
      <div data-aos="fade-up" className="grid grid-cols-3 my-10 gap-6">
        {filteredSpots.map((spot) => (
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
              <p className="font-semibold text-base">
                Country: {spot.country}
              </p>
              <p className="font-semibold text-base">
                Location: {spot.location}
              </p>
              <p className="font-semibold text-base">
                Description: {spot.description}
              </p>
              <p className="font-semibold text-base">
                Average Cost:{" "}
                <span className="text-green-600">${spot.cost}</span>
              </p>
              {/* <p className="font-semibold text-lg">
                Visitors: {spot.visitors}/Year
              </p>
              <p className="font-semibold text-lg">
                Travel Time: {spot.time} days
              </p> */}
              <p className="font-semibold text-base">Season: {spot.season}</p>
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

export default Category;
