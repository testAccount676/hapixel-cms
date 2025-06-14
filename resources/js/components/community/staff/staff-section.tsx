import { motion } from "framer-motion";
import React from "react";

interface StaffSectionProps {
  badge?: string | null;
  color?: string;
  title: string;
  underTitle?: string;
  oneStaffInThisRole: boolean;
  children: React.ReactNode;
}

export default function StaffSection({ badge = "", oneStaffInThisRole, color = "", title, underTitle, children }: StaffSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex max-w-[450px] ${oneStaffInThisRole ? "h-52" : "h-auto"} flex-col gap-y-4 overflow-hidden rounded bg-white pb-3 shadow dark:bg-gray-800`}
    >
      <motion.div
        animate={{
          background: [
            "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
            "linear-gradient(to right, #1e3a8a, #3b82f6, #60a5fa)",
            "linear-gradient(to right, #3b82f6, #2563eb, #1e3a8a)",
            "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex gap-x-2 border-b p-3 text-white dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="flex max-h-[50px] min-h-[50px] max-w-[50px] min-w-[50px] items-center justify-center rounded-full bg-gray-50">
          <img
            src={`https://swf.hapixel.net/c_images/album1584/${badge}.gif`}
            onError={(e) => {
              e.currentTarget.src = "https://www.habboassets.com/assets/badges/PTE43.gif";
            }}
            alt="Badge"
          />
        </div>

        <div className="flex flex-col justify-center text-sm">
          <p className="font-semibold dark:text-gray-300">{title}</p>
          {underTitle && <p className="text-zinc-200 dark:text-gray-500">{underTitle}</p>}
        </div>
      </motion.div>

      <section className="px-3">{children}</section>
    </motion.div>
  );
}
