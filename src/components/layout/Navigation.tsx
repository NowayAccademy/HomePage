import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
            <div className="w-20 h-20">
              <img
                src="src\assets\NoWayLogo.png"
                alt="NoWay Logo"
                className="w-full h-full object-contain"
              />
            </div>
          <span 
            className="text-2xl text-[#FFFFFF]" 
            style={{ fontFamily: '"Arimo", sans-serif', fontStyle: 'italic', fontWeight: 700 }}
          >
            NO WAY
          </span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link 
            to="/" 
            className="text-[#E6E6E6] hover:text-[#00FFFF] transition-colors text-sm font-medium"
          >
            ホーム
          </Link>
          <button 
            className="text-[#E6E6E6] hover:text-[#00FFFF] transition-colors text-sm font-medium cursor-not-allowed opacity-70"
            title="準備中"
            type="button"
          >
            講師紹介
          </button>
          <button 
            className="text-[#E6E6E6] hover:text-[#00FFFF] transition-colors text-sm font-medium cursor-not-allowed opacity-70"
            title="準備中"
            type="button"
          >
            FAQ
          </button>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#00FFFF] text-black font-bold rounded hover:opacity-90 transition-all hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] text-sm"
          >
            無料カウンセリング
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
