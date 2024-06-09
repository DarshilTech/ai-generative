"use client";

import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Prefooter from "@/components/Prefooter";
import { useRouter } from "next/navigation";
import { userValidate } from "./auth/userValidate";
import LoginPage from "./auth/login/page";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from 'react-toastify';
import { SpeedInsights } from "@vercel/speed-insights/next"
import React, { useState, useEffect } from 'react'
import Loader from "./loader";
// import Alpine from 'alpinejs';

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "DAI",
  description: "generative ai",
  icons: {
    icon: ["/1.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSidebar, setShowSidebar] = useState(false);
  const isLoggedIn: boolean = userValidate();
  const router: any = useRouter();
  console.log(isLoggedIn);

  if (!isLoggedIn) {
    // router.push('/auth/login');
  }
  return (
    <html lang="en">
      <meta name="robots" content="follow, index" />
      <body className={inter.className} suppressHydrationWarning={true}>
        <Toaster position="top-center" />
        <ToastContainer />
        <SpeedInsights />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow mt-[64px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
