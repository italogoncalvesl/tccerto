import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coherence from "./pages/Coherence";
import Formatting from "./pages/Formatting";
import References from "./pages/References";
import Correction from "./pages/Correction";
import Improvement from "./pages/Improvement";
import Inspiration from "./pages/Inspiration";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <main className="flex flex-row w-full min-h-screen justify-start items-start bg-gradient-to-bl from-blue-500 to-blue-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formatting" element={<Formatting />} />
          <Route path="/references" element={<References />} />
          <Route path="/correction" element={<Correction />} />
          <Route path="/improvement" element={<Improvement />} />
          <Route path="/coherence" element={<Coherence />} />
          <Route path="/inspiration" element={<Inspiration />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
