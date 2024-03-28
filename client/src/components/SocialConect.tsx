import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const SocialConnect = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-start font-sans w-full">
      <h1 className="text-f5 text-3xl mb-8 uppercase">or continue with</h1>
      <div className="w-full flex justify-between items-center">
        <div className="w-full grid grid-cols-12 gap-x-12">
          <button className="col-start-1 col-span-3 bg-f5 text-25 text-sm font-semibold tracking-wider py-1.5 px-8 rounded-3xl uppercase duration-300 hover:bg-gray-300">
            facebook
          </button>
          <button className="col-start-4 col-span-3 bg-f5 text-25 text-sm font-semibold tracking-wider py-1.5 px-8 rounded-3xl uppercase duration-300 hover:bg-gray-300">
            twitter
          </button>
          <button className="col-start-7 col-span-3  bg-f5 text-25 text-sm font-semibold tracking-wider py-1.5 px-8 rounded-3xl uppercase duration-300 hover:bg-gray-300">
            google
          </button>
        </div>
        <FontAwesomeIcon
          onClick={() => navigate(-1)}
          className="text-f5 text-4xl pr-8 cursor-pointer duration-300 hover:text-[#ccc]"
          icon={faArrowLeft}
          size="sm"
        />
      </div>
    </div>
  );
};
