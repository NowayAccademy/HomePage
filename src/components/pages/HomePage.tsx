import {
  Zap,
  Code,
  TrendingUp,
  ChevronDown,
  Shield,
  Database,
  Settings,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-12">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="src/assets/MainVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold mb-8">
          「ありえない」を<span className="text-[#00FFFF]">実力に変えろ。</span>
        </h1>
        <p className="text-2xl md:text-4xl mb-6 font-light">
          1ヶ月で、未経験から「3年目」の現場レベルへ
        </p>
        <div className="flex items-center justify-center space-x-3 mb-12">
          <p className="text-2xl md:text-3xl text-cyan-300 font-semibold">
            精鋭エンジニア育成・短期集中ブートキャンプ
          </p>
        </div>
        <Link
          to="/contact"
          className="relative px-14 py-5 bg-[#00FFFF] text-black font-bold text-xl rounded-xl overflow-hidden transition-all hover:shadow-[0_0_60px_rgba(0,255,255,0.8)] hover:scale-110"
        >
          挑戦する
        </Link>
        <div className="mt-20 animate-bounce">
          <ChevronDown className="w-10 h-10 mx-auto text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
        </div>
      </div>
    </section>
    {/* なぜNOWAYなのか */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-12">
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <h1 className="text-3xl md:text-7xl font-bold">
            WHY <span className="text-[#00FFFF]">NO WAY？</span>
          </h1>
          <p className="text-xl md:text-4xl font-light">
            なぜ今、この場所が必要なのか
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 text-left">
          <div className="w-full md:w-1/2 relative">
            <img
              src="src/assets/ClassScenery.png"
              alt="授業風景"
              className="w-full rounded-xl shadow-2xl border border-white/10"
            />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0D1117] via-[#121212]/40 to-transparent rounded-r-xl"></div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
              「このレベルで本当に現場で通用するのか？」
              <br />大手スクールで講師を務める中で抱いた、強烈な違和感。
              <br />現場を知るPLとして見たのは、
              <br /><span className="text-[#FFFFFF] font-bold border-b-2 border-[#00FFFF]">「知識不足のまま放り出されるエンジニア」</span>の現実でした。
              <br />これは本人の問題ではなく、教育側の責任でもあります。
              <br />だから、私は立ち上げました。
              <br />ここは、優しく手取り足取り教える場所ではありません。
              <br />「転職成功」のではなく<span className="text-[#00FFFF]">「釣り方（自走力）」</span>を教える。
            </p>
            <p className="text-2xl md:text-3xl text-cyan-300 font-semibold">
              洗練された精鋭が集う、最後のスクールをつくる。
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* 理念 */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-12">
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold mb-8">
          不可能の <span className="text-[#00FFFF]">その先</span>へ
        </h1>
        <p className="text-xl md:text-4xl text-[#00FFFF] font-light mb-16">
          私たちの信念
        </p>
        <div className="flex flex-col gap-8">
          <div className="w-full border border-[#00FFFF] rounded-2xl p-6 md:p-8 text-left bg-[#0D1117]/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <Zap className="w-8 h-8 text-[#00FFFF]" />
              <h3 className="text-xl md:text-2xl font-bold text-[#E6E6E6]">Impossible Spirit</h3>
            </div>
            <h4 className="text-lg text-[#00FFFF] mb-4 font-bold">不可能への挑戦</h4>
            <p className="text-[#E6E6E6] leading-relaxed text-base md:text-lg">
              エンジニアは、いつだって「分からない」にぶつかる。DX、未知の領域、前例のない課題——避けては通れない壁が必ずある。
              <br /><br />
              私たちは “プログラミングの書き方” だけを教えません。分からない問題に直面したとき、何を疑い、何から調べ、どう突破するのか。
              <br />
              そこまで踏み込んで教えるスクールです。
              <br /><br />
              前提を疑い、方法を探し続け、実現にたどり着ける人へ。 “不可能を前にしても歩みを止めないエンジニア” を育てます。
            </p>
          </div>
          <div className="w-full border border-[#00FFFF] rounded-2xl p-6 md:p-8 text-left bg-[#0D1117]/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-[#00FFFF]" />
              <h3 className="text-xl md:text-2xl font-bold text-[#E6E6E6]">Practical Mastery</h3>
            </div>
            <h4 className="text-lg text-[#00FFFF] mb-4 font-bold">実務力徹底主義</h4>
            <p className="text-[#E6E6E6] leading-relaxed text-base md:text-lg">
              基礎を学ぶだけでは、現場では戦えない。求められるのは、“知識”ではなく“実務で成果を出す力”。
              <br /><br />
              1〜3年目は知識の差。努力で追いつける。3年目からは経験の差。
              <br />これは「どんな意識で仕事に向き合ってきたか」で決まる。
              だから、私たちは 設計・実装・レビュー・テストまで徹底的に再現し、現場そのものを教育の中心に据えています。
              <br /><br />
              AIがコードを書ける時代でも、“問題を解釈し、設計し、顧客の意図を実現できる人”は替えが効かない。
              今日から現場に出ても戦える。 どこへ行っても通用する。即戦力を、本気で育てるスクールです。
            </p>
          </div>
          <div className="w-full border border-[#00FFFF] rounded-2xl p-6 md:p-8 text-left bg-[#0D1117]/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp className="w-8 h-8 text-[#00FFFF]" />
              <h3 className="text-xl md:text-2xl font-bold text-[#E6E6E6]">Growth OwnerShip</h3>
            </div>
            <h4 className="text-lg text-[#00FFFF] mb-4 font-bold">成長の当事者意識</h4>
            <p className="text-[#E6E6E6] leading-relaxed text-base md:text-lg">
              私たちは「転職成功」だけをゴールにしていません。
              <br />大切なのは、次の環境でも、その次の環境でも、自分の力で成長し続けられるエンジニアになること。魚を渡す教育ではなく、釣り方を教える教育。
              <br /><br />
              現役エンジニアだからこそ分かる “本質的な学び方” を徹底的に伝え、誰かに頼らずとも成長を生み出せる 自走力 を身につける。
              <br /><br />
              1ヶ月後、実力は確実に伸びている。ただし——本気で取り組んだ人に限る。
              成長の当事者は、あなた自身。 その覚悟に応える環境を、ここに用意しています。
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* 講師紹介 */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-12">
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold mb-8">
          現場の<span className="text-[#00FFFF]">精鋭</span>が、直接導く
        </h1>
        <p className="text-xl md:text-4xl font-light mb-16">
          教材を読み上げるだけの講師はいらない。<br />実務の最前線を知る「技術の師匠」が、あなたを導く
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "AKIO",
              role: "Project Lead",
              desc: (
                <>
                  現役5年目のテックリード。
                  <br />フルスクラッチ開発の立ち上げや工場DXシステムのPL（プロジェクトリーダー）を歴任。
                  <br />1年目から基本設計〜テストまでを一気通貫で担い、営業提案までこなす「ビジネスに強いエンジニア」。
                  <br />大手スクール講師と社内新人研修官の経験から、既存教育の限界を痛感。「現場で通用するエンジニアを育てる」指導を信条とする。
                </>
              ),
              langs: ["Java", "Spring Boot", "React", "C#", "Docker", "PostgreSQL"],
            },
            {
              name: "SHISEI",
              role: "Project Lead",
              desc: (
                <>
                  現役5年目のテックリード。
                  <br />フルスクラッチ開発の立ち上げや工場DXシステムのPL（プロジェクトリーダー）を歴任。
                  <br />1年目から基本設計〜テストまでを一気通貫で担い、営業提案までこなす「ビジネスに強いエンジニア」。
                  <br />大手スクール講師と社内新人研修官の経験から、既存教育の限界を痛感。「現場で通用するエンジニアを育てる」指導を信条とする。
                </>
              ),
              langs: ["Java", "Spring Boot", "React", "C#", "Docker", "PostgreSQL"],
            },
            {
              name: "HIROKI",
              role: "Project Lead",
              desc: (
                <>
                  現役5年目のテックリード。
                  <br />フルスクラッチ開発の立ち上げや工場DXシステムのPL（プロジェクトリーダー）を歴任。
                  <br />1年目から基本設計〜テストまでを一気通貫で担い、営業提案までこなす「ビジネスに強いエンジニア」。
                  <br />大手スクール講師と社内新人研修官の経験から、既存教育の限界を痛感。「現場で通用するエンジニアを育てる」指導を信条とする。
                </>
              ),
              langs: ["Java", "Spring Boot", "React", "C#", "Docker", "PostgreSQL"],
            },
          ].map((teacher, i) => (
            <div key={i} className="border border-[#00FFFF] rounded-2xl overflow-hidden bg-[#0D1117]/50 backdrop-blur-sm text-left flex flex-col">
              <div className="h-80 bg-gray-800 flex items-center justify-center text-gray-500 shrink-0">
                写真（後ほど挿入）
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-bold text-[#E6E6E6] mb-1">{teacher.name}</h3>
                <p className="text-[#00FFFF] font-bold mb-6 text-lg">{teacher.role}</p>
                <p className="text-[#E6E6E6] leading-relaxed text-base flex-grow">
                  {teacher.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-bold text-[#E6E6E6] mr-2">経験言語：</span>
                  {teacher.langs.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-[#1B1F23] border border-gray-600 rounded text-sm text-[#E6E6E6]">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* カリキュラム紹介 */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-12">
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold mb-8">
          1ヶ月<span className="text-[#00FFFF]">集中</span>プログラム
        </h1>
        <p className="text-xl md:text-4xl font-light mb-16">
          3年分を、1ヶ月で。
        </p>
        <div className="flex flex-col gap-8 w-full">
          {[
            {
              week: "WEEK 01",
              title: "Git/GitHub,HTML/CSS,JS,React",
              items: ["環境構築と目標設定", "React基礎徹底", "コードレビューの洗礼"],
              icon: Code,
            },
            {
              week: "WEEK 02",
              title: "postgreSQL,基本/詳細設計,単体テスト",
              items: ["postgreSQL", "現場必須の基本/詳細設計", "品質を担保する単体テスト"],
              icon: Database,
            },
            {
              week: "WEEK 03",
              title: "Java,SpringBoot,Webシステム統合",
              items: ["Java/Spring基礎", "Webサイト制作実践", "フルスタック開発の流れ"],
              icon: Code,
            },
            {
              week: "WEEK 04",
              title: "企画・設計・開発・デプロイ",
              items: ["オリジナルアプリ作成", "自走力の証明", "最終プレゼンテーション"],
              icon: Settings,
            },
          ].map((item, index, array) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center shrink-0 relative">
                <div className="w-16 h-16 rounded-full border-2 border-[#00FFFF] flex items-center justify-center bg-[#0D1117] z-10 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  <item.icon className="w-8 h-8 text-[#00FFFF]" />
                </div>
                {index !== array.length - 1 && (
                  <div className="w-0.5 bg-[#00FFFF] absolute top-16 bottom-[-32px] shadow-[0_0_8px_rgba(0,255,255,0.5)]"></div>
                )}
              </div>
              <div className="flex-grow border border-[#00FFFF] rounded-2xl p-6 md:p-8 text-left bg-[#0D1117]/50 backdrop-blur-sm">
                <h3 className="text-xl text-[#E6E6E6] mb-2">{item.week}</h3>
                <h4 className="text-2xl font-bold text-[#E6E6E6] mb-6">{item.title}</h4>
                <ul className="space-y-3">
                  {item.items.map((text, i) => (
                    <li key={i} className="flex items-start text-[#E6E6E6] text-lg">
                      <span className="text-[#00FFFF] mr-2 font-bold">・</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* コース紹介 */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-12">
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold mb-8">
          <span className="text-[#00FFFF]">未来へ</span>の投資
        </h1>
        <p className="text-xl md:text-4xl font-light mb-16">
          安くはない。しかし、3年分の時間を買うと考えれば
          <br/>これ以上の投資はないはずだ。
        </p>
        <div className="max-w-md mx-auto border-2 border-[#00FFFF] rounded-3xl p-8 bg-[#0D1117]/80 backdrop-blur-md relative mt-12">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#00FFFF] text-black font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.5)] whitespace-nowrap tracking-wider">
            1 MONTH COURSE
          </div>
          <h3 className="text-2xl font-bold text-[#E6E6E6] mt-8 mb-4">WEB転職エンジニア</h3>
          <div className="text-[#E6E6E6] font-bold mb-8 flex items-baseline justify-center">
            <span className="text-5xl">¥400,000</span>
            <span className="text-sm ml-1 font-normal">(税込)</span>
          </div>
          <ul className="space-y-4 text-left mb-10">
            {[
              "土曜 対面8時間 集中講義（×4回）",
              "平日 オンライン1.5時間での質問サポート（×8回）",
              "現役エンジニアによるキャリア設計",
              "オリジナルポートフォリオ作成支援",
              "卒業後の質問サポート（永久）"
            ].map((item, i) => (
              <li key={i} className="flex items-start text-[#E6E6E6]">
                <Check className="w-6 h-6 text-[#00FFFF] mr-3 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="block w-full py-4 bg-[#00FFFF] text-black font-bold text-xl rounded-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all hover:scale-105 text-center"
          >
            無料カウンセリングに申し込む
          </Link>
        </div>
      </div>
    </section>
    {/* 無料カウンセリング */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-12">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="src/assets/CountDown.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold mb-8">
          覚悟は、<span className="text-[#00FFFF]">あるか？</span>
        </h1>
        <p className="text-2xl md:text-4xl mb-6 font-light">
          No Wayは、誰にでも勧められるスクールではない。
          <br/>しかし、本気でエンジニアとして生きていく覚悟があるなら、
          <br/>ここは最高の環境になるだろう。
        </p>
        <Link
          to="/contact"
          className="block w-full max-w-md mx-auto py-4 bg-[#00FFFF] text-black font-bold text-xl rounded-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all hover:scale-105 text-center mb-12"
        >
          無料カウンセリングに申し込む
        </Link>
        <p className="text-2xl md:text-4xl font-light">
          「ありえない」未来を、掴みに来い。
        </p>
      </div>
    </section>
  </div>
);

export default HomePage;
