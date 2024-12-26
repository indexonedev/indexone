import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IndexOne",
  description: "IndexOne - Open source REST API logging and monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        {children}
      </body>
    </html>
  );
}
