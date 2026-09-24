import Link from "next/link";
import BackgroundMedia from "@/components/BackgroundMedia";

export default function Home() {
  return (
    <>
      {/* FULL SCREEN BACKGROUND */}
      <BackgroundMedia imgSrc="/images/k11.png" overlayBg="rgba(0, 0, 0, 0.25)" />

      {/* HERO SECTION */}
      <section className="hero min-h-[600px] flex justify-center items-center text-center px-5 py-[70px]">
        <div className="hero-content max-w-[950px] w-full mx-auto">
          <h1 className="main-title font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-widest text-white drop-shadow-md mb-4 animate-title-reveal">
            𝑴𝑰 𝑪𝑳𝑼𝑩
          </h1>

          <p className="tagline text-lg sm:text-xl text-slate-100 font-medium tracking-widest mb-6">
            𝑶𝑹𝑮𝑨𝑵𝑰𝒁𝑬𝑫 𝑩𝒀
          </p>

          <h2 className="fest-title font-serif text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4 leading-snug">
            𝑻𝒉𝒆 𝑫𝒆𝒑𝒂𝒓𝒕𝒎𝒆𝒏𝒕 𝒐𝒇{" "}
            <strong className="font-extrabold block sm:inline">
              𝑪𝒐𝒎𝒑𝒖𝒕𝒆𝒓 𝑺𝒄𝒊𝒆𝒏𝒄𝒆 𝒂𝒏𝒅 𝑨𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔
            </strong>
          </h2>

          <h3 className="department text-sm sm:text-base md:text-lg text-slate-200 font-medium space-x-2 mb-6 flex flex-wrap justify-center gap-2">
            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">𝑪𝒐𝒎𝒑𝒖𝒕𝒆𝒓 𝑺𝒄𝒊𝒆𝒏𝒄𝒆</span>
            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">𝑪𝒐𝒎𝒑𝒖𝒕𝒆𝒓 𝑨𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏</span>
            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">𝑨𝒓𝒕𝒊𝒇𝒊𝒄𝒊𝒂𝒍 𝑰𝒏𝒕𝒆𝒍𝒍𝒊𝒈𝒆𝒏𝒄𝒆</span>
            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">𝑫𝒂𝒕𝒂 𝑺𝒄𝒊𝒆𝒏𝒄𝒆 & 𝑨𝒏𝒂𝒍𝒚𝒕𝒊𝒄𝒔</span>
          </h3>

          <p className="college-name text-base sm:text-lg text-slate-100 font-serif max-w-[800px] mx-auto mb-8 leading-relaxed">
            𝑴𝒂𝒏𝒈𝒂𝒚𝒂𝒓𝒌𝒂𝒓𝒂𝒔𝒊 𝑪𝒐𝒍𝒍𝒆𝒈𝒆 𝒐𝒇 𝑨𝒓𝒕𝒔 𝒂𝒏𝒅 𝑺𝒄𝒊𝒆𝒏𝒄𝒆 𝒇𝒐𝒓 𝑾𝒐𝒎𝒆𝒏 𝑷𝒂𝒓𝒂𝒗𝒂𝒊, 𝑴𝒂𝒅𝒖𝒓𝒂𝒊.
          </p>

          <Link
            href="/events"
            className="explore-btn inline-flex items-center justify-center gap-2 bg-[#432bc0] hover:bg-[#563ed9] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Events
            <span className="text-xl"> » </span>
          </Link>
        </div>
      </section>

      {/* ABOUT COLLEGE CARD */}
      <section className="px-5 py-8 max-w-[1050px] mx-auto">
        <div className="about-card glass-card bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-white/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="about-content space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#291f65]">
              𝑨𝒃𝒐𝒖𝒕 𝑪𝒐𝒍𝒍𝒆𝒈𝒆
            </h2>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              Mangayarkarasi guru institution was founded by Amarar K. Pitchaiah
              Pillai, a visionary philanthropist of the 20th century, and has grown
              into a premier Centre of Learning for Higher Education and Research.
              <br />
              <br />
              Mangayarkarasi college of arts & science for women was established in
              1997 to offer quality, affordable education to rural women. Today it
              is one of Madurai's leading institutions — the only self-financing
              college accredited by NAAC with an "A" Grade (2024-2025) and ISO
              certified.
              <br />
              <br />
              Set on a lush, pollution-free campus, it shares grounds with
              Mangayarkarasi College of Education, Mangayarkarasi Engineering
              College, and Delhi World Public School — serving students of all ages
              for over two decades.
            </p>
          </div>
          <div className="about-image flex justify-center">
            <img
              src="/images/MCW.png"
              alt="Mangayarkarasi College"
              className="rounded-2xl max-h-[320px] object-contain shadow-md hover:scale-102 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* ABOUT MI CLUB CARD */}
      <section className="px-5 py-8 max-w-[1050px] mx-auto">
        <div className="about3-card glass-card bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-white/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="about3-content space-y-4">
            <span className="about3-tag inline-block bg-[#35247b] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
              𝙈𝙄 𝘾𝙇𝙐𝘽
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e1b4b] italic">
              "𝙀𝙢𝙥𝙤𝙬𝙚𝙧𝙞𝙣𝙜 𝙄𝙙𝙚𝙖𝙨. 𝙄𝙣𝙨𝙥𝙞𝙧𝙞𝙣𝙜 𝙄𝙣𝙣𝙤𝙫𝙖𝙩𝙞𝙤𝙣"
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              A dynamic student-led platform designed to foster creativity,
              technical excellence and intellectual growth. The club serves as
              a hub for students to transition from classroom learning to
              real-world application, encouraging innovation through healthy
              competition and collaborative project development.
            </p>
            <div className="h-1 w-20 bg-[#35247b] rounded-full mt-4"></div>
          </div>
          <div className="about3-image flex justify-center">
            <div className="logo-square3 w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-3xl p-6 shadow-xl border-4 border-[#243b78] flex items-center justify-center transition-transform duration-300 hover:rotate-2 hover:scale-105">
              <img src="/images/logo3.png" alt="MI Club Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* RULES & GUIDELINES */}
      <section className="px-5 py-8 max-w-[1050px] mx-auto">
        <div className="rules-card bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-white/50">
          <h2 className="rules-title font-serif text-3xl font-bold text-[#1e1b4b] text-center mb-2">
            Rules & Guidelines
          </h2>
          <p className="rules-subtitle text-gray-600 text-center mb-6">
            Please follow these guidelines during all club activities.
          </p>
          <ul className="rules-list space-y-4 max-w-[900px] mx-auto text-gray-800 text-base">
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#563ed9] mt-2 shrink-0" />
              <span>Students are expected to maintain discipline and professionalism during all club activities.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#563ed9] mt-2 shrink-0" />
              <span>All members should actively participate and cooperate with the organizing team.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#563ed9] mt-2 shrink-0" />
              <span>Participants must follow the instructions given by the faculty coordinators.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#563ed9] mt-2 shrink-0" />
              <span>Respectful communication and responsible behaviour are expected from every club member.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#563ed9] mt-2 shrink-0" />
              <span>Any changes or updates regarding club activities will be communicated through the official channels.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FACULTY LEADERSHIP */}
      <section className="faculty-section px-5 py-12 max-w-[1200px] mx-auto">
        <h2 className="faculty-title font-serif text-2xl sm:text-3xl font-bold text-center text-white drop-shadow-md mb-10 leading-snug">
          𝑻𝒉𝒆𝒓𝒆 𝑰𝒔 𝑮𝒓𝒆𝒂𝒕 𝑻𝒆𝒂𝒎 𝑾𝒉𝒐 𝑳𝒆𝒂𝒅𝒔 𝑻𝒉𝒆 𝑺𝒖𝒄𝒄𝒆𝒔𝒔 𝒐𝒇 𝑶𝒖𝒓 𝑪𝒐𝒍𝒍𝒆𝒈𝒆
        </h2>

        <div className="faculty-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* LEADER 1 */}
          <div className="faculty-card bg-white/90 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/60">
            <div className="faculty-photo w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#35247b] shadow-md">
              <img src="/images/chair.png" alt="Dr. P. ASHOK KUMAR" className="w-full h-full object-cover object-top" />
            </div>
            <div className="faculty-info">
              <h3 className="font-bold text-lg text-gray-900">Dr. P.ASHOK KUMAR</h3>
              <h4 className="text-sm font-semibold text-[#563ed9] mt-1">Chairman</h4>
            </div>
          </div>

          {/* LEADER 2 */}
          <div className="faculty-card bg-white/90 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/60">
            <div className="faculty-photo w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#35247b] shadow-md">
              <img src="/images/vice.png" alt="Er. A. SHAKTI PRANESH" className="w-full h-full object-cover object-top" />
            </div>
            <div className="faculty-info">
              <h3 className="font-bold text-lg text-gray-900">Er.A.SHAKTI PRANESH</h3>
              <h4 className="text-sm font-semibold text-[#563ed9] mt-1">Vice-Chairman</h4>
            </div>
          </div>

          {/* LEADER 3 */}
          <div className="faculty-card bg-white/90 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/60">
            <div className="faculty-photo w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#35247b] shadow-md">
              <img src="/images/prince.png" alt="Dr. UMA BASKAR" className="w-full h-full object-cover object-top" />
            </div>
            <div className="faculty-info">
              <h3 className="font-bold text-lg text-gray-900">Dr.UMA BASKAR</h3>
              <h4 className="text-sm font-semibold text-[#563ed9] mt-1">Principal</h4>
            </div>
          </div>

          {/* LEADER 4 */}
          <div className="faculty-card bg-white/90 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/60">
            <div className="faculty-photo w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#35247b] shadow-md">
              <img src="/images/dean.png" alt="Mrs. K. CHENDUR PRIYADHARSINI" className="w-full h-full object-cover object-top" />
            </div>
            <div className="faculty-info">
              <h3 className="font-bold text-lg text-gray-900">Mrs.K.CHENDUR PRIYADHARSINI</h3>
              <h4 className="text-sm font-semibold text-[#563ed9] mt-1">Dean Academics</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
