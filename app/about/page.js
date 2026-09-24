"use client";

import { useEffect, useRef } from "react";
import BackgroundMedia from "@/components/BackgroundMedia";

export default function AboutPage() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.currentTime = 0;
            video.play().catch(() => {
              // Browser autoplay policy catch
            });
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.55 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <BackgroundMedia imgSrc="/images/kt1.jpg" overlayBg="rgba(255, 255, 255, 0.12)" />

      {/* PAGE TITLE */}
      <section className="page-title text-center py-12 px-5">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white drop-shadow-md mb-3">
          About Departments
        </h1>
        <p className="text-slate-100 text-base max-w-xl mx-auto leading-relaxed">
          Explore our departments, academic strengths, and the institution behind MI CLUB.
        </p>
      </section>

      {/* DEPARTMENTS CONTAINER */}
      <div className="max-w-[1050px] mx-auto px-5 pb-16 space-y-12">
        {/* 1. CS DEPARTMENT */}
        <section className="department bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="department-content space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#291f65]">
              B.Sc Computer Science
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
              The <strong>Computer Science (CS)</strong> department is committed to nurturing
              future-ready professionals through strong foundations in programming, computer
              applications, and emerging technologies. With a strong focus on{" "}
              <strong>technical skills, problem solving, communication, and practical learning</strong>
              , the department encourages students to participate in seminars, workshops, coding
              challenges, and innovative activities.
            </p>
          </div>
          <div className="department-image-box w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden bg-black shadow-lg relative group">
            <video
              ref={(el) => (videoRefs.current[0] = el)}
              className="department-video w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
              muted
              playsInline
              preload="metadata"
            >
              <source src="/images/CS vdo.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* 2. BCA DEPARTMENT (REVERSE) */}
        <section className="department reverse bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="department-image-box w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden bg-black shadow-lg relative group md:order-1 order-2">
            <video
              ref={(el) => (videoRefs.current[1] = el)}
              className="department-video w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
              muted
              playsInline
              preload="metadata"
            >
              <source src="/images/BCA vdo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="department-content space-y-4 md:order-2 order-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#291f65]">
              B.C.A (Bachelor of Computer Application)
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
              The <strong>Computer Applications (BCA)</strong> department focuses on developing
              students with strong knowledge of computer applications, programming, software
              development, and information technology. Students are encouraged to develop{" "}
              <strong>logical thinking, technical skills, creativity, and problem-solving abilities</strong>{" "}
              through practical learning and academic activities.
            </p>
          </div>
        </section>

        {/* 3. AI DEPARTMENT */}
        <section className="department bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="department-content space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#291f65]">
              B.Sc Computer Science (Artificial Intelligence)
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
              The <strong>Artificial Intelligence (AI)</strong> department introduces students to
              modern technologies that are transforming the digital world. The department focuses
              on areas such as{" "}
              <strong>machine learning, artificial intelligence, data-driven technologies, and intelligent systems.</strong>{" "}
              Students are encouraged to explore innovative ideas and develop practical solutions.
            </p>
          </div>
          <div className="department-image-box w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden bg-black shadow-lg relative group">
            <video
              ref={(el) => (videoRefs.current[2] = el)}
              className="department-video w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
              muted
              playsInline
              preload="metadata"
            >
              <source src="/images/AI vdo.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* 4. DATA SCIENCE DEPARTMENT (REVERSE) */}
        <section className="department reverse bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="department-image-box w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden bg-black shadow-lg relative group md:order-1 order-2">
            <video
              ref={(el) => (videoRefs.current[3] = el)}
              className="department-video w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
              muted
              playsInline
              preload="metadata"
            >
              <source src="/images/DSA vdo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="department-content space-y-4 md:order-2 order-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#291f65]">
              B.Sc Computer Science (Data Science and Analytics)
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
              The <strong>Data Science And Analytics (DSA)</strong> department focuses on helping
              students understand data, analytics, statistics, and modern computational techniques.
              Students develop skills in{" "}
              <strong>data analysis, visualization, programming, statistical methods, and data-driven decision making.</strong>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
