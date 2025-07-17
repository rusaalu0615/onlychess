import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Only Chess Academy",
  description: "Created with v0",
  generator: "v0.dev",
  icons: {
    icon: "/logo.png", // this becomes the favicon
  },
  openGraph: {
    title: "Only Chess Academy",
    description: "Chess coaching and more",
    images: ["/logo.png"], // social preview
  },
  twitter: {
    card: "summary_large_image",
    title: "Only Chess Academy",
    images: ["/logo.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
