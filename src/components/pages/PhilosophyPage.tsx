import {
  Zap,
  Target,
  Shield,
  TrendingUp,
  Award,
  Rocket,
  Brain,
  Heart,
  Star,
  Check,
} from "lucide-react";
import ParticleBackground from "../layout/ParticleBackground";

const PhilosophyPage = () => (
  <div className="pt-20">
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-purple-950/20">
      <ParticleBackground />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <Shield className="w-24 h-24 mx-auto text-purple-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.8)] animate-pulse" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          私たちの理念
        </h1>
        <p className="text-2xl text-gray-300">NoWayが大切にする、3つの軸</p>
      </div>
    </section>

    <section className="py-32 px-4 bg-gradient-to-b from-purple-950/20 to-black relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <Target className="w-20 h-20 text-cyan-400 drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-cyan-400">
              Mission
            </h2>
            <p className="text-3xl text-gray-400 mb-8">使命</p>
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              ありえないをできるに変える人を増やす
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-2 border-cyan-500/30 p-12 rounded-3xl">
            <p className="text-xl text-gray-300 leading-relaxed">
              基礎だけでなく、実務で戦える本質的なスキルを身につけさせ、受講生の人生の選択肢を広げる教育を提供します。
              <br />
              <br />
              無理だ、ありえないと言われることに挑戦し、それを実現できる人材を育成することが、私たちの使命です。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-32 px-4 bg-gradient-to-b from-black to-purple-950/20 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-2 border-purple-500/30 p-12 rounded-3xl">
            <p className="text-xl text-gray-300 leading-relaxed">
              NoWayで学べば、どこでも即戦力として活躍できる。
              <br />
              <br />
              そんな洗練された技術者集団を輩出し続ける未来を目指します。業界全体のレベルを底上げし、日本のエンジニア教育のスタンダードを変えていきます。
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="mb-8">
              <Zap className="w-20 h-20 text-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-purple-400">
              Vision
            </h2>
            <p className="text-3xl text-gray-400 mb-8">目指す未来</p>
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              精鋭エンジニアが育つ最後のスクールをつくる
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-32 px-4 bg-gradient-to-b from-purple-950/20 to-black relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Shield className="w-20 h-20 mx-auto mb-8 text-pink-400 drop-shadow-[0_0_30px_rgba(244,114,182,0.8)]" />
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-pink-400">
            Value
          </h2>
          <p className="text-3xl text-gray-400">価値観</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Rocket className="w-12 h-12" />,
              title: "Impossible Spirit",
              subtitle: "不可能への挑戦",
              desc: "無理だろ、ありえないを、実現する方法を探し続ける。",
            },
            {
              icon: <Award className="w-12 h-12" />,
              title: "Practical Mastery",
              subtitle: "実務力徹底主義",
              desc: "現場で即戦力として通用する、実務重視の教育を徹底する。",
            },
            {
              icon: <TrendingUp className="w-12 h-12" />,
              title: "Growth Ownership",
              subtitle: "成長の当事者意識",
              desc: "受講生が自走できるよう、釣り方を教える教育を提供する。",
            },
            {
              icon: <Heart className="w-12 h-12" />,
              title: "Customer First",
              subtitle: "顧客ファースト",
              desc: "利益よりも受講生の成長と成功を最優先に判断する。",
            },
            {
              icon: <Brain className="w-12 h-12" />,
              title: "Continuous Learning",
              subtitle: "学び続ける精鋭集団",
              desc: "常に学び、成果で語るプロフェッショナルが集まる文化を作る。",
            },
            {
              icon: <Star className="w-12 h-12" />,
              title: "Excellence Pursuit",
              subtitle: "卓越性の追求",
              desc: "妥協せず、常に最高品質の教育とサービスを提供し続ける。",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-2 border-pink-500/30 p-8 rounded-2xl hover:border-pink-400 hover:shadow-[0_0_40px_rgba(244,114,182,0.4)] transition-all duration-300"
            >
              <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-pink-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{item.subtitle}</p>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-32 px-4 bg-gradient-to-b from-black to-cyan-950/20 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          ありえないに挑戦する理由
        </h2>

        <div className="bg-gradient-to-br from-cyan-900/10 to-purple-900/10 border-2 border-cyan-500/30 p-12 md:p-16 rounded-3xl backdrop-blur-sm">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            私は3年間、某大手プログラミングスクール「Samuraiエンジニア」で、副業として教育事業に携わってきました。
            しかし日々受講生と向き合う中で、ある疑問が生まれました。
          </p>

          <div className="my-12 p-8 bg-cyan-500/10 border-l-4 border-cyan-400 rounded-r-xl">
            <p className="text-3xl font-bold text-cyan-400">
              このレベルで本当に転職できるのだろうか？
            </p>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            多くの受講生は基礎的な学習にとどまり、現場で必須となる基本設計や業務フローの理解、プロジェクトの進め方を十分に学べていませんでした。
          </p>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            さらに、私自身がエンジニア5年目でPLになったとき、現場には知識が不十分なまま現場に入ってしまったエンジニアが多いことに気づきました。
            これは本人の問題ではなく、教育側の責任でもあります。
          </p>

          <div className="my-12 p-8 bg-purple-500/10 border-l-4 border-purple-400 rounded-r-xl">
            <p className="text-2xl font-bold text-white mb-4">
              そこで私は考えました。
            </p>
            <ul className="space-y-3 text-xl text-gray-300">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span>本当に戦えるエンジニアを育てたい</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span>
                  稼がせるのではなく、釣り方を教える教育を提供したい
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span>洗練された精鋭が集う組織を作りたい</span>
              </li>
            </ul>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed">
            No
            Wayありえない、無理だと言われることを、私たちなら実現する。大企業で1年かかる成果を、私たちは2〜3ヶ月で達成します。
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default PhilosophyPage;