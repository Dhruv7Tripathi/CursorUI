import { NextResponse } from "next/server";
import { polar } from "@/lib/polar";
import { getServerSession } from "next-auth";

export async function POST() {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const checkout = await polar.checkouts.create({
      products: [process.env.POLAR_PRODUCT_ID!],
      customerEmail: session.user.email,
      externalCustomerId: session.user.email,
      successUrl: `${process.env.NEXT_PUBLIC_API_URL}/checkout/success`
    });

    return NextResponse.json({ url: checkout.url });
  } catch (err) {
    console.error("Polar checkout create error:", err);
    return NextResponse.json(
      { error: "Could not create checkout session" },
      { status: 500 }
    );
  }
}