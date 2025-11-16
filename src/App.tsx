import { useState } from "react";
import Navigation from "./components/layout/Navigation";
import HomePage from "./components/pages/HomePage.tsx";
import PhilosophyPage from "./components/pages/PhilosophyPage.tsx";
import ServicesPage from "./components/pages/ServicesPage.tsx";
import ContactPage from "./components/pages/ContactPage.tsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "philosophy" && <PhilosophyPage />}
      {currentPage === "services" && <ServicesPage />}
      {currentPage === "contact" && <ContactPage />}
    </div>
  );
};

export default App;
