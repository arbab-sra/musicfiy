import { useState } from "react";
import { BACKEND_URL } from "../../../context";
import { Link } from "react-router-dom";
import axios from "axios";
import Lodingcomponet from "../Loding";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Signup = () => {
  const navigate = useNavigate();
  const [loding, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const Signup = async (e) => {
    e.preventDefault();
    if (!data.username || !data.email || !data.password) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("password", data.password);
      if (data.avatar) formData.append("avatar", data.avatar);
      setLoading(true);
      const res = await axios.post(`${BACKEND_URL}/api/user/signup`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data) {
        setLoading(false);
        const fifteenDaysAgo = new Date();
        fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() + 15);
        localStorage.setItem("user", JSON.stringify(fifteenDaysAgo));
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("profilpic", res.data.userpic);
        localStorage.setItem("email", res.data.email);
        toast.success("Account created successfully");
        navigate("/veryfy/account");
      }
    } catch (error) {
      setLoading(false);
      console.log("signup error", error.message);
      if (
        error.response.status === 400 ||
        error.response.status === 401 ||
        error.response.status === 500
      ) {
        toast.error(error.response.data.error);
      }
      if (error.response.status === 403) {
        toast.error("User already exists");
        navigate("/login");
      }
    }
  };
  if (loding) {
    return <Lodingcomponet />;
  }
  return (
    <>
      <div class="visme_d" data-title="Content Access Form" data-url="g0o9ovq6-untitled-project?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="140839"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
    <div className="h-96 flex items-between justify-center pt-9">
      <div className="relative mt-auto">
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse" />
        <div
          id="form-container"
          className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Signup Form
          </h2>
          <form className="space-y-5" onSubmit={Signup}>
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Enter your name"
              onChange={handleChange}
              value={data.username}
              name="username"
              type="text"
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Enter your email"
              onChange={handleChange}
              value={data.email}
              name="email"
              type="email"
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Enter your password"
              onChange={handleChange}
              value={data.password}
              name="password"
              type="password"
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 py-2 rounded-lg"
              placeholder="Choose your Profile Pic"
              onChange={handleChange}
              name="avatar"
              type="file"
            />
            <button
              type="submit"
              className="w-full h-12  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Veryfy Email
            </button>
            <Link to="/login" className="text-fuchsia-600 cursor-text text-sm">
              If you have an account?{" "}
              <span className="text-[#56bce4] cursor-pointer">Login</span>
            </Link>
          </form>
        </div>
      </div>
    </div></>
  );
};

export default Signup;

