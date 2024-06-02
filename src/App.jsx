
import Artists from "./pages/Artist";
import Album from "./pages/Album";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/albums" element={<Album />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </Router>
  );
};

export default App;
