import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Result";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:username" element={<Results />} />
        <Route path="/profile/:username" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;