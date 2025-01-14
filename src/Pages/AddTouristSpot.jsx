import Swal from "sweetalert2";
import UseRefetch from "../Refetch/UseRefetch";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet-async";

const AddTouristSpot = () => {
  const { isLoading, refetch } = UseRefetch();
  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const spotName = form.spotName.value;
    const photo = form.image.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const email = form.email.value;
    const name = form.userName.value;
    const spot = {
      spotName,
      photo,
      country,
      location,
      description,
      cost,
      season,
      time,
      visitors,
      email,
      name,
    };
    fetch("https://assignment-10-server-kappa-wheat.vercel.app/allspot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          refetch();
          Swal.fire({
            title: "Good job!",
            text: "You just added a Spot!",
            icon: "success",
          });
        }
      });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-5">
      <Helmet>
        <title>Asian Ride | Add Tourist Spot</title>
      </Helmet>
      <div className="flex flex-col mb-10 items-center">
        <h3 data-aos="zoom-in" className="text-3xl text-center mt-10 font-bold">
          Add Spot Here
        </h3>
        <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
          You Can add Asian tourist spot from here and can access the added spot
          by you from my list option, make sure that you are logged in to view.
        </p>
      </div>
      <div
        data-aos="fade-right"
        className="shadow-lg p-5 border mb-10 dark:bg-[#B99470]"
      >
        {/* Heading */}
        <div className="my-4">
          <h2 className="font-semibold text-xl text-center">
            Complete The Form Below:
          </h2>
        </div>
        {/* form */}
        <form onSubmit={handleAddSpot}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                placeholder="Spot Name"
                id="spotName"
                name="spotName"
                required
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Country Name
              </label>
              <select
                name="country"
                id="country"
                className="w-full p-2 border rounded-md"
                type="text"
                placeholder="Country Name"
                required
              >
                <option value="Bangladesh" selected>
                  Bangladesh
                </option>
                <option value="Thailand" selected>
                  Thailand
                </option>
                <option value="Indonesia" selected>
                  Indonesia
                </option>
                <option value="Malaysia" selected>
                  Malaysia
                </option>
                <option value="Vietnam" selected>
                  Vietnam
                </option>
                <option value="Cambodia" selected>
                  Cambodia
                </option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="description"
              >
                Short Description
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                placeholder="Short Description"
                id="des"
                name="description"
                required
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="season"
              >
                Seasonality (ex: summer/winter)
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                placeholder="Enter Season"
                id="season"
                name="season"
                required
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Visitors (per year)
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="number"
                placeholder="Total Visitors by Year"
                id="visitors"
                name="visitors"
                required
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
                required
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                Location
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                placeholder="Enter Location"
                id="location"
                name="location"
                required
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Average Cost
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="number"
                placeholder="Enter Cost"
                id="cost"
                name="cost"
                required
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Travel Time (ex: days-3/5/7)
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="number"
                placeholder="Enter Travel Time"
                id="time"
                name="time"
                required
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                User Email
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="email"
                placeholder="Enter User Email"
                id="email"
                name="email"
                required
              />
            </div>
          </div>
          <label className="block mt-4 mb-2 dark:text-white" htmlFor="price">
            User Name
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            placeholder="User Name"
            id="userName"
            name="userName"
          />
          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#8e9c5f]  bg-[#B5C18E] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Tourist Spot"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTouristSpot;
