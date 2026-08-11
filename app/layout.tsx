import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "ETHKolkata — Conference & Hackathon 2026",
  description:
    "ETHKolkata brings builders, researchers, and creators together in Calcutta to advance Ethereum and the decentralized web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
