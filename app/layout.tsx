import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import MouseCursor from "@/app/components/mouse-cursor";
import { CursorProvider } from "@/app/components/cursor-context";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Frederick Chen (@ToothlessHaveBun)",
    template: "%s | Frederick's Portfolio",
  },
  description: "A student based in China, currently studying algorithms and web development.",
  openGraph: {
    title: "Frederick Chen (@ToothlessHaveBun)",
    description: "A student based in China, currently studying algorithms and web development.",
    url: "https://fredcss.dev",
    siteName: "Frederick's Portfolio",
    images: [
      {
        url: "https://fredcss.dev/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "FrederickAsYou",
    card: "summary_large_image",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black no-scrollbar ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <CursorProvider>
          <MouseCursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
