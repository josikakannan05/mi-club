"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";

export default function ClubCardPage() {
  const [participant, setParticipant] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("miClubParticipant");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setParticipant(parsed);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });
      const link = document.createElement("a");
      link.download = `MI-CLUB-CARD-${participant?.registerNumber || "member"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
      alert("❌ Download failed. Please try again.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getExpiryYear = (batch) => {
    if (!batch) return "2027";
    const parts = batch.split("–").map((s) => s.trim()).filter(Boolean);
    if (parts.length > 1) return parts[1];
    const parts2 = batch.split("-").map((s) => s.trim()).filter(Boolean);
    if (parts2.length > 1) return parts2[1];
    return "2027";
  };

  const qrValue = participant
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/student-profile?token=${participant.qrToken || participant.registerNumber}`
    : "http://localhost:3000/student-profile";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d7f7fa] via-[#e3eaff] to-[#f8f4fa] text-gray-900 pb-16">
      {/* NAVBAR */}
      <nav className="h-[68px] px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-indigo-900/10 no-print">
        <Link href="/" className="text-[#563ed9] text-xl font-extrabold">
          MI CLUB
        </Link>
        <div className="flex gap-6 items-center text-sm font-bold text-gray-700">
          <Link href="/signin" className="hover:text-[#563ed9]">
            Sign In Portal
          </Link>
          <Link href="/events" className="hover:text-[#563ed9]">
            Events
          </Link>
        </div>
      </nav>

      {/* PAGE CONTAINER */}
      <div className="max-w-[1120px] mx-auto px-4 py-8">
        <h1 className="text-center text-3xl font-black text-[#222] mb-1 no-print">
          MI Club Membership Card
        </h1>
        <p className="text-center text-sm text-gray-600 mb-8 no-print">
          Mangayarkarasi College Of Arts and Science for Women
        </p>

        {!participant ? (
          <div className="max-w-[600px] mx-auto p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-center font-semibold text-sm shadow-md no-print">
            ⚠️ You are not signed in. Please{" "}
            <Link href="/signin" className="underline font-bold text-[#563ed9]">
              Sign In
            </Link>{" "}
            first to view or generate your membership card.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-start">
            {/* CONTROLS PANEL */}
            <div className="panel bg-white/95 p-6 rounded-2xl shadow-xl border border-white no-print space-y-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                Card Customization
              </h2>

              {/* PHOTO UPLOAD */}
              <div className="photo-area flex flex-col items-center">
                <div className="w-[120px] h-[145px] border-2 border-dashed border-[#bdb5e9] rounded-xl bg-[#f6f3ff] flex items-center justify-center overflow-hidden mb-3">
                  {photoUrl ? (
                    <img src={photoUrl} alt="Passport preview" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs font-bold text-[#8878c9] text-center px-2">
                      Upload Passport Photo
                    </span>
                  )}
                </div>
                <label className="w-full text-center bg-white border border-[#563ed9] text-[#563ed9] hover:bg-[#563ed9] hover:text-white font-bold py-2 px-4 rounded-xl text-xs cursor-pointer transition-colors">
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* DETAILS READONLY */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-extrabold text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={participant.name || ""}
                    readOnly
                    className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-sm font-semibold text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-gray-700 mb-1">Register Number</label>
                  <input
                    type="text"
                    value={participant.registerNumber || ""}
                    readOnly
                    className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-sm font-semibold text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-gray-700 mb-1">Domain</label>
                  <input
                    type="text"
                    value={participant.domain || ""}
                    readOnly
                    className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-sm font-semibold text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-gray-700 mb-1">Batch</label>
                  <input
                    type="text"
                    value={participant.batch || ""}
                    readOnly
                    className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-sm font-semibold text-gray-800"
                  />
                </div>
              </div>

              {/* ACTIONS */}
              <div className="pt-4 space-y-2">
                <button
                  onClick={handleDownload}
                  className="w-full bg-[#111] hover:bg-[#333] text-white font-bold py-3 px-4 rounded-xl text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  📥 Download Card Image
                </button>
                <button
                  onClick={handlePrint}
                  className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-xl text-xs tracking-wider uppercase transition-colors"
                >
                  🖨️ Print Card
                </button>
              </div>
            </div>

            {/* CARD PREVIEW CONTAINER */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold text-gray-800 mb-4 no-print">Card Preview</h2>

              {/* THE ID CARD ELEMENT */}
              <div
                ref={cardRef}
                className="print-only-card club-card relative w-[560px] h-[340px] max-w-full rounded-2xl border-2 border-black p-[23px_27px] shadow-2xl overflow-hidden text-black select-none"
                style={{
                  backgroundImage: "url('/images/sub2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* INNER BORDER OVERLAY */}
                <div className="absolute inset-2 border border-black/30 rounded-xl pointer-events-none" />

                {/* CARD HEADER */}
                <div className="relative min-h-[86px] z-10 flex items-start">
                  <img
                    src="/images/mcwlogo.png"
                    alt="College Logo"
                    className="absolute left-0 top-0 w-[67px] h-[67px] object-contain"
                  />
                  <div className="w-full text-center pl-[70px] pr-4">
                    <h3 className="text-[#edeaea] text-[13px] font-black tracking-wide leading-tight uppercase drop-shadow">
                      Mangayarkarasi College of Arts and Science for Women
                    </h3>
                    <h4 className="text-white text-[28px] font-black tracking-[2.5px] mt-1 leading-none drop-shadow-md">
                      MI CLUB
                    </h4>
                    <p className="text-[#f8f0f0] text-[9px] font-black tracking-[2px] mt-1 uppercase">
                      MEMBERSHIP CARD
                    </p>
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="relative z-10 flex gap-5 mt-1 items-center">
                  {/* PHOTO */}
                  <div className="w-[112px] h-[137px] shrink-0 border-2 border-black rounded-md overflow-hidden bg-white/80 flex items-center justify-center shadow-md">
                    {photoUrl ? (
                      <img src={photoUrl} alt={participant.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[10px] font-black text-white text-center p-1 uppercase drop-shadow">
                        PHOTO HERE
                      </span>
                    )}
                  </div>

                  {/* DETAILS */}
                  <div className="flex-1 space-y-2 text-white font-black drop-shadow">
                    <div className="flex items-baseline text-xs">
                      <span className="w-24 shrink-0 text-[#e9e3e3] uppercase text-[10px] tracking-wider">
                        NAME :
                      </span>
                      <span className="flex-1 text-white font-black text-sm uppercase">
                        {participant.name}
                      </span>
                    </div>

                    <div className="flex items-baseline text-xs">
                      <span className="w-24 shrink-0 text-[#e9e3e3] uppercase text-[10px] tracking-wider">
                        REG NO :
                      </span>
                      <span className="flex-1 text-white font-black text-sm uppercase">
                        {participant.registerNumber}
                      </span>
                    </div>

                    <div className="flex items-baseline text-xs">
                      <span className="w-24 shrink-0 text-[#e9e3e3] uppercase text-[10px] tracking-wider">
                        DOMAIN :
                      </span>
                      <span className="flex-1 text-white font-black text-sm uppercase">
                        {participant.domain || "CS"}
                      </span>
                    </div>

                    <div className="flex items-baseline text-xs">
                      <span className="w-24 shrink-0 text-[#e9e3e3] uppercase text-[10px] tracking-wider">
                        BATCH :
                      </span>
                      <span className="flex-1 text-white font-black text-sm uppercase">
                        {participant.batch || "2024-2027"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* QR CODE ABSOLUTE POSITIONED */}
                <div className="absolute right-5 bottom-[42px] z-20 text-center">
                  <div className="bg-white p-1 border-2 border-black rounded-md inline-block shadow-md">
                    <QRCodeSVG value={qrValue} size={84} level="M" />
                  </div>
                  <div className="text-[7px] font-black text-white uppercase tracking-wider mt-1 drop-shadow">
                    VERIFY QR
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="absolute left-[27px] right-[27px] bottom-[14px] z-10 flex justify-between text-[9px] font-black text-white tracking-widest uppercase drop-shadow">
                  <span>VALID TILL: MAY {getExpiryYear(participant.batch)}</span>
                  <span className="text-[#f3efef] font-extrabold">MI CLUB MEMBER</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
