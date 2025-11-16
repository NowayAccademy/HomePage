import {
  Zap,
  Code,
  Users,
  TrendingUp,
  ChevronDown,
  Rocket,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ParticleBackground from "../layout/ParticleBackground";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage = ({ setCurrentPage }: HomePageProps) => (
  <div>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 animate-pulse"></div>
          <Zap className="w-32 h-32 mx-auto text-cyan-400 drop-shadow-[0_0_50px_rgba(0,255,255,1)] relative z-10" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          ありえないを実現する
        </h1>

        <p className="text-4xl md:text-5xl mb-6 text-white font-light">
          最後のプログラミングスクール
        </p>

        <div className="flex items-center justify-center space-x-3 mb-12">
          <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          <p className="text-2xl md:text-3xl text-cyan-300 font-semibold">
            1ヶ月で、大企業半年分の成長を
          </p>
          <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
        </div>

        <button
          onClick={() => setCurrentPage("contact")}
          className="group relative px-16 py-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-xl rounded-xl overflow-hidden transition-all hover:shadow-[0_0_60px_rgba(0,255,255,0.8)] hover:scale-110"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>無料カウンセリング予約</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>

        <div className="mt-20 animate-bounce">
          <ChevronDown className="w-10 h-10 mx-auto text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
        </div>
      </div>
    </section>

    <section className="py-32 px-4 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            なぜ、多くのスクール卒業生は
            <br />
            現場で通用しないのか？
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "❌",
              title: "基礎学習止まり",
              desc: "現場で必要な実務スキルが身につかない。教科書レベルで終わっている。",
            },
            {
              icon: "❌",
              title: "実務フロー未経験",
              desc: "業務の流れやプロセスを理解していない。実際の開発現場を知らない。",
            },
            {
              icon: "❌",
              title: "プロジェクト視点の欠如",
              desc: "チーム開発の経験がほぼゼロ。個人制作しかやっていない。",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-red-900/30 to-black border-2 border-red-500/40 p-10 rounded-2xl hover:border-red-400 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] transition-all duration-300"
            >
              <div className="text-7xl mb-6 group-hover:scale-125 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-32 px-4 bg-gradient-to-b from-black via-cyan-950/10 to-black relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            NoWayが提供するのは、
            <br />
            釣り方だ
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            魚を与えるのではなく、釣り方を教える。
            <br />
            それが、本当の成長につながる教育です。
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Code className="w-16 h-16" />,
              title: "実務設計力",
              desc: "基本設計から業務フロー理解まで、現場で即戦力となるスキルを習得。設計書が書けるエンジニアへ。",
              gradient: "from-cyan-500 to-blue-500",
            },
            {
              icon: <Users className="w-16 h-16" />,
              title: "プロジェクト実践",
              desc: "チーム開発の実践経験を通じて、協業スキルとリーダーシップを育成。本物の開発現場を体験。",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: <TrendingUp className="w-16 h-16" />,
              title: "自走力育成",
              desc: "現場で考え、動けるエンジニアへ。問題解決能力を徹底強化し、誰にも頼らず成長できる力を。",
              gradient: "from-pink-500 to-red-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-black border-2 border-cyan-500/30 p-10 rounded-2xl hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] transition-all duration-500 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>
              <div className="relative z-10">
                <div className="text-cyan-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-cyan-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={() => setCurrentPage("services")}
            className="group px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-xl rounded-xl hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] hover:scale-105 transition-all inline-flex items-center space-x-3"
          >
            <span>サービス詳細を見る</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>

    <section className="py-32 px-4 bg-gradient-to-t from-cyan-950/20 via-purple-950/20 to-black relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <Rocket className="w-24 h-24 mx-auto text-cyan-400 drop-shadow-[0_0_30px_rgba(0,255,255,0.8)] animate-pulse" />
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          ありえない成長を、
          <br />
          今すぐ始めよう
        </h2>

        <p className="text-2xl text-gray-300 mb-16 leading-relaxed">
          無料カウンセリングで、あなたの可能性を最大化する方法を一緒に考えます
        </p>

        <button
          onClick={() => setCurrentPage("contact")}
          className="group relative px-20 py-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-2xl rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_80px_rgba(0,255,255,0.9)] hover:scale-110"
        >
          <span className="relative z-10 flex items-center justify-center space-x-3">
            <span>無料カウンセリングを予約</span>
            <Sparkles className="w-8 h-8" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>

        <p className="mt-10 text-gray-400 text-lg">
          ※ 強引な勧誘は一切いたしません。あなたのキャリアを真剣に考えます。
        </p>
      </div>
    </section>
  </div>
);

export default HomePage;
