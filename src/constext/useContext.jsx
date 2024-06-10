import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../../context";
import { UseWeekyTopSongs } from "../customhooks/Coustum";
export const WeeklyTopSongContext = createContext("weeklytopsong");

export const WeeklyTopSongProvider = (props) => {
  const [song, setsong] = useState([]);
  const fatchdata = async () => {
    const data = await UseWeekyTopSongs();
    if (data) setsong(data);
  };
  useEffect(() => {
    try {
      fatchdata();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <WeeklyTopSongContext.Provider value={{ song, setsong }}>
      {props.children}
    </WeeklyTopSongContext.Provider>
  );
};
