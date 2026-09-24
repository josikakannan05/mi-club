import Link from "next/link";
import BackgroundMedia from "@/components/BackgroundMedia";

export default function EventsPage() {
  const events = [
    {
      slug: "quiz",
      title: "𝑸𝑼𝑰𝒁",
      venue: "Seminar Hall",
      time: "10:30 AM - 12:30 PM",
      team: "Team: Max 2 Participants",
      img1: "/images/Quiz.png.png",
      img2: "/images/quiz.png",
      bgClass: "from-[#3867d6] to-[#4b8cf5]",
    },
    {
      slug: "debugging",
      title: "𝑫𝑬𝑩𝑼𝑮𝑮𝑰𝑵𝑮",
      venue: "Computer Lab",
      time: "10:30 AM - 12:30 PM",
      team: "Team: Max 2 Participants",
      img1: "/images/Debugging.png.png",
      img2: "/images/debug.png",
      bgClass: "from-[#0099cc] to-[#16b5df]",
    },
    {
      slug: "ppt",
      title: "𝑷𝑨𝑷𝑬𝑹 𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨𝑻𝑰𝑶𝑵",
      venue: "Auditorium",
      time: "01:00 PM - 03:00 PM",
      team: "Team: Max 2 Participants",
      img1: "/images/Paper Presentation.png.png",
      img2: "/images/ppt.png",
      bgClass: "from-[#ee8b70] to-[#f5a28a]",
    },
    {
      slug: "code-relay",
      title: "𝑪𝑶𝑫𝑬 𝑹𝑬𝑳𝑨𝒀",
      venue: "Computer Lab",
      time: "01:00 PM - 03:00 PM",
      team: "Team: Max 3 Participants",
      img1: "/images/Code Relay.png.png",
      img2: "/images/cd.png",
      bgClass: "from-[#6c45d9] to-[#8b65ed]",
    },
    {
      slug: "webdesign",
      title: "𝑾𝒆𝒃 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕 & 𝑳𝒐𝒈𝒐 𝑫𝒆𝒔𝒊𝒈𝒏𝒊𝒏𝒈",
      venue: "Computer Lab",
      time: "10:30 AM - 12:30 PM",
      team: "Team: Max 2 Participants",
      img1: "/images/web&logo designing.png.png",
      img2: "/images/web.png",
      bgClass: "from-[#10a77a] to-[#21c58e]",
    },
  ];

  return (
    <>
      <BackgroundMedia imgSrc="/images/kt1.jpg" overlayBg="rgba(255, 255, 255, 0.12)" />

      <section className="events-section px-5 py-12 max-w-[1000px] mx-auto pb-24">
        <h1 className="events-title font-serif text-3xl sm:text-4xl text-center text-white drop-shadow-md mb-10">
          Events
        </h1>

        <div className="events-container grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((evt) => (
            <div
              key={evt.slug}
              className="event-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col"
            >
              {/* BANNER WITH HOVER IMAGE TRANSITION */}
              <div className={`event-banner relative w-full aspect-video overflow-hidden bg-gradient-to-r ${evt.bgClass}`}>
                <img
                  src={evt.img1}
                  alt={evt.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-108 opacity-100 scale-100"
                />
                <img
                  src={evt.img2}
                  alt={evt.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="event-content p-6 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#161a23] mb-4">
                    {evt.title}
                  </h2>

                  <div className="event-info flex items-center gap-2.5 mb-2 text-gray-800 text-sm font-semibold">
                    <span className="text-[#251c58]">⌖</span>
                    <span>{evt.venue}</span>
                  </div>

                  <div className="event-info flex items-center gap-2.5 mb-2 text-gray-800 text-sm font-semibold">
                    <span className="text-[#251c58]">◷</span>
                    <span>{evt.time}</span>
                  </div>

                  <div className="event-info flex items-center gap-2.5 mb-4 text-gray-800 text-sm font-semibold">
                    <span className="text-[#251c58]">♧</span>
                    <span>{evt.team}</span>
                  </div>
                </div>

                <div>
                  <Link
                    href={`/events/${evt.slug}`}
                    className="details-btn inline-block bg-[#241c55] hover:bg-[#1d70e5] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors duration-300"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
