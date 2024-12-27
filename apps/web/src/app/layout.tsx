import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opentail",
  description: "opentail - Open-source REST API logging and monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950">
        {children}
      </body>
    </html>
  );
}
