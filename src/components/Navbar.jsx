import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../context";
const Navbar = () => {
  const [islogin, setIslogin] = useState(false);
  const navegate = useNavigate();
  const [data, setdata] = useState([]);
  const [query, setquery] = useState("");
  const [show, setshow] = useState("false");

  const serchhandler = async (event) => {
    const res = await axios.get(
      `${BACKEND_URL}/api/songs/allSongsearch?query=${query}`
    );
    setdata(res.data);
    if (event.key === "Enter") {
      navegate(
        `${
          res.data[0].songCategory === "audio" ? "newrelisesong" : "video/happy"
        }/${res.data[0]._id}`
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      serchhandler();
    }, 1500);
  }, [query]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user === new Date().toString() || user === null) {
      // console.log("time out");
      localStorage.removeItem("user");
      setIslogin(false);
    } else {
      setIslogin(true);
      // console.log("time in");
    }
  }, []);

  return (
    <div className="w-full  border-b-[2px] relative p-3 bg-gradient-to-tr from-[#412C3A] to-[#533248] flex justify-evenly gap-1 items-center ">
    
        
      <div className="search hidden md:block h-[30px] rounded-lg bg-[#656565] w-[30%]">
        <div className="flex h-full relative w-full justify-center  items-center">
          <div
            className={`absolute h-[200px] w-full  ${
              show === "true" ? "block" : "hidden"
            } rounded-lg translate-y-[130px] no-scrollbar text-white overflow-y-scroll z-50 bg-[#9ea19c79]`}
          >
            <ul className="px-3">
              {data &&
                data.map((item) => {
                  const title =
                    item.title.split(" ").splice(0, 4).join(" ") + "\n";
                  return (
                    <Link
                      to={`/${
                        item.songCategory === "audio"
                          ? "newrelisesong"
                          : "video/happy"
                      }/${item._id}`}
                      key={item._id}
                      className="font-mono text-2xl h-[35px] border-black w-full overflow-hidden border-b-2 hover:text-[#FF26C2] "
                    >
                      {title}
                    </Link>
                  );
                })}{" "}
            </ul>
          </div>
          <CiSearch size={"25px"} />
          <input
            onFocus={() => {
              setshow("true");
            }}
            type="text"
            value={query}
            onChange={(e) => {
              setquery(e.target.value);
            }}
            onKeyUp={(event) => {
              serchhandler(event);
            }}
            placeholder="Search music, Artist, Album ..."
            className="w-full bg-transparent p-2 h-full font-mono text-blacke"
            name="search"
          />
        </div>
      </div>


      <div className="btn h-[38px] hidden lg:flex justify-center items-center w-[30%] gap-[20px] ">
        <Link
          to={"/about"}
          className="transition-all ease-in text-white text-xl hover:font-mono hover:text-xl hover:text-[#FF26C2]"
        >
          About
        </Link>
        <Link
          to={"/contact"}
          className="transition-all ease-in text-white text-xl hover:font-mono hover:text-[19px] hover:text-[#FF26C2]"
        >
          Contact
        </Link>
        <Link
          to={"/premium"}
          className="transition-all ease-in text-white text-xl hover:font-mono hover:text-xl hover:text-[#FF26C2]"
        >
          Premium
        </Link>
      </div>


      <div className="login h-[38px] flex justify-center items-center w-[25%] gap-[38px]">
        {!islogin ? (
          <div className="login h-[38px] flex justify-center items-center w-[300px] gap-[46px]">
            <Link
              to={"/login"}
              className="bg-[#1E1E1E] h-[38px] w-[119px] text-center rounded-md p-1 text-xl text-[#FF26C2] transition-all ease-in hover:text-white hover:font-mono"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="bg-gradient-to-r h-[38px] w-[119px] text-center p-1 text-xl rounded-md from-[#F32E7C] transition-all ease-in to-[#FB37FF] hover:text-[#c7eed5] hover:font-mono text-[#1E1E1E]"
            >
              Signup
            </Link>
          </div>
        ) : (
          <div className="gap-4 pl-3 pr-3 flex justify-between items-center rounded-full h-full">
            <img
              className="w-[60px] h-[60px] overflow-hidden rounded-full object-cover"
              src={
                localStorage.getItem("profilpic")
                  ? localStorage.getItem("profilpic")
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
            />
            <div className="font-mono text-wrap overflow-hidden">
              <Link className="hover:border-b-2 transition-all ease-in text-[#FF26C2] text-lg">
                <span className="text-white">Hi</span>,
                {localStorage.getItem("username")
                  ? localStorage.getItem("username")
                  : " User name"}
              </Link>
            </div>
          </div>
        )}
      </div>


      </div>
    
  );
};

export default Navbar;
