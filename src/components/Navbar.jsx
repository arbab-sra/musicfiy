import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
// import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

const Navbar = () => {
  console.log(document.cookie);
  const [islogin, setIslogin] = useState(false);
  let user = localStorage.getItem("user");
  // console.log(localStorage.getItem("user"));
  useEffect(() => {
    if (
      localStorage.getItem("user") === new Date() ||
      localStorage.getItem("user") === null
    ) {
      console.log("time out");
      localStorage.clear("user");
      setIslogin(false);
    } else {
      setIslogin(true);
      console.log("time in");
    }
  }, [user]);

  return (
    <div className="overflow-hidden h-[80px] p-3 bg-gradient-to-tr from-[#412C3A] to-[#533248]  flex justify-center  gap-1 items-center  ">
      <div className="serch h-[30px] rounded-lg bg-[#656565] w-[360px]">
        <div className="flex h-full   w-full justify-center relative items-center">
          <CiSearch size={"25px"} />
          <input
            type="text"
            placeholder="Search music,Artist,Album ..."
            className="w-full  bg-transparent p-2 h-full font-mono  text-white "
            name="serch"
          />
        </div>
      </div>
      <div className="btn h-[38px] flex justify-center items-center  w-[340px] gap-[46px]">
        <Link
          to={"/about"}
          className="transition-all ease-in text-white text-xl hover:font-mono hover:text-xl hover:text-[#FF26C2] "
        >
          About
        </Link>
        <Link
          to={"/contect"}
          className="transition-all ease-in text-white text-xl  hover:font-mono hover:text-[19px] hover:text-[#FF26C2]  "
        >
          Contect
        </Link>
        <Link
          to={"/premium"}
          className="transition-all ease-in text-white text-xl  hover:font-mono hover:text-xl hover:text-[#FF26C2] "
        >
          Premium
        </Link>
      </div>
      <div className="longin h-[38px] flex justify-center items-center  w-[300px] gap-[46px]">
        {!islogin ? (
          <div className="longin h-[38px] flex justify-center items-center  w-[300px] gap-[46px]">
            <Link
              to={"/login"}
              className="bg-[#1E1E1E] h-[38px] w-[119px] text-center rounded-md p-1 text-xl text-[#FF26C2]  transition-all ease-in hover:text-white hover:font-mono"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="bg-gradient-to-r h-[38px] w-[119px] text-center p-1 text-xl rounded-md from-[#F32E7C] transition-all ease-in to-[#FB37FF] hover:text-[#c7eed5] hover:font-mono text-[#1E1E1E]"
            >
              Signup
            </Link>{" "}
          </div>
        ) : (
          <div className=" gap-4 pl-3 pr-3 flex justify-between items-center  rounded-full h-full  ">
            <img
              className="w-[60px]  h-[60px] overflow-hidden rounded-full object-coontrast-150 object-fill"
              src={
                localStorage.getItem("profilpic") ?
                (localStorage.getItem("profilpic")):
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
            />

            <div className=" font-mono text-wrap  overflow-hidden">
              <Link className=" hover:border-b-2 transition-all ease-in  text-[#FF26C2] text-lg"><span className="text-white">Hi</span>,
              {localStorage.getItem("username") ?
               ( localStorage.getItem("username")): " User name"} 
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
