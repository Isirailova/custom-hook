import React, { useState, useContext } from "react";
import { UserContext } from "../../App";

const creds = {
  username: "geek",
  password: "1234",
};

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  //we use useContext and destructure the value object
  const { setIsAuthenticated } = useContext(UserContext);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.username === creds.username && user.password === creds.password) {
      console.log("correct user creds");
      setIsAuthenticated(true);
    } else {
      alert("Try again");
    }
  };

  return (
    <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={user.username}
          onChange={onInputChange}
        ></input>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={onInputChange}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
