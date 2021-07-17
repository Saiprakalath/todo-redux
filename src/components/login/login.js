import React from "react";
import users from "../../constance/user";
import { toast } from "react-toastify";

const Login = () => {
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    password: "",
  });

  const handlechange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (userDetails.username !== "" && userDetails.password !== "") {
        const filterUser = JSON.parse(JSON.stringify(users)).find(
          (user) =>
            (user.username =
              userDetails.username && user.password === userDetails.password)
        );
        if (!!filterUser) {
          localStorage.loggedIn = true;
          return window.location.assign("/task");
        } else {
          return toast.error("login faild, please check ur credentials");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Please enter the username and password.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">Login</h1>
      <div>
        <label htmlFor="userName" className="form__base-label">
          Username
        </label>
        <input
          type="input"
          id="username"
          name="username"
          className="form-control"
          placeholder="Username"
          required
          onChange={handlechange}
        />
      </div>
      <div>
        <label htmlFor="Passward" className="form__base-label">
          Password
        </label>

        <input
          type="password"
          id="inputPassword"
          placeholder="Password"
          className="form-control p-2"
          name="password"
          onChange={handlechange}
          required
        />
      </div>
      <button className="_button" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
