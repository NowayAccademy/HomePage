import React, { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Check,
  Zap,
  Shield,
  Target,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(1);

  const timeSlots = [
    "10:00 - 10:30",
    "11:00 - 11:30",
    "13:00 - 13:30",
    "14:00 - 14:30",
    "19:00 - 19:30",
    "20:00 - 20:30",
    "21:00 - 21:30",
  ];

  const faqs = [
    {
      q: "文系・未経験でも本当に大丈夫ですか？",
      a: "はい、大丈夫です。実際に、No Way で成果を出している受講生の多くは文系・完全未経験からのスタートです。ただし、私たちは「誰でも簡単にできる」とは言いません。No Way では、・なぜそのコードを書くのか・現場ではどう考え、どう設計するのかを重視し、暗記ではなく“考え方”から教えます。そのため、文系か理系か、経験があるかよりも、「自分で考え、手を動かす姿勢」が何より重要です。その姿勢がある方であれば、未経験からでも、現場で通用するレベルまで到達できます。",
    },
    {
      q: "働きながらでも受講できますか？",
      a: "可能です。実際に、仕事をしながら受講している方も多くいます。ただし、No Way は「空いた時間だけで何とかなる」という学習スタイルではありません。平日の仕事終わりや土日を使って、継続的に学習時間を確保する必要があります。とはいえ、無理なスケジュールを強いることはありません。カウンセリングでは、現在の働き方や生活リズムを伺った上で、現実的に続けられるかを一緒に確認します。「続けられる見込みがあるかどうか」も含めて、正直にお伝えします。",
    },
    {
      q: "無理な勧誘はされませんか？",
      a: "一切行いません。No Way では、やる気や覚悟が整っていない状態で無理に入会しても、お互いにとって良い結果にならないと考えています。そのため、カウンセリングでは・今の状況で受講が現実的か・No Way のやり方が合っているかを、率直にお話しします。場合によっては、「今はまだタイミングではない」とお伝えすることもあります。納得した上で、ご自身で判断していただくことを大切にしています。",
    },
  ];

  const daysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    setSelectedDate(null);
  };

  const renderCalendarDays = () => {
    const totalDays = daysInMonth(currentDate);
    const startDay = firstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-10 w-10 md:h-12 md:w-12"></div>
      );
    }

    for (let i = 1; i <= totalDays; i++) {
      const isSelected = selectedDate === i;
      days.push(
        <button
          key={i}
          onClick={() => {
            setSelectedDate(i);
            setSelectedTime(null);
          }}
          className={`h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-sm font-bold transition-all duration-300 rounded
            ${
              isSelected
                ? "bg-[#00FFFF] text-black shadow-[0_0_15px_rgba(0,255,255,0.8)]"
                : "text-gray-400 hover:text-[#00FFFF] hover:border hover:border-[#00FFFF]/30 hover:bg-[#0D1117]"
            }
          `}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="bg-[#0D1117] text-white">
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-12">
        <div className="absolute inset-0 z-0">
          <img
            src="src/assets/ClassScenery.png"
            alt="授業風景"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-7xl font-bold mb-8">
            ありえない未来へ
          </h1>
          <p className="text-xl md:text-3xl mb-6 font-light">
            現役エンジニアが1対1で対話する「キャリア戦略面談」
          </p>
          <p className="text-lg md:text-2xl mb-12 font-light text-gray-300">
            ここは、ただのスクールではありません。
            <br />
            最高の環境で、あなたを待っています。
          </p>
          <div className="mt-20 animate-bounce">
            <ChevronDown className="w-10 h-10 mx-auto text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
          </div>
        </div>
      </section>

      {/* 予約セクション */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden p-12"
        id="reservation"
      >
        <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-6xl font-bold mb-8">
              <span className="text-[#00FFFF]">無料カウンセリング予約</span>
            </h1>
            <p
              className="text-gray-400 text-base font-bold text-left ml-40 pl-35xl"
              style={{ paddingLeft: "70px" }}
            >
              <span>
                オンライン(Zoom)にて実施します
                <br />
                無料カウンセリングの所要時間は30分になります。
                <br />
                お時間の無い方は、カウンセリング開始時にお伝えいただければ短縮することも可能です。
                <br />
                日時変更も柔軟に可能です。枠が埋まる前に、お気軽にご予約ください。
              </span>
            </p>
          </div>

          <div className="bg-[#0D1117]/80 border-2 border-[#00FFFF] rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)] overflow-hidden backdrop-blur-sm">
            {bookingStep === 1 && (
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-8 md:w-3/5 border-b md:border-b-0 md:border-r-2 border-[#00FFFF]/30">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      {currentDate.toLocaleString("ja-JP", {
                        year: "numeric",
                        month: "long",
                      })}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={handlePrevMonth}
                        className="p-2 hover:bg-[#00FFFF]/10 text-[#00FFFF] rounded transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNextMonth}
                        className="p-2 hover:bg-[#00FFFF]/10 text-[#00FFFF] rounded transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 md:gap-2 text-center mb-4">
                    {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
                      <div
                        key={day}
                        className="text-sm text-gray-500 font-bold"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1 md:gap-2 place-items-center">
                    {renderCalendarDays()}
                  </div>
                </div>

                <div className="p-6 md:p-8 md:w-2/5 bg-black/40 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {selectedDate
                      ? `${
                          currentDate.getMonth() + 1
                        }月${selectedDate}日 時間選択`
                      : "日付を選択してください"}
                  </h3>

                  <div className="flex-1 overflow-y-auto max-h-[300px] space-y-3 pr-2">
                    {selectedDate ? (
                      timeSlots.map((time, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedTime(time)}
                          className={`w-full text-left px-4 py-3 text-base border-2 rounded-lg font-semibold transition-all
                            ${
                              selectedTime === time
                                ? "bg-[#00FFFF]/20 border-[#00FFFF] text-[#00FFFF]"
                                : "border-white/10 text-gray-400 hover:border-[#00FFFF]/50 hover:text-white"
                            }`}
                        >
                          {time}
                        </button>
                      ))
                    ) : (
                      <div className="text-gray-500 text-base py-10 text-center">
                        左のカレンダーから希望日を選択してください
                      </div>
                    )}
                  </div>

                  <button
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setBookingStep(2)}
                    className="mt-6 w-full bg-[#00FFFF] text-black font-bold py-4 text-lg rounded-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105"
                  >
                    次へ進む
                  </button>
                </div>
              </div>
            )}

            {bookingStep === 2 && (
              <div className="p-8 md:p-12">
                <div className="mb-8 border-b-2 border-[#00FFFF]/30 pb-6">
                  <p className="text-[#00FFFF] font-bold text-sm mb-2">
                    選択した日時
                  </p>
                  <p className="text-3xl font-bold">
                    {currentDate.getMonth() + 1}月{selectedDate}日{" "}
                    <span className="text-gray-500">|</span> {selectedTime}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-white text-base mb-3 font-bold">
                      お名前
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border-2 border-white/20 p-4 text-white text-lg rounded-lg focus:border-[#00FFFF] focus:outline-none transition-colors"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-base mb-3 font-bold">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      className="w-full bg-black/50 border-2 border-white/20 p-4 text-white text-lg rounded-lg focus:border-[#00FFFF] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#00FFFF] text-base mb-3 font-bold">
                      志望動機・現状の課題 (必須)
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-black/50 border-2 border-white/20 p-4 text-white text-lg rounded-lg focus:border-[#00FFFF] focus:outline-none transition-colors"
                      placeholder="なぜ現状を変えたいのか、本音で書いてください。"
                    ></textarea>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setBookingStep(1)}
                      className="w-1/3 border-2 border-white/20 text-gray-400 font-bold py-4 text-lg rounded-xl hover:bg-white/5 transition-colors"
                    >
                      戻る
                    </button>
                    <button
                      onClick={() => setBookingStep(3)}
                      className="w-2/3 bg-[#00FFFF] text-black font-bold py-4 text-lg rounded-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all hover:scale-105"
                    >
                      予約を確定する
                    </button>
                  </div>
                </div>
              </div>
            )}

            {bookingStep === 3 && (
              <div className="p-12 md:p-24 text-center">
                <div className="w-24 h-24 rounded-full bg-[#00FFFF]/20 border-4 border-[#00FFFF] flex items-center justify-center mx-auto mb-8">
                  <Check className="w-12 h-12 text-[#00FFFF]" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  予約完了
                </h3>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  予約を受け付けました。
                  <br />
                  メールにてZoomのリンクをお送りします。
                  <br />
                  時間厳守でアクセスしてください。
                </p>
                <button
                  onClick={() => {
                    setBookingStep(1);
                    setSelectedDate(null);
                    setSelectedTime(null);
                  }}
                  className="text-[#00FFFF] border-b-2 border-[#00FFFF] hover:text-white hover:border-white transition-colors text-lg font-bold pb-1"
                >
                  トップに戻る
                </button>
              </div>
            )}
          </div>

          <p className="text-center text-gray-400 mt-8 text-base">
            日程選択後、志望動機を入力して予約を完了させてください
          </p>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-12">
        <div className="relative z-10 px-4 max-w-4xl mx-auto w-full">
          <h1 className="text-3xl md:text-7xl font-bold mb-16 text-center">
            よくある<span className="text-[#00FFFF]">質問</span>
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-2 border-[#00FFFF]/30 bg-[#0D1117]/50 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left hover:bg-[#00FFFF]/5 transition-colors"
                >
                  <span className="font-bold text-lg md:text-xl pr-4">
                    Q. {faq.q}
                  </span>
                  {activeAccordion === idx ? (
                    <ChevronUp className="text-[#00FFFF] w-6 h-6 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-500 w-6 h-6 flex-shrink-0" />
                  )}
                </button>
                {activeAccordion === idx && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-300 text-base md:text-lg leading-relaxed border-t-2 border-[#00FFFF]/30 pt-6">
                    <span className="text-[#00FFFF] font-bold mr-2">A.</span>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 font-bold">
            ※カウンセリングは、入会を前提とした場ではありません。情報収集や相談だけでも問題ありません。
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
