import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[url('/assets/images/hapixel-site-bg.png')]">
        <Header />
        <div className="flex items-center justify-center bg-[url('/assets/images/bg.gif')]">
          <a href="https://hapixel.net/">
            <img className="image-pixelated duration-300 hover:scale-105" src="/assets/images/logo.gif" alt="logo" />
          </a>
        </div>
        <Navbar />
        <main className="mx-auto max-w-7xl flex-1 px-4 py-2">{children}</main>
        <Footer />
        <Toaster richColors={false} />
      </div>
    </>
  );
}
