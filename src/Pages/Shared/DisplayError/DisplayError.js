import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <p className="text-red-500">Something went wrong</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h className="text-3xl">
        Please <button onClick={handleLogOut}>Sign Out</button> and log back in
      </h>
    </div>
  );
};

export default DisplayError;
