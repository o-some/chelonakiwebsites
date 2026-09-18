import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORMWAHL — Dein Design. Deine Website.",
  description: "Wähle dein Website-Design, passe deine Inhalte an und lade deine eigene responsive Website herunter.",
  icons: {
    icon: "/chelonakiwebsites/favicon.svg",
    shortcut: "/chelonakiwebsites/brand/favicon.ico",
    apple: "/chelonakiwebsites/brand/apple-touch.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
