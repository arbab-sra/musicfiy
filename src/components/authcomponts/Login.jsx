import { useState } from "react";
import { Link } from "react-router-dom";
import Lodingcomponent from "../Loding";
import axios from "axios";
import { BACKEND_URL } from "../../../context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [loding, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // console.log(data);

  const handdler = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);

      const res = await axios.post(`${BACKEND_URL}/api/user/login`, data, {
        headers: { "Content-Type": "application/json" },
        strictOriginWhenCrossOrigin: true,
      });
      if (res.statusCode === 401 || res.statusCode === 400) {
        toast.error(res.data.message);
      }
      if (res) {
        setLoading(false);
        const fifteenDaysAgo = new Date();
        fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() + 15);
        localStorage.setItem("user", JSON.stringify(fifteenDaysAgo));
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("profilpic", res.data.userpic);
        localStorage.setItem("token", res.data.token);
        console.log(res);
        toast.success("Account created successfully");
        return navigate("/");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      if (
        error.response.status === 401 ||
        error.response.status === 400 ||
        error.response.status === 404
      ) {
        toast.error(error.response.data.message);
      }
    }
  };
  if (loding) return <Lodingcomponent />;
  return (
    <div className="h-96 flex items-center justify-center mt-20">
      <div className="relative">
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse" />
        <div
          id="form-container"
          className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Login
          </h2>
          <form className="space-y-5">
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              type="email"
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              value={data.password}
              type="password"
            />
            <button
              onClick={(e) => {
                handdler(e);
              }}
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log in
            </button>
            <Link className="text-fuchsia-300 cursor-text text-sm">
              if Not have account?{" "}
              <Link
                to={"/signup"}
                className=" hover:text-[#50bef5] cursor-pointer text-[#2c2e2e]"
              >
                Sign up
              </Link>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
