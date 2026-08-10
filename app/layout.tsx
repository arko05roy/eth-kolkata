import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ETHWarsaw - Disruptive tech community",
  description: "ETHWarsaw is the community for hands-on learning, collabs, and bold ideas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
