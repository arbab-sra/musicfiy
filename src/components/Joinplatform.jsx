import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
const Joinplatform = () => {
  return (
    <div className="w-[1050px] h-[500px] mt-12     ">
      <div className=" w-full h-[40%] mb-3">
        <div className="  w-full h-[30%] flex justify-center flex-col  items-center ">
          {" "}
          <h3 className="text-[#FF26C2] text-3xl">
            Join Our <span className="text-[#f1f5f7]">Platform</span>
          </h3>
        </div>
        <div className=" mb-2 w-full flex justify-between items-center ">
          <div className="w-1/2 h-full  p-4 flex  justify-center items-center">
            <p className=" text-white  text-lg opacity-85">
              You can be one of the{" "}
              <span className="text-[#FF26C2]">Mamber</span> of our platform by
              just adding some necessarily information. if you already have an
              account on our website, you can just hit the{" "}
              <Link className="text-[#56bce4] hover:border-b-2 ">
                Login Button
              </Link>
              . <bold>Created by <i className="text-2xl hover:border-b-2 text-[#38f7fb]">Arbab</i></bold> 
            </p>
          </div>
          <div className="flex justify-center  w-1/2 h-full   items-center ">
            <div className="longin h-full w-full flex justify-center items-center   gap-[46px]">
              <Link className="bg-[#1E1E1E] h-[38px] w-[119px] text-center rounded-md p-1 text-xl text-[#FF26C2]  transition-all ease-in hover:text-white hover:font-mono">
                Login
              </Link>

              <Link className="bg-gradient-to-r h-[38px] w-[119px] text-center p-1 text-xl rounded-md from-[#F32E7C] transition-all ease-in to-[#FB37FF] hover:text-[#c7eed5] hover:font-mono text-[#1E1E1E]">
                Signup
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className=" w-full h-[60%] flex justify-center items-center">
        <div className="about w-1/3 h-full ">
          <div className="w-full h-[20%]   flex justify-center items-center">
            <h3 className=" text-white text-3xl">About</h3>
          </div>
          <div className="w-full h-[75%] flex justify-center items-center">
            <p className="text-white text-lg p-4 font-serif">
              Melodies is a website that has been created for over 5 year’s now
              and it is one of the most famous music player website’s in the
              world. in this website you can listen and download songs for free.
              also of you want no limitation you can buy our premium pass’s.
            </p>
          </div>
        </div>
        <div className="links w-1/2 h-full   flex justify-center items-center ">
          <div className="flex justify-center items-center text-white w-full h-full flex-col">
            <div className="w-full h-[25%] flex justify-center items-center  flex-col">
              <h1 className="text-white font-serif text-2xl">Mucify</h1>
              <div className="w-[80%] h-[2px] bg-white"></div>
            </div>
            <div className="w-full gap-4 h-[75%] flex justify-start items-center flex-col">
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Song
                </h4>
              </Link>
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Roadio
                </h4>
              </Link>
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Podcast
                </h4>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center text-white  w-full h-full flex-col">
            <div className="w-full h-[25%] flex justify-center items-center  flex-col">
              <h1 className="text-white font-serif text-2xl">Access</h1>
              <div className="w-[80%] h-[2px] bg-white"></div>
            </div>
            <div className="w-full gap-4 h-[75%] flex justify-start items-center flex-col">
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Explore
                </h4>
              </Link>
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Artists
                </h4>
              </Link>
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Playlist
                </h4>
              </Link>
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Albums
                </h4>
              </Link>
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Tranding
                </h4>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center text-white  w-full h-full flex-col">
            <div className="w-full h-[25%] flex justify-center items-center  flex-col">
              <h1 className="text-white font-serif text-2xl">Contect</h1>
              <div className="w-[80%] h-[2px] bg-white"></div>
            </div>
            <div className="w-full gap-4 h-[75%]  flex justify-start items-center flex-col">
              <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                About
              </h4>
              <Link></Link>
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Policy
                </h4>
              </Link>
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Socal media
                </h4>
              </Link>
              <Link>
                <h4 className="text-white font-serif text-xl hover:opacity-80 hover:text-sky-500 transition-all ease-out hover:translate-x-[2px]">
                  Support
                </h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="connectus w-1/4  gap-6 flex justify-between  pb-6 items-center flex-col h-full  ">
          <div className="w-full h-[50%]  flex justify-center items-center">
            <Link
              to={"/"}
              className="bg-gradient-to-r text-[30px]  md:text-[40px] font-semibold text-center from-[#EE10B0] to-[#0E9EEF] inline-block text-transparent bg-clip-text"
            >
              Musicify
            </Link>
            
          </div>
          <div className=" w-full flex justify-between  h-[80%]  items-center ">
            <Link className=" w-1/4  flex justify-center items-center h-[50%]">
              <FaFacebook className="hover:text-[#EE10b0]" size={"40px"} />
            </Link>
            <Link className=" w-1/4  flex justify-center items-center h-[50%]">
              <FaInstagramSquare className="hover:text-[#EE10b0]" size={"40px"} />
            </Link>
            <Link className=" w-1/4  flex justify-center items-center h-[50%]">
              <AiFillTwitterCircle  className="hover:text-[#EE10b0]"size={"40px"} />
            </Link>
            <Link className=" w-1/4  flex justify-center items-center h-[50%]">
              <MdEmail  className="hover:text-[#EE10b0]"size={"40px"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinplatform;
