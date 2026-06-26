import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focus Sentry — Habit and focus tracker",
  description:
    "Protect your focus with habit tracking, session timing, and daily progress summaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
