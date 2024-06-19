import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "../components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abdelahi Gym Store",
  description: "Welcome to my sites!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="en">
      <SessionProvider>
        <body className="min-h-screen bg-[#e9e7e3]">
          <Navbar />
          <main className="my-8">{children}</main>
          <Toaster />
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
