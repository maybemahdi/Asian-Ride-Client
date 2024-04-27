import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import UseRefetch from "../Refetch/UseRefetch";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet-async";
import { Tooltip } from "react-tooltip";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [mySpots, setMySpots] = useState([]);
  const { isLoading, refetch } = UseRefetch();
  const email = user.email;
  useEffect(() => {
    fetch("http://localhost:5000/allspot")
      .then((res) => res.json())
      .then((data) => {
        setMySpots(data.filter((singleData) => singleData.email === email));
      });
  }, [email]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allspot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              const remainingUsers = mySpots.filter((spot) => spot._id !== id);
              setMySpots(remainingUsers);
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="my-12">
      <Helmet>
        <title>Asian Ride | My List</title>
      </Helmet>
      <div className="flex flex-col mb-10 items-center">
        <h3 data-aos="zoom-in" className="text-3xl text-center mt-10 font-bold">
          Add Spot Here
        </h3>
        <p data-aos="zoom-out-right" className="text-center my-5 md:w-[80%]">
          You Can add Asian tourist spot from here and can access the added spot
          by you from my list option, make sure that you are logged in to view
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead data-aos="zoom-in">
            <tr>
              <th>Rank</th>
              <th>Spot Name</th>
              <th>Country</th>
              <th>Average Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mySpots.map((spot, idx) => (
              <tr key={spot._id}>
                <th>{idx + 1}</th>
                <td>{spot.spotName}</td>
                <td>{spot.country}</td>
                <td>${spot.cost}</td>
                <td className="flex gap-4">
                  <Link to={`/update-spot/${spot._id}`}>
                    <button
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Update Your Spot"
                      className="btn"
                    >
                      <FiEdit2 className="text-[#B99470]" />
                    </button>
                    <Tooltip id="my-tooltip" />
                  </Link>
                  <button
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Delete Your Spot"
                    onClick={() => handleDelete(spot._id)}
                    className="btn"
                  >
                    <RiDeleteBin6Line className="text-[#B99470]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
