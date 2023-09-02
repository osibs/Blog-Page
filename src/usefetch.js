import { useState, useEffect } from "react";

// WE MADE THIS A COMPONENET SO WE CAN JUST IMPORT IT ANYWHERE WE NEED

const Usefetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setisloading] = useState(true);
  const [error, setError] = useState(null);

  //here, we are making use of the useeffect to fetch data ftom db.json and outputting it using setData we created while giving usestate.
  useEffect(() => {
      fetch(url) //to fetch data
        .then((res) => {
          if (!res.ok) {
            //here we are saying if the error is as a result of a faulty end point
            throw Error("could not fetch data"); //we throw this error
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisloading(false);
          setError(false);
        })
        .catch((err) => {
          //to catch any network error. good for error handling
          setError(err.message);
          setisloading(false);
        });
  }, [url]);
  return {data, isloading, error}
};

export default Usefetch;
