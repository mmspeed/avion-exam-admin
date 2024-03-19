import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";

const SignIn = () => {
  const [showHome, setShowHome] = useState(false);

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const localSignIn = localStorage.getItem("signIn");
  const localName = localStorage.getItem("name");

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signIn", name.current.value);
      alert("Signed in successfully !");
      window.location.reload();
    }
  };

  useEffect(() => {
    if (localSignIn) {
      setShowHome(true);
    }
  });
  return (
    <div>
      {showHome ? (
        <Home />
      ) : (
        <div className="login">
          <div className="formOblako">
            <h1 className="loginText">Login to Avion</h1>
            <form className="loginForm" action="">
              <div className="formSt">
                <label className="formLabel" htmlFor="username">
                  Username
                </label>
                <input
                  className="formInput"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username..."
                  ref={name}
                  required
                />
              </div>
              <div className="formSt">
                <label className="formLabel" htmlFor="email">
                  Email
                </label>
                <input
                  className="formInput"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email..."
                  ref={email}
                  required
                />
              </div>
              <div className="formSt">
                <label className="formLabel" htmlFor="password">
                  Password
                </label>
                <input
                  className="formInput"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password..."
                  ref={password}
                  required
                />
              </div>
            </form>
            <div className="loginSubmit">
              <button className="formSubmit" onClick={handleClick}>
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
