// src/App.tsx
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Footer from "./components/Footer";
import ApiContext from "./contexts/ApiContext";
import Report from "./pages/Report";
import ResultPage from "./pages/ResultPage";

const App: React.FC = () => {
  const { mainurl } = useContext(ApiContext);

  return (
    <section className="min-h-screen bg-gradient-to-b from-darkbg via-[#0a1f1a] to-[#0d2b26] text-offwhite">
      <Navbar />
      <div className="lg:px-28 md:px-14 max-sm:px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path={`/report?url=${mainurl}`} element={<ResultPage />} />
        </Routes>
      </div>
      <Footer />
    </section>
  );
};

export default App;