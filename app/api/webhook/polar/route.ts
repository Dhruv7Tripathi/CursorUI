import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const raw = await req.text();

    console.log("RAW POLAR BODY:", raw);

    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      console.error("Could not parse Polar payload:", raw);
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const eventType = body.type;
    const email =
      body.data?.customer?.email ||
      body.data?.user?.email ||
      body.data?.customer_email;

    if (!email) {
      console.error("Missing email in Polar payload:", body);
      return NextResponse.json({ error: "No email in payload" }, { status: 400 });
    }

    if (eventType === "order.paid") {
      await prisma.user.updateMany({
        where: { email },
        data: { isPremium: true },
      });
      console.log(`✅ Pro access granted for ${email}`);
    }

    if (
      eventType === "order.refunded" ||
      eventType === "refund.created" ||
      eventType === "refund.updated" ||
      eventType === "subscription.revoked" ||
      eventType === "subscription.canceled"
    ) {
      await prisma.user.updateMany({
        where: { email },
        data: { isPremium: false },
      });
      console.log(`Pro access revoked for ${email} due to ${eventType}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error("Polar webhook error:", err);
    return NextResponse.json(
      { error: "Internal webhook error" },
      { status: 500 }
    );
  }
}