import BackgroundMedia from "@/components/BackgroundMedia";

export default function CouncilPage() {
  const members = [
    {
      name: "S.Lathifa",
      role: "Department-Chairman",
      desc: "Provides leadership and guidance for the overall development of the institution.",
      img: "/images/member1 (2).png",
    },
    {
      name: "P. Priya dharshini",
      role: "Department-Vice Chairman",
      desc: "Supports academic activities and helps maintain discipline and student development.",
      img: "/images/member2 (2).png",
    },
    {
      name: "P. Jaya shree",
      role: "Department-Secretary",
      desc: "Coordinates student activities and encourages participation in academic and cultural events.",
      img: "/images/member3 (2).png",
    },
    {
      name: "J. Kalpana",
      role: "Department-Joint Secretary",
      desc: "Organizes council activities and works closely with students and faculty members.",
      img: "/images/member4 (2).png",
    },
  ];

  return (
    <>
      <BackgroundMedia imgSrc="/images/kt1.jpg" overlayBg="rgba(255, 255, 255, 0.12)" />

      <section className="council-section px-5 py-12 max-w-[1100px] mx-auto pb-24">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white drop-shadow-md mb-12">
          𝑺𝒕𝒖𝒅𝒆𝒏𝒕 𝑪𝒐𝒖𝒏𝒄𝒊𝒍 𝑴𝒆𝒎𝒃𝒆𝒓𝒔
        </h1>

        <div className="members-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="member-card bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl border border-white/60 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-between"
            >
              <div className="w-36 h-36 mb-5 rounded-full overflow-hidden border-4 border-[#35247b] shadow-md">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="member-info">
                <h2 className="font-bold text-gray-900 text-lg mb-1">{m.name}</h2>
                <h3 className="text-xs font-bold text-[#563ed9] uppercase tracking-wider mb-3">
                  {m.role}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
