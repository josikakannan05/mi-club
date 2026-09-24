"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function StudentProfileContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setError("No student token provided in URL.");
      return;
    }

    fetch(`http://localhost:5000/api/student/${encodeURIComponent(token)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Unable to load student profile");
        return res.json();
      })
      .then((data) => {
        setStudentData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load student profile.");
        setLoading(false);
      });
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d7f7fa] via-[#f8f4fa] to-[#e3eaff] p-6 flex justify-center items-center">
      <div className="box w-full max-w-[850px] bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100">
        <h1 className="title text-center text-[#563ed9] font-black text-3xl sm:text-4xl mb-2">
          𝓜𝓘 𝓒𝓛𝓤𝓑
        </h1>
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
          Student Profile & Event History
        </h2>

        {loading ? (
          <div className="text-center text-gray-600 py-10 font-semibold text-base">
            Loading student details...
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-10 font-bold text-base">
            {error}
          </div>
        ) : (
          <div>
            {/* STUDENT DETAILS */}
            <div className="student bg-purple-50/70 p-6 rounded-2xl text-center mb-8 border border-purple-100">
              <h3 className="text-xl font-extrabold text-[#563ed9] mb-1">
                {studentData?.student?.name}
              </h3>
              <p className="text-sm font-semibold text-gray-700">
                Register Number: <strong>{studentData?.student?.register_number}</strong>
              </p>
              <p className="text-xs text-gray-600 font-medium mt-1">
                Batch: {studentData?.student?.batch || "—"} · Domain: {studentData?.student?.domain || "—"}
              </p>
            </div>

            {/* EVENT HISTORY TABLE */}
            <h3 className="text-lg font-bold text-gray-900 mb-3">Event Participation History</h3>

            {!studentData?.events?.length ? (
              <p className="text-center text-gray-500 py-6 text-sm bg-gray-50 rounded-xl border">
                No event enrollment history found.
              </p>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#f0edfd] text-[#563ed9] font-bold">
                      <th className="p-3 border.b border-gray-200">Date</th>
                      <th className="p-3 border-b border-gray-200">Event</th>
                      <th className="p-3 border-b border-gray-200">Type</th>
                      <th className="p-3 border-b border-gray-200">Venue</th>
                      <th className="p-3 border-b border-gray-200">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.events.map((evt, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 border-b border-gray-100">
                        <td className="p-3 text-gray-700 font-medium whitespace-nowrap">
                          {new Date(evt.event_date).toLocaleDateString("en-GB")}
                        </td>
                        <td className="p-3 font-semibold text-gray-900">
                          {evt.participant_event}
                        </td>
                        <td className="p-3 text-gray-600">{evt.event_type}</td>
                        <td className="p-3 text-gray-600">{evt.venue}</td>
                        <td className="p-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                              evt.status === "Winner"
                                ? "bg-amber-100 text-amber-800"
                                : evt.status === "Runner"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-emerald-100 text-emerald-800"
                            }`}
                          >
                            {evt.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block text-xs font-bold text-gray-600 hover:text-[#563ed9] underline"
          >
            ← Back to MI Club Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function StudentProfilePage() {
  return (
    <Suspense fallback={<div className="text-center p-12">Loading profile...</div>}>
      <StudentProfileContent />
    </Suspense>
  );
}
