import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="overflow-hidden h-[76px] p-3 bg-gradient-to-tr from-[#412C3A] to-[#533248]  flex justify-center  gap-1 items-center  ">
      <div className="serch h-[30px] rounded-lg bg-[#656565] w-[360px]">
        <div className="flex h-full  w-full justify-center items-center">
          <CiSearch size={"25px"} className="" />
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
        <Link className="bg-[#1E1E1E] h-[38px] w-[119px] text-center rounded-md p-1 text-xl text-[#FF26C2]  transition-all ease-in hover:text-white hover:font-mono">
          Login
        </Link>

        <Link className="bg-gradient-to-r h-[38px] w-[119px] text-center p-1 text-xl rounded-md from-[#F32E7C] transition-all ease-in to-[#FB37FF] hover:text-[#c7eed5] hover:font-mono text-[#1E1E1E]">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
