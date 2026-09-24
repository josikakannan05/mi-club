import Link from "next/link";
import { notFound } from "next/navigation";
import BackgroundMedia from "@/components/BackgroundMedia";

const eventDetails = {
  quiz: {
    title: "Quiz",
    banner: "/images/quiz.png",
    venue: "Seminar Hall",
    time: "10:30 AM - 12:30 PM",
    team: "Team: Max 2 Participants",
    rules: [
      "Each team must have a maximum of 2 participants.",
      "The quiz will have multiple rounds — general, rapid fire, and buzzer round.",
      "No use of mobile phones or reference material during the quiz.",
      "Decision of the quiz master will be final and binding.",
      "Participants must report 15 minutes before the scheduled time.",
    ],
    incharges: [
      { name: "Faculty Coordinator 1", role: "Assistant Professor", img: "/images/staff6.png" },
      { name: "Faculty Coordinator 2", role: "Assistant Professor", img: "/images/stafff8.png" },
    ],
  },
  debugging: {
    title: "Debugging",
    banner: "/images/debug.png",
    venue: "Computer Lab",
    time: "10:30 AM - 12:30 PM",
    team: "Team: Max 2 Participants",
    rules: [
      "Each team must have a maximum of 2 participants.",
      "Code errors must be identified and fixed within the time limit.",
      "Programming languages supported: C, C++, Java, Python.",
      "Internet access is strictly prohibited during the competition.",
      "Evaluation is based on correctness of fix and submission speed.",
    ],
    incharges: [
      { name: "Faculty Coordinator 1", role: "Assistant Professor", img: "/images/staff15.png" },
      { name: "Faculty Coordinator 2", role: "Assistant Professor", img: "/images/staff16.png" },
    ],
  },
  ppt: {
    title: "Paper Presentation",
    banner: "/images/ppt.png",
    venue: "Auditorium",
    time: "01:00 PM - 03:00 PM",
    team: "Team: Max 2 Participants",
    rules: [
      "Each team must have a maximum of 2 participants.",
      "Presentation duration: 7 minutes presentation + 2 minutes Q&A session.",
      "Topics: Artificial Intelligence, Cloud Computing, Cybersecurity, IoT, Data Analytics.",
      "PPT slides must be submitted to coordinators before event commencement.",
      "Judge's decision will be final.",
    ],
    incharges: [
      { name: "Faculty Coordinator 1", role: "Assistant Professor", img: "/images/staff9.png "},
      { name: "Faculty Coordinator 2", role: "Assistant Professor", img: "/images/staff18.png" },
    ],
  },
  "code-relay": {
    title: "Code Relay",
    banner: "/images/cd.png",
    venue: "Computer Lab",
    time: "01:00 PM - 03:00 PM",
    team: "Team: Max 3 Participants",
    rules: [
      "Each team must have a maximum of 3 participants.",
      "Team members will code in relay — one member codes at a time.",
      "A set of programming problems must be solved within the time limit.",
      "Switching members mid-problem is not allowed unless instructed.",
      "Evaluation is based on the number of problems solved correctly.",
    ],
    incharges: [
      { name: "Faculty Coordinator 1", role: "Assistant Professor", img: "/images/stafff8.png" },
      { name: "Faculty Coordinator 2", role: "Assistant Professor", img: "/images/staff13 (2).png" },
    ],
  },
  webdesign: {
    title: "Web Development & Logo Designing",
    banner: "/images/web.png",
    venue: "Computer Lab",
    time: "10:30 AM - 12:30 PM",
    team: "Team: Max 2 Participants",
    rules: [
      "Each team must have a maximum of 2 participants.",
      "Design a responsive web page or creative logo based on the spot theme.",
      "Time limit: 2 hours.",
      "HTML, CSS, JavaScript, or Graphic Design tools permitted.",
      "Evaluation based on design aesthetics, creativity, and responsiveness.",
    ],
    incharges: [
      { name: "Faculty Coordinator 1", role: "Assistant Professor", img: "/images/staff2.png" },
      { name: "Faculty Coordinator 2", role: "Assistant Professor", img: "/images/stafff4.png" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(eventDetails).map((slug) => ({ slug }));
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const evt = eventDetails[slug];

  if (!evt) {
    notFound();
  }

  return (
    <>
      <BackgroundMedia imgSrc="/images/kt1.jpg" overlayBg="rgba(255, 255, 255, 0.12)" />

      <div className="detail-wrap max-w-[900px] mx-auto px-5 py-10 pb-20">
        <Link
          href="/events"
          className="back-link inline-block mb-6 text-[#563ed9] font-semibold text-sm hover:underline"
        >
          ← Back to Events
        </Link>

        {/* BANNER */}
        <div className="event-banner w-full aspect-[16/6] rounded-2xl overflow-hidden relative shadow-xl mb-6 bg-black">
          <img src={evt.banner} alt={evt.title} className="w-full h-full object-cover block" />
          <div className="banner-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
            <h1 className="text-white text-3xl sm:text-4xl font-bold drop-shadow-md">{evt.title}</h1>
          </div>
        </div>

        {/* INFO ROW */}
        <div className="info-row flex flex-wrap gap-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md mb-8">
          <div className="info-item flex items-center gap-2 text-gray-700 text-sm font-semibold">
            <span className="text-[#563ed9] text-base">⌖</span>
            <span>{evt.venue}</span>
          </div>
          <div className="info-item flex items-center gap-2 text-gray-700 text-sm font-semibold">
            <span className="text-[#563ed9] text-base">◷</span>
            <span>{evt.time}</span>
          </div>
          <div className="info-item flex items-center gap-2 text-gray-700 text-sm font-semibold">
            <span className="text-[#563ed9] text-base">♧</span>
            <span>{evt.team}</span>
          </div>
        </div>

        {/* RULES & GUIDELINES */}
        <h2 className="section-title font-serif text-2xl font-bold text-[#162b6f] mb-4">
          Rules & Guidelines
        </h2>
        <ul className="rules-list bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md space-y-3 mb-8">
          {evt.rules.map((rule, idx) => (
            <li key={idx} className="relative pl-6 text-gray-800 text-sm leading-relaxed">
              <span className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-[#563ed9]" />
              {rule}
            </li>
          ))}
        </ul>

        {/* INCHARGE CARDS */}
        <h2 className="section-title font-serif text-2xl font-bold text-[#162b6f] mb-4">
          Event Incharges
        </h2>
        <div className="incharge-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {evt.incharges.map((incharge, idx) => (
            <div
              key={idx}
              className="incharge-card bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center border-t-4 border-[#6366f1] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#e0e7ff] shadow-inner">
                <img src={incharge.img} alt={incharge.name} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-serif font-bold text-lg text-indigo-950">{incharge.name}</h3>
              <p className="text-purple-600 font-semibold text-xs mt-1">{incharge.role}</p>
            </div>
          ))}
        </div>

        {/* REGISTER BUTTON */}
        <div className="text-center sm:text-left">
          <Link
            href="/signin"
            className="register-btn inline-block bg-[#563ed9] hover:bg-[#4028b5] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Register for this event →
          </Link>
        </div>
      </div>
    </>
  );
}
