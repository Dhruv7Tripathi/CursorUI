import FluidCubeGridPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fluid Cube Grid | OrbitUI",
  description:
    "OrbitUI's Fluid Cube Grid is an interactive React Three Fiber component featuring a responsive 3D voxel grid that dynamically reacts to cursor movement with fluid physics, smooth transitions, and high-performance WebGL rendering. Perfect for hero sections, portfolios, and modern landing pages.",
  keywords: [
    "Fluid Cube Grid",
    "React Three Fiber",
    "Three.js",
    "WebGL",
    "Voxel Grid",
    "Interactive 3D Grid",
    "Mouse Interaction",
    "Canvas Animation",
    "Instanced Mesh",
    "React Animation",
    "Three.js Components",
    "OrbitUI",
    "Landing Page Animation",
    "Portfolio Hero",
    "Creative UI",
    "Frontend Components",
    "Modern Hero Section",
    "Interactive Background",
    "Copy Paste UI Components",
    "Next.js Components",
    "Open Source UI Components",
    "Developer Tools",
  ],
  authors: [
    {
      name: "Dhruv Tripathi",
      url: "https://dhruvtripathi.in",
    },
  ],
  creator: "Dhruv Tripathi",
  publisher: "Dhruv Tripathi",
  openGraph: {
    title:
      "Fluid Cube Grid — Interactive React Three Fiber Component | OrbitUI",
    description:
      "Build immersive WebGL experiences with OrbitUI's Fluid Cube Grid. A responsive 3D voxel grid powered by React Three Fiber and Three.js with fluid cursor interactions.",
    url: "https://orbitui.in/components/fluid-cube-grid",
    siteName: "OrbitUI",
    images: [
      {
        url: "https://orbitui.in/ogimage-orbitui.png",
        width: 1200,
        height: 630,
        alt: "Fluid Cube Grid - OrbitUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fluid Cube Grid — Interactive React Three Fiber Component | OrbitUI",
    description:
      "Create stunning interactive 3D hero sections using React Three Fiber, Three.js, and OrbitUI.",
    images: ["https://orbitui.in/ogimage-orbitui.png"],
    site: "@dhruv7tripathi",
    creator: "@dhruv7tripathi",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <FluidCubeGridPreview />;
};

export default Page;