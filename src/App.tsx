import { Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#E6E6E6]" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@1,400..700&display=swap');
      `}</style>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/teachers" element={<TeachersPage />} /> */}
        {/* <Route path="/faq" element={<FaqPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
