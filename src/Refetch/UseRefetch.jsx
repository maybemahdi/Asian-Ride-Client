import { useEffect, useState } from "react";

const UseRefetch = () => {
  const [updatedSpot, setUpdatedSpot] = useState();
  const [isLoading, setIsLoading] = useState();
  const [toggle, setToggle] = useState(false);
  const refetch = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/allspot`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdatedSpot(data);
        setIsLoading(false);
      });
  }, [toggle]);
  return { updatedSpot, isLoading, refetch };
};

export default UseRefetch;
