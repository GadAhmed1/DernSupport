import React, { useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
const LoginSection = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [InputValue, setInputValue] = useState(["./assets/eye.svg", "password"]);
  const [MassageState, SetMassageState] = useState(false);
  const [FormValues, SetFormValues] = useState(["", "", true]);
  const [errorMessages, setErrorMessages] = useState({ email: "", password: "" });

  const HandleEyeChange = () => {
    setInputValue((prev) =>
      prev[1] === "password" ? ["./assets/eye.svg", "text"] : ["./assets/eye-off.svg", "password"]
    );
  };

  const HandlOnclickFun = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          email: FormValues[0],
          password: FormValues[1],
          rememberMe: FormValues[2],
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        window.location.href = "/services";
      }
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;

        let newErrors = { email: "", password: "" };

        if (message.includes("Email is required")) {
          newErrors.email = "Email is required";
        } else if (message.includes("User does not exist")) {
          newErrors.email = "User does not exist";
        }

        if (message.includes("Password is required")) {
          newErrors.password = "Password is required";
        } else if (message.includes("Password must be at least 6 characters")) {
          newErrors.password = "Password must be at least 6 characters";
        } else if (message.includes("Invalid password")) {
          newErrors.password = "Invalid password";
        }

        setErrorMessages(newErrors);
        SetMassageState(true);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl WidthOfForm p-6 mx-auto mt-20 mb-20">
      <div className="HeaderPar text-center">
        <p className="font-semibold text-2xl flex justify-center gap-2">
          Welcome back <span className="text-2xl">👋🤗</span>
        </p>
        <p className="font-light text-md mt-2">Please enter your details to log in</p>
      </div>
      <div className="IconsPar flex justify-around mt-6">
        {["apple", "google", "x"].map((icon, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIcon(icon)}
            onMouseLeave={() => setHoveredIcon(null)}
            className={`Icon cursor-pointer border w-3/12 p-2 rounded-xl border-black text-center transition-all duration-500 
                            ${hoveredIcon && hoveredIcon !== icon ? "blur-sm" : ""}`}
          >
            <img className="w-6 mx-auto" src={`./assets/${icon}.svg`} alt={icon} />
          </div>
        ))}
      </div>
      <div className="hr-with-text my-6">
        <span>OR</span>
      </div>
      <div className="inputs flex flex-col mt-10 gap-7">
        <div>
          <input
            onChange={(e) => {
              SetFormValues([e.target.value, FormValues[1], FormValues[2]]);
            }}
            className={`border rounded-lg text-lg p-2 w-full ${
              errorMessages.email ? "border-red-500" : "border-gray-400 focus:border-black"
            }`}
            placeholder="Enter your email..."
            type="text"
          />
          <p className={errorMessages.email ? "text-red-500 p-1" : "hidden"}>
            {errorMessages.email}
          </p>
        </div>
        <div className="relative">
          <input
            onChange={(e) => {
              SetFormValues([FormValues[0], e.target.value, FormValues[2]]);
            }}
            className={`border rounded-lg text-lg p-2 w-full ${
              errorMessages.password ? "border-red-500" : "border-gray-400 focus:border-black"
            }`}
            placeholder="Enter your password"
            type={InputValue[1]}
          />
          <img
            onClick={HandleEyeChange}
            className="absolute w-6 right-2 top-6 transform -translate-y-1/2 cursor-pointer"
            src={InputValue[0]}
            alt="Toggle Password Visibility"
          />
          <p className={errorMessages.password ? "text-red-500 p-1" : "hidden"}>
            {errorMessages.password}
          </p>
        </div>
      </div>
      <div className="flex align-middle items-center justify-between px-1 gap-2 mt-8">
        <div className="flex align-middle items-center gap-2">
          <input
            id="default-checkbox"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 text-[#d7dbf1] bg-gray-100 rounded-sm"
            onChange={(e) => {
              SetFormValues([FormValues[0], FormValues[1], e.target.checked]);
            }}
          />
          <p>Remember me</p>
        </div>
        <div>
          <p className="underline hover:opacity-50 duration-300 cursor-pointer">Forgot password?</p>
        </div>
      </div>
      <div
        onClick={HandlOnclickFun}
        className="bg-[#d7dbf1] select-none rounded-xl p-2 text-center mt-8 hover:cursor-pointer hover:bg-[#b7bbcd] hover:rounded-2xl duration-300"
      >
        <p>Log in</p>
      </div>
      <div className="mt-4 text-center">
        <p>
          Don't have an account yet?&nbsp;
          <Link to="/signup" className="font-bold hover:font-thin duration-300 hover:opacity-50 cursor-pointer">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSection;
