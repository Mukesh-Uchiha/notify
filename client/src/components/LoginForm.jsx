import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [loginCLicked, setloginClicked] = useState(false);
  const navigate = useNavigate();

  const GroupId = "12345";
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue.length);
  };
  const handleButtonClick = () => {
    setloginClicked(!loginCLicked);
    console.log(loginCLicked);
  };
  const handleSummitClick = (e) => {
    if (loginCLicked && inputValue.length === 5 && inputValue === GroupId) {
      navigate("/home");
    } else {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      var Y1 = event.clientY - 125;
      var X1 = event.clientX - 125;
      var Y2 = event.clientY - 100;
      var X2 = event.clientX - 100;
      var Y3 = event.clientY - 75;
      var X3 = event.clientX - 75;
      var Y4 = event.clientY - 50;
      var X4 = event.clientX - 50;

      var circle1 = document.getElementById("circle1");
      var circle2 = document.getElementById("circle2");
      var circle3 = document.getElementById("circle3");
      var circle4 = document.getElementById("circle4");
      circle1.style.top = Y1 + "px";
      circle1.style.left = X1 + "px";

      circle2.style.top = Y2 + "px";
      circle2.style.left = X2 + "px";

      circle3.style.top = Y3 + "px";
      circle3.style.left = X3 + "px";

      circle4.style.top = Y4 + "px";
      circle4.style.left = X4 + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div id="background">
        <div id="circle1"></div>
        <div id="circle2"></div>
        <div id="circle3"></div>
        <div id="circle4"></div>
      </div>
      <div className="loginSection">
        <h2> Login </h2>
        <form>
          <button
            type="button"
            className="login-with-google-btn"
            onClick={handleButtonClick}
            style={{ margin: "20px auto 0px auto" }}
          >
            Sign in with Google
          </button>
          <p className="and" style={{ margin: "20px auto 0px auto" }}>
            {" "}
            &{" "}
          </p>
          <h5 style={{ margin: "20px auto 0px auto" }}>Group Id</h5>
          <input
            className="text"
            type="text"
            placeholder="Enter The Group id"
            value={inputValue}
            onChange={handleInputChange}
          />
          <br />
          <button className="Submit" type="submit" onClick={handleSummitClick}>
            {" "}
            Join the Group{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
