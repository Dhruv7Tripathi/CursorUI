import { Metadata } from 'next';
import InstallationPageClient from '@/components/docs/installation';

// Next.js Server-Side SEO Metadata
export const metadata: Metadata = {
  title: 'Installation | OrbitUI - Next.js & Tailwind Setup',
  description: 'Step-by-step guide to installing Next.js and configuring Tailwind CSS for OrbitUI components.',
  openGraph: {
    title: 'Installation | OrbitUI',
    description: 'Learn how to set up Next.js, configure your template paths, and integrate Tailwind CSS in minutes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Installation | OrbitUI',
    description: 'Learn how to set up Next.js, configure your template paths, and integrate Tailwind CSS in minutes.',
  }
};

export default function InstallationPage() {
  return <InstallationPageClient />;
}