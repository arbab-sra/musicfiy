import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../../../context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OtpVerification = () => {
  const navgate = useNavigate();
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [error, setError] = useState("");
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length < 5) {
      setError("Please enter a valid 5-digit OTP.");
    } else {
      setError("");
      try {
        const email = await localStorage.getItem("email");
        console.log(email);
        //   console.log("Submitted OTP:", otpValue);
        const resposnce = await axios.post(
          `${BACKEND_URL}/api/user/veryfyuser`,
          { otp: otpValue, email },
          {
            headers: { "Content-Type": "application/json" },
            strictOriginWhenCrossOrigin: true,
          }
        );
        if (resposnce.status === 200) {
          console.log(resposnce.data);
          localStorage.setItem("token", resposnce.data.token);
          toast.success("OTP verified successfully");
          navgate("/");
        }
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
        // localStorage.clear("email");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">OTP Verification</h2>
        <div className="flex space-x-2 mb-4">
          {otp.map((data, index) => (
            <input
              className="w-12 h-12 border rounded-md text-center text-lg"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className=" flex justify-between items-center ">
          <button
            disabled={true}
            onClick={() => {
              console.log("object");
            }}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg  transition-all hover:cursor-not-allowed  hover:bg-gray-900"
          >
            Resend OTP
          </button>
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
