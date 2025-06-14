import MaintenanceLayout from "@/layouts/maintenance-layout";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
// import {Stars} from "@react-three/drei"
// import {Canvas} from "@react-three/fiber"
import MaintenanceLoginDialog from "@/components/dialogs/maintenance-login-dialog";
import { SharedData } from "@/types";
import { usePage } from "@inertiajs/react";
import { toast } from "sonner";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function MaintenancePage({ message, status }: { message: string; status: string }) {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 1px 2px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const { flash } = usePage<SharedData>().props;

  useEffect(() => {
    if (flash?.message) {
      toast.error(flash.message, {
        richColors: true,
      });
    }
  }, [flash]);

  return (
    <>
      <MaintenanceLayout>
        <motion.section
          className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
          style={{
            backgroundImage,
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative z-10 flex flex-col items-center"
          >
            <span className="mb-1.5 inline-block rounded-full border border-gray-700 bg-gray-600/50 px-3 py-1.5 text-xs">Status: {status}</span>

            <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl leading-tight font-medium text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
              Manutenção
            </h1>

            <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">{message}</p>

            <MaintenanceLoginDialog border={border} boxShadow={boxShadow} />
          </motion.div>

          <div className="absolute inset-0 z-0">
            {/*<Canvas>*/}
            {/*  <Stars radius={20} count={1500} factor={4} fade speed={2}/>*/}
            {/*</Canvas>*/}
            <div className="flex min-h-screen flex-col bg-[url('/assets/images/hapixel-site-bg.png')]"></div>
          </div>
        </motion.section>
      </MaintenanceLayout>
    </>
  );
}
