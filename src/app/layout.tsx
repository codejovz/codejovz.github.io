import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorge Varela Zamora",
  description: "Software Developer Portfolio",
  icons: {
    icon: "/logoFavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body">
        {children}
      </body>
    </html>
  );
}
