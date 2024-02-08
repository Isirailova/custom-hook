import React, { useContext } from "react";
import { UserContext } from "../../App";

const HomePage = () => {
  const { setIsAuthenticated } = useContext(UserContext);

  const logoutHandler = () => {
    setIsAuthenticated(false);
  };
  return (
    <div>
      HomePage
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default HomePage;
