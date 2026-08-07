import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/db";
import { authOptions } from "@/lib/authoptions";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { isPremium: true },
    });

    return NextResponse.json({ isPremium: user?.isPremium ?? false });
  } catch (err) {
    console.error("Verify payment error:", err);
    return NextResponse.json(
      { error: "Could not verify payment" },
      { status: 500 }
    );
  }
}