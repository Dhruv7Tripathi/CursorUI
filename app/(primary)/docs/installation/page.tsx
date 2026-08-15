import { Metadata } from 'next';
import InstallationPageClient from '@/components/docs/installation';

// Next.js Server-Side SEO Metadata
export const metadata: Metadata = {
  title: 'Installation | CursorXUI - Next.js & Tailwind Setup',
  description: 'Step-by-step guide to installing Next.js and configuring Tailwind CSS for CursorXUI components.',
  openGraph: {
    title: 'Installation | CursorXUI - Next.js & Tailwind Setup',
    description: 'Learn how to set up Next.js, configure your template paths, and integrate Tailwind CSS in minutes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Installation | CursorXUI - Next.js & Tailwind Setup',
    description: 'Learn how to set up Next.js, configure your template paths, and integrate Tailwind CSS in minutes.',
  }
};

export default function InstallationPage() {
  return <InstallationPageClient />;
}