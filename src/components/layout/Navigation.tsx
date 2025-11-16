import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setCurrentPage("home")}
          >
            <div className="relative">
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform">
                <img
                  src="src\assets\NoWayLogo.png"
                  alt="NoWay Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] mix-blend-screen"
                />
              </div>
              <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            </div>
            <span className="text-2xl font-bold text-cyan-400">NOWAY</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => setCurrentPage("home")}
              className={`text-lg hover:text-cyan-400 transition-all ${
                currentPage === "home" ? "text-cyan-400 font-bold" : ""
              }`}
            >
              ホーム
            </button>
            <button
              onClick={() => setCurrentPage("philosophy")}
              className={`text-lg hover:text-cyan-400 transition-all ${
                currentPage === "philosophy" ? "text-cyan-400 font-bold" : ""
              }`}
            >
              理念
            </button>
            <button
              onClick={() => setCurrentPage("services")}
              className={`text-lg hover:text-cyan-400 transition-all ${
                currentPage === "services" ? "text-cyan-400 font-bold" : ""
              }`}
            >
              サービス
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all hover:scale-105"
            >
              お問い合わせ
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cyan-400"
          >
            {menuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-cyan-500/20 backdrop-blur-xl">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => {
                setCurrentPage("home");
                setMenuOpen(false);
              }}
              className="block w-full text-left text-lg hover:text-cyan-400 transition py-2"
            >
              ホーム
            </button>
            <button
              onClick={() => {
                setCurrentPage("philosophy");
                setMenuOpen(false);
              }}
              className="block w-full text-left text-lg hover:text-cyan-400 transition py-2"
            >
              理念
            </button>
            <button
              onClick={() => {
                setCurrentPage("services");
                setMenuOpen(false);
              }}
              className="block w-full text-left text-lg hover:text-cyan-400 transition py-2"
            >
              サービス
            </button>
            <button
              onClick={() => {
                setCurrentPage("contact");
                setMenuOpen(false);
              }}
              className="block w-full text-left text-lg text-cyan-400 font-bold py-2"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
