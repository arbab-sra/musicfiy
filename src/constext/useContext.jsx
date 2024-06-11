import { createContext, useEffect, useState } from "react";
import {
  UseWeekyTopSongs,
  UseNewReliseSong,
  UseTrandingsong,
  UsePopularArtist,
} from "../customhooks/Coustum";

export const Allsong = createContext("song");

export const Song = (props) => {
  const [weeklytop, setweeklytop] = useState([]);
  const [newRelisedsong, setnewRelisedsong] = useState([]);
  const [Trandingsong, setTrandingsog] = useState([]);
  const [PopularArtist, setPopularArtist] = useState([]);

  const fatchPopularArtistdata = async () => {
    const data = await UseWeekyTopSongs();
    console.log("weeklytop song", data);
    setPopularArtist(data);
  };
  const fatchtopsongdata = async () => {
    const data = await UseWeekyTopSongs();
    console.log("fatchtopsongdata song", data);
    setweeklytop(data);
  };
  const fatchTrandingssdata = async () => {
    const data = await UseTrandingsong();
    console.log("fatchTrandingssdata song", data);
    setTrandingsog(data);
  };

  const fatchnewRelisedata = async () => {
    const data = await UseNewReliseSong();
    console.log("fatchnewRelisedata", data);
    setnewRelisedsong(data);
  };
  useEffect(() => {
    try {
      fatchnewRelisedata();
    } catch (error) {
      console.log("error fatching fatchnewRelisedata song", error.message);
    }
  }, []);
  useEffect(() => {
    try {
      fatchPopularArtistdata();
    } catch (error) {
      console.log("error fatching fatchPopularArtistdata song", error.message);
    }
  }, []);
  useEffect(() => {
    try {
      fatchTrandingssdata();
    } catch (error) {
      console.log("error fatching fatchTrandingssdata song", error.message);
    }
  }, []);

  useEffect(() => {
    try {
      fatchtopsongdata();
    } catch (error) {
      console.log("error fatching weeklytop song", error.message);
    }
  }, []);

  return (
    <Allsong.Provider value={{ weeklytop, newRelisedsong, Trandingsong ,PopularArtist }}>
      {props.children}
    </Allsong.Provider>
  );
};
