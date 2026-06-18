import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Financial Era - UI Clone",
  description: "A knowledge platform for lifelong learners, investors and builders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        {children}
      </body>
    </html>
  );
}
