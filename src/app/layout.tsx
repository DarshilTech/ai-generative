"use client";

import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from 'react';
import { useRouter } from "next/navigation";
import { userValidate } from "./auth/userValidate";
import LoginPage from "./auth/login/page";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from 'react-toastify';
import Sidebar from './sidebar/Sidebar';
import MenuBarMobile from './sidebar/MenuBarMobile';
import React, { useState, useEffect } from 'react'
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
      <body className={inter.className} suppressHydrationWarning={true}>
        <Toaster position="top-center" />
        <ToastContainer />
        <div className="flex us:flex-col md:flex-row">
          <div className="md:block w-max">
            {/* if you want to add navbar then please add here it component */}
            <MenuBarMobile setter={setShowSidebar} />
            <Sidebar show={showSidebar} setter={setShowSidebar} />
          </div>
          <div className="w-full us:mt-[60px] md:mt-0 ">
            {/* {isLoggedIn ? children : <LoginPage />} */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
