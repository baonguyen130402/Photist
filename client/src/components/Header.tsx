import { useNavigate } from "react-router-dom";

import Logo from "../assets/png/Icons/logomain.svg";

import {
  analyse,
  artwork,
  cart,
  commercial,
  discover,
  notify,
  search,
  user,
} from "../assets/png/Icons";

interface Title {
  title: String;
  atDiscover: boolean;
}

export const Header = (props: Title) => {
  const navigate = useNavigate();

  return (
    <>
      {props.atDiscover
        ? (
          <nav className="bg-black fixed top-0 right-0 left-0 p-4 z-50 cursor-default">
            <div className="text-white flex justify-between items-center">
              <div className="flex items-center group">
                <img className="w-8" src={Logo} />
                <h1 className="text-4xl ml-2">
                  {props.title}
                </h1>
                <ul className="hidden group-hover:flex items-center justify-around bg-black text-white absolute top-[56px] h-16 right-0 left-0">
                  <li
                    onClick={() => navigate("sport")}
                    className="uppercase font-semibold tracking-wider cursor-pointer"
                  >
                    sport
                  </li>
                  <li
                    onClick={() => navigate("art")}
                    className="uppercase font-semibold tracking-wider cursor-pointer"
                  >
                    art
                  </li>
                  <li
                    onClick={() => navigate("portrait")}
                    className="uppercase font-semibold tracking-wider cursor-pointer"
                  >
                    portrait
                  </li>
                  <li
                    onClick={() => navigate("landscape")}
                    className="uppercase font-semibold tracking-wider cursor-pointer"
                  >
                    landscape
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigate("/getpro")}
                  className="uppercase border border-gray-700 text-[0.625rem] px-2 py-0.5 rounded-lg mr-6 hover:bg-[#ccc] hover:border-non ease-in-out duration-300"
                >
                  get pro
                </button>
                <ul className="flex justify-between items-center">
                  <li className="cursor-pointer">
                    <img
                      src={analyse}
                      className="mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={discover}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={search}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={artwork}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={commercial}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={cart}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={notify}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={user}
                      className="w-10 hover:opacity-80 duration-300"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
        : (
          <nav className="bg-black fixed top-0 right-0 left-0 p-4 z-50">
            <div className="text-white flex justify-between items-center">
              <div className="flex items-center">
                <img
                  onClick={() => navigate(-1)}
                  className="w-8 cursor-pointer"
                  src={Logo}
                />
                <h1 className="text-4xl ml-2">
                  {props.title}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <button className="uppercase border border-gray-700 text-[0.625rem] px-2 py-0.5 rounded-lg mr-6 hover:bg-[#ccc] hover:border-non ease-in-out duration-300">
                  get pro
                </button>
                <ul className="flex justify-between items-center">
                  <li className="cursor-pointer">
                    <img
                      src={analyse}
                      className="mr-2 jhover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={discover}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={search}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={artwork}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={commercial}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={cart}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={notify}
                      className="w-10 mr-2 hover:opacity-80 duration-300"
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src={user}
                      className="w-10 hover:opacity-80 duration-300"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
    </>
  );
};
