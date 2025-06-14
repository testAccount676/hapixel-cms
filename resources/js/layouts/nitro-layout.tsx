// import { Button } from "@/components/ui/button";
import { Head } from "@inertiajs/react";
// import { FullscreenIcon, Home } from "lucide-react";
import Radio from "@/components/client/radio";
import React from "react";
// import { AiOutlineReload } from "react-icons/ai";

export default function NitroLayout({ children }: { children: React.ReactNode }) {
  // function redirectToHome() {
  //   window.location.href = "/users/me";
  // }
  //
  // async function toggleFullscreen() {
  //   if (document.fullscreenElement) {
  //     await document.exitFullscreen();
  //     return;
  //   }
  //
  //   await document.documentElement.requestFullscreen();
  // }
  //
  // function reloadClient() {
  //   window.location.href = "/play";
  // }

  return (
    <>
      <Head title="Jogar"></Head>
      <div className="absolute top-4 left-4 z-10 flex gap-x-2 text-xs">
        <Radio />
      </div>
      {children}
    </>
  );
}
