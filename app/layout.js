import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SREE-2024",
  description:
    "SREE2024 is a International conference. Sustainable Research in Energy and the Environment (SREE2024) conference is a pivotal event that catalyzes collaboration and knowledge exchange to pave the way for a greener and more sustainable world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mt-11">{children}</body>
    </html>
  );
}
