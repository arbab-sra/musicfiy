import { createContext, useEffect, useState } from "react";
import {
  UseWeekyTopSongs,
  UseNewReliseSong,
  UseTrandingsong,
  UsePopularArtist,
  UseTopAlbum,
  UseVideo,
  UseMoodPlaylist,
} from "../customhooks/Coustum";

export const Allsong = createContext("song");

export const Song = (props) => {
  const [weeklytop, setweeklytop] = useState([]);
  const [newRelisedsong, setnewRelisedsong] = useState([]);
  const [Trandingsong, setTrandingsog] = useState([]);
  const [PopularArtist, setPopularArtist] = useState([]);
  const [Album, setAlbum] = useState([]);
  const [Videosong, setVideosong] = useState([]);
  const [Moodplylist, setMoodplylist] = useState([]);

  const fatchMoodplylistdata = async () => {
    const data = await UseMoodPlaylist();
    // console.log("arbab", data);
    setMoodplylist(data);
  };
  const fatchVideodata = async () => {
    const data = await UseVideo();
    setVideosong(data);
  };
  const fatchAlbumdata = async () => {
    const data = await UseTopAlbum();
    setAlbum(data);
  };
  const fatchPopularArtistdata = async () => {
    const data = await UsePopularArtist();
    setPopularArtist(data);
  };
  const fatchtopsongdata = async () => {
    const data = await UseWeekyTopSongs();
    // console.log(data);
    setweeklytop(data);
  };
  const fatchTrandingssdata = async () => {
    const data = await UseTrandingsong();
    setTrandingsog(data);
  };

  const fatchnewRelisedata = async () => {
    const data = await UseNewReliseSong();
    setnewRelisedsong(data);
  };

  useEffect(() => {
    try {
      fatchMoodplylistdata();
    } catch (error) {
      console.log("error fatching fatchMoodplylistdata song", error.message);
    }
  }, []);
  useEffect(() => {
    try {
      fatchVideodata();
    } catch (error) {
      console.log("error fatching fatchVideodata song", error.message);
    }
  }, []);
  useEffect(() => {
    try {
      fatchAlbumdata();
    } catch (error) {
      console.log("error fatching fatchAlbumdata song", error.message);
    }
  }, []);
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
    <Allsong.Provider
      value={{
        weeklytop,
        newRelisedsong,
        Trandingsong,
        PopularArtist,
        Album,
        Videosong,
        Moodplylist,
      }}
    >
      {props.children}
    </Allsong.Provider>
  );
};
