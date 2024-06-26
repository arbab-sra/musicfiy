import { Link, useNavigate } from "react-router-dom";

const Popup = ({ setPopup }) => {
    const navigate = useNavigate()
  return (
    <div className="w-[500px] transition-all ease-in-out  h-60 bg-gray-200 border flex flex-col items-center justify-center p-5 gap-2.5 shadow-md rounded-2xl">
      {/* <div className="w-12 h-12 mb-5">
        <div></div>
      </div> */}

      <p className="text-gray-500 font-semibold text-xl text-center">
        Allow for Login, so that you can access your account create playlists
        and save them.
      </p>
      <div className="main-div  ml-auto  mr-auto capitalize">
        <ul className="animet-text">
          <li>
            <span> Allow for Login,</span>
          </li>

          <li>
            <span>create playlists and save them.</span>
          </li>
          <li>
            <span>Enjoy any music </span>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center  mt-4 border-black w-full gap-10">
        <button
          onClick={() => {
            setPopup(false);

          }}
          className="pl-3 pr-3  text-purple-400 border bg-transparent font-mono text-xl  cursor-pointer rounded-2xl hover:bg-purple-100"
        >
          Not now
        </button>
        <Link to="/login" className=" pl-3 pr-3   bg-purple-400 text-white text-xl rounded-2xl  font-mono cursor-pointer hover:bg-purple-500">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Popup;
