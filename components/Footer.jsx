import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#d895e6] via-[#ee92da] to-[#8a407b] border-t border-white/10 text-white mt-auto">
      <div className="max-w-[1100px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[1.6fr_0.8fr_1.4fr] gap-[50px] md:gap-[70px]">
        {/* BRAND */}
        <div>
          <h2 className="font-serif text-[32px] font-bold mb-[18px] text-[#e8eaef]">MI CLUB</h2>
          <p className="text-[#dae3ef] text-[14px] leading-relaxed max-w-[500px]">
            MI CLUB is a student-focused platform of the Department of Computer
            Science and Applications that encourages students to learn,
            innovate, collaborate and showcase their talents.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-[17px] font-semibold text-[#e8e7e7] mb-[18px]">Quick Links</h3>
          <ul className="space-y-2 text.sm">
            <li>
              <Link href="/" className="text-[#dde1e6] hover:text-white transition-transform hover:translate-x-1 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[#dde1e6] hover:text-white transition-transform hover:translate-x-1 inline-block">
                About
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-[#dde1e6] hover:text-white transition-transform hover:translate-x-1 inline-block">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#dde1e6] hover:text-white transition-transform hover:translate-x-1 inline-block">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-[17px] font-semibold text-[#e8e7e7] mb-[18px]">Contact Info</h3>
          <p className="text-[#dde2e9] text-[14px] leading-relaxed mb-1">
            Department of Computer Science and Applications
          </p>
          <p className="text-[#dde2e9] text-[14px] leading-relaxed mb-1">
            Mangayarkarasi College of Arts and Science for Women
          </p>
          <p className="text-[#dde2e9] text-[14px] leading-relaxed">
            Paravai, Madurai.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-[1100px] mx-auto px-6 py-5 border-t border-white/20 text-center text-[#f3e8f8] text-[13px]">
        © 2026 MI CLUB. All Rights Reserved.
      </div>
    </footer>
  );
}
