import axios from "axios";
import { BACKEND_URL } from "../../context";
import { resolvePath } from "react-router-dom";

export const UseWeekyTopSongs = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api/songs/weeklytopsong`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      // console.log(data.data);
      return data.data;
    }
  } catch (error) {
    return error.message;
  }
};

export const UseNewReliseSong = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api/songs/newrelease`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      return data;
    }
  } catch (error) {
    return error.message;
  }
};

export const UseTrandingsong = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api//songs/tranding`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      return data;
    }
  } catch (error) {
    return error.message;
  }
};

export const UsePopularArtist = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api//songs/topartiest`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      return data;
    }
  } catch (error) {
    return error.message;
  }
};

export const UseTopAlbum = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api/songs/topalbum`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      return data;
    }
  } catch (error) {
    return error.message;
  }
};

export const UseMoodPlaylist = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}//songs/moodplaylist`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      return data;
    }
  } catch (error) {
    return error.message;
  }
};

export const UseVideo = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api/`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      return data;
    }
  } catch (error) {
    return error.message;
  }
};

export const UseCrasual = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api/`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      return data;
    }
  } catch (error) {
    return error.message;
  }
};
