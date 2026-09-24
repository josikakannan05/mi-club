import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const { name, register_number, message } = await request.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    await db.execute(
      `INSERT INTO feedback (name, register_number, message)
       VALUES (?, ?, ?)`,
      [name, register_number || null, message]
    );

    return NextResponse.json({
      success: true,
      message: "Feedback submitted successfully!",
    });
  } catch (error) {
    console.error("Database Error:", error);

    return NextResponse.json(
      { error: "Failed to submit feedback" },
      { status: 500 }
    );
  }
}