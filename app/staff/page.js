import BackgroundMedia from "@/components/BackgroundMedia";

export default function StaffPage() {
  const staffList = [
    { name: "Mrs.S. Kirubha Rani M.Sc(IT).,M.Phil", role: "Assistant Professor", desc: "Experienced educator committed to academic excellence and student development.", img: "/images/staff2.png" },
    { name: "Mrs. B.Rajalakshmi M.C.A.,M.Phil", role: "Assistant Professor", desc: "Passionate about teaching and encouraging students to achieve their goals.", img: "/images/staff3.png" },
    { name: "Mrs.R.Lakshmi M.Sc(IT).,M.Phil", role: "Assistant Professor", desc: "Committed to creating an engaging and supportive learning environment.", img: "/images/stafff4.png" },
    { name: "Ms. P. Umadevi M.Sc.,M.Phil.,NET", role: "Assistant Professor", desc: "Helps students develop strong academic and practical knowledge.", img: "/images/staff5.jpeg" },
    { name: "Mrs.B.Meenakshi M.C.A.,M.Phil", role: "Assistant Professor", desc: "Focused on innovative teaching methods and student growth.", img: "/images/staff6.png" },
    { name: "Mrs. B. Subashini M.Sc.,M.Phil", role: "Assistant Professor", desc: "Dedicated to supporting students in their academic journey.", img: "/images/stafff7.png" },
    { name: "Mrs.J.Sunitha John M.C.A.,M.Phil.,(Ph.D)", role: "Assistant Professor", desc: "Dedicated to supporting students in their academic journey.", img: "/images/stafff8.png" },
    { name: "Dr. P. Pandi Selvi M.C.A.,M.Phil.,Ph.D", role: "Assistant Professor", desc: "Encourages creativity, confidence and continuous learning.", img: "/images/staff9.png" },
    { name: "Mrs.T.Umajothi M.Sc.,M.Phil.,(Ph.D).,NET", role: "Assistant Professor", desc: "Committed to providing meaningful educational experiences.", img: "/images/stafff10.png" },
    { name: "Dr. R. Sangeetha M.Sc.,M.Phil.,Ph.D", role: "Assistant Professor", desc: "Guides students with knowledge, care and encouragement.", img: "/images/staff 11.jpeg" },
    { name: "Ms. A .Sobhana Rhosaline M.Sc.,", role: "Assistant Professor", desc: "Promotes practical learning and professional development.", img: "/images/stafff12.png" },
    { name: "Ms. V. Guna Nandhini M.Sc.,(Ph.D).,", role: "Assistant Professor", desc: "Supports students through effective teaching and mentoring.", img: "/images/staff13 (2).png" },
    { name: "Mrs. S. Saleth Shanthi M.A.,M.C.A.,M.Phil.,(Ph.D)", role: "Assistant Professor", desc: "Encourages students to explore new ideas and opportunities.", img: "/images/staff14.png" },
    { name: "Ms.S.Umamaheswari M.C.A", role: "Assistant Professor", desc: "Dedicated to developing students' academic and professional skills.", img: "/images/staff15.png" },
    { name: "Mrs.S.Alagu Parvathi M.Sc.,M.Phil", role: "Assistant Professor", desc: "Creates a positive and interactive classroom environment.", img: "/images/staff16.png" },
    { name: "Mrs.U.Indumathi M.Sc.,M.Phil", role: "Assistant Professor", desc: "Helps students build confidence and achieve academic excellence.", img: "/images/staff17.png" },
    { name: "Dr.M.Jeyavani M.Sc.,M.Phil,(Ph.D).", role: "Assistant Professor", desc: "Promotes knowledge sharing and innovative learning.", img: "/images/staff18.png" },
    { name: "Ms.Janani M.C.A", role: "Assistant Professor", desc: "Passionate about teaching and student mentoring.", img: "/images/staff 19.jpeg" },
    { name: "Ms.Sushmitha M.Sc", role: "Assistant Professor", desc: "Encourages learning through creativity and collaboration.", img: "/images/staff 20.jpeg" },
    { name: "Ms.Anusha M.Sc", role: "Assistant Professor", desc: "Committed to student success and academic development.", img: "/images/staff21.png" },
    { name: "Ms.Kameswari M.C.A", role: "Assistant Professor", desc: "Supports students with knowledge and professional guidance.", img: "/images/staff 22.jpeg" },
    { name: "Ms.Praveena M.C.A", role: "Assistant Professor", desc: "Creates an inspiring environment for effective learning.", img: "/images/staff23.png" },
    { name: "Mrs.M.Karthiyayani M.Sc.,M.Phil", role: "Assistant Professor", desc: "Dedicated to guiding students towards academic excellence.", img: "/images/staff24.png" },
    { name: "Mrs.S.Ruthra Devi M.C.A.,", role: "Assistant Professor", desc: "Focuses on practical knowledge and student development.", img: "/images/staff25.png" },
    { name: "Ms.S. Sri Harini M.Sc", role: "Assistant Professor", desc: "Encourages students to learn, explore and grow.", img: "/images/staff26.png" },
    { name: "Ms.S.Nandhini M.Sc", role: "Assistant Professor", desc: "Encouraging learning, creativity, and continuous growth.", img: "/images/staff27.png" },
    { name: "Ms.S.Rajeshwari M.Sc", role: "Assistant Professor", desc: "Shaping future leaders through knowledge and guidance.", img: "/images/staff28.png" },
    { name: "Mrs.P.Ponnalagu M.com", role: "Lab Assistant", desc: "Nurturing talent through education, innovation, and mentorship.", img: "/images/staff29.png" },
    { name: "Mrs.B.Chandrika B.C.A", role: "Lab Assistant", desc: "Committed to providing quality education and mentorship.", img: "/images/staff 30.png" },
  ];

  return (
    <>
      <BackgroundMedia imgSrc="/images/kt1.jpg" overlayBg="rgba(255, 255, 255, 0.12)" />

      {/* FEATURED HOD CARD */}
      <section className="px-5 py-10 max-w-[1050px] mx-auto">
        <div className="about2-card bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-white/50 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-center">
          <div className="about2-content space-y-4">
            <div>
              <span className="about2-tag text-indigo-950 font-bold text-lg sm:text-xl block">
                𝑫𝑹.𝑴.𝑷𝑼𝑵𝑰𝑻𝑯𝑨 𝑴.𝑪.𝑨., 𝑴.𝑷𝑯𝑰𝑳., 𝑷𝑯𝑫.
              </span>
              <h4 className="text-[#563ed9] font-bold text-base mt-1">Head & Associate Professor</h4>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e1b4b] italic">
              "We don't just teach code; we nurture innovation."
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              In today’s fast-paced digital era, computer science is not just a field of study—it is
              the driving force reshaping our world. Our department is dedicated to transforming
              passionate students into industry-ready tech leaders, creative problem solvers, and
              visionary entrepreneurs.
            </p>

            <div className="h-1 w-20 bg-[#35247b] rounded-full mt-4"></div>
          </div>

          <div className="about2-image flex justify-center">
            <div className="logo-circle w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-white p-3 border-8 border-[#243b78] shadow-2xl overflow-hidden transition-transform duration-500 hover:rotate-3 hover:scale-105">
              <img src="/images/staff1.png" alt="Dr. M. Punitha" className="w-full h-full object-cover object-top rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* STAFF GRID */}
      <section className="staff-section px-5 py-8 max-w-[1250px] mx-auto pb-20">
        <div className="staff-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {staffList.map((st, idx) => (
            <div
              key={idx}
              className="staff-card bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center shadow-md hover:shadow-xl border border-white/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#e0e7ff] shadow-inner">
                  <img src={st.img} alt={st.name} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-1">{st.name}</h3>
                <h4 className="text-xs font-bold text-[#563ed9] uppercase tracking-wider mb-3">{st.role}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mt-2">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
