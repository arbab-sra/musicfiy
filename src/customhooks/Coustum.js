
import axios from "axios";
import { BACKEND_URL } from "../../context";

export const UseWeekyTopSongs = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api/songs/allSongs`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data) {
      // console.log(data.data);
      return data.data;
    }
  } catch (error) {
    return error.message;
  }
};
