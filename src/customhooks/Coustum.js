import axios from "axios";
import { BACKEND_URL } from "../../context";

export const UseWeekyTopSongs = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api/songs/weeklytopsong`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
    
      return data.data;
    }
  } catch (error) {
    return [];
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
      console.log(data.data);
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

export const UseTrandingsong = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api/songs/tranding`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

export const UsePopularArtist = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api/songs/topartiest`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (error) {
    return [];
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
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

export const UseMoodPlaylist = async () => {
  try {
    const data = await axios.get(`${BACKEND_URL}/api/songs/moodplaylist`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (error) {
    return [];
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
      return data.data;
    }
  } catch (error) {
    return [];
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
      return data.data;
    }
  } catch (error) {
    return [];
  }
};
