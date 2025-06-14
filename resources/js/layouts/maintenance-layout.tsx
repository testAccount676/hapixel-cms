import { Toaster } from "@/components/ui/sonner";
import { Head } from "@inertiajs/react";
import React from "react";

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head title={"Manutenção"}></Head>
      <Toaster richColors />
      {children}
    </>
  );
}
