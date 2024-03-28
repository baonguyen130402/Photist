import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { MyImg_1, MyImg_2, MyImg_3 } from "../assets/png/LoginPage";
import { Loading } from "./LoadingPage";
import axios from "axios";
import { useForm } from "../lib/Hooks";
import { require } from "yargs";

export const Login = () => {
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const initialValue = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useForm(initialValue);

  const images = [MyImg_1];
  const indexOfCurrentImg = Math.floor(Math.random() * (images.length));

  const loginUser = async (event: any) => {
    event.preventDefault();

    try {
      await axios
        .post("/login", { ...formValues });
      alert("Login successful");
      setRedirect(true);
    } catch (err) {
      alert("Login failed");
    }
  };

  if (redirect) {
    navigate("/discover");
  }

  //Set title
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <div className="bg-black font-sans h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-12 gap-6 container mx-auto justify-between">
        <div className="col-span-6">
          <FontAwesomeIcon
            onClick={() => navigate(-1)}
            className="text-white text-5xl font-thin mb-4 duration-300 hover:text-[#ccc] cursor-pointer"
            icon={faArrowLeft}
            size="sm"
          />
          <div className="grid grid-cols-6 gap-6">
            <h1 className="uppercase text-white font-semibold mb-6 text-5.5xl tracking-wide col-span-5">
              welcome back !
            </h1>
          </div>
          <form
            onSubmit={loginUser}
            className="grid grid-cols-6 grid-rows-2 gap-x-6 gap-y-4 mb-6"
          >
            <input
              type="email"
              name="email"
              onChange={setFormValues}
              placeholder="Email or Username"
              className="col-span-3 row-start-1 text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1 placeholder:text-sm text-base"
            />
            <input
              type="password"
              name="password"
              onChange={setFormValues}
              placeholder="Password"
              className="col-span-3 row-start-2 text-f5 bg-transparent focus:outline-none border border-t-0 border-l-0 border-r-0 pb-1 placeholder:text-sm text-base"
            />
            <a className="text-f5 row-start-3 col-span-2 text-sm tracking-wider hover:underline cursor-pointer duration-300 hover:text-[#ccc]">
              Forgot your password?
            </a>
            <button className="uppercase block bg-f5 text-sm font-semibold py-2 px-1 row-start-4 tracking-wide rounded-3xl duration-300 hover:bg-[#ccc]">
              login
            </button>
          </form>
          <div className="grid grid-cols-6 gap-6 absolute bottom-0">
            <span className="uppercase text-white text-4xl col-span-4 tracking-widest">
              or continue with
            </span>
          </div>
        </div>
        <img
          className="col-span-6 h-[28rem] w-full"
          src={images[indexOfCurrentImg]}
        />
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-6 col-start-1">
          <div className="grid grid-cols-6 gap-6">
            <button className="col-start-1 bg-f5 py-1.5 col-span-3 text-25 text-base font-bold tracking-wider rounded-3xl uppercase duration-300 hover:bg-[#ccc]">
              facebook
            </button>
            <button className="col-start-4 bg-f5 py-1.5 col-span-3 text-25 text-base font-bold tracking-wider rounded-3xl uppercase duration-300 hover:bg-[#ccc]">
              twitter
            </button>
          </div>
        </div>
        <div className="col-span-6 col-start-7">
          <div className="grid grid-cols-6 gap-6">
            <button className="col-span-3 col-start-1 py-2 bg-f5 text-25 text-base font-bold tracking-wider rounded-3xl uppercase duration-300 hover:bg-[#ccc]">
              google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
