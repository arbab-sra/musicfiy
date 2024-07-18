import Artists from "./pages/Artist";
import Album from "./pages/Album";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Signup from "./components/authcomponts/Signup";
import Login from "./components/authcomponts/Login";
import { Toaster } from "react-hot-toast";
import SongPlay from "./pages/SongPlay";
import Contact from "./pages/Contect";
import {  useState } from "react";
import Premium from "./pages/Premium";
import About from "./pages/About";
import Load from "./pages/Load";
import Videoplayer from "./pages/Videoplay"
import OtpVerification from "./components/authcomponts/Userveryfy";

const App = () => {

  const [isload, setisload] = useState(true);
  
  setTimeout(() => {
    setisload(false);
  }, 2000);

  if (isload) {
    return <Load />;
  }
  
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/veryfy/account" element={<OtpVerification />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/albums" element={<Album />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:type/:id/" element={<SongPlay />} />
          <Route path="/:type/:typename/:id/" element={<SongPlay />} />
          <Route path="/video/:typename/:id/" element={<Videoplayer />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/about" element={<About />} />
          <Route path="/load" element={<Load />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
