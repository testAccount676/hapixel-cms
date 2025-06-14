import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function Footer() {
const [emulatorInfo, setEmulatorInfo] = useState(false);

  function showEmulatorInfo() {
    setEmulatorInfo(!emulatorInfo)
  }

  return (
    <>
     <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-8 flex h-24 items-center justify-center bg-stone-900 bg-[url('/assets/images/pattern.png')] p-2 text-xs text-white"
    >
      <div className="m-1 flex flex-initial items-center justify-center rounded-md bg-stone-800 p-2">
        <img src={"/assets/images/icon_hapixel2.png"} alt="Icon Hapixel" width={36} height={36} className="object-cover" />
      </div>
      <div className="flex flex-grow flex-col justify-center gap-2 text-center">
        <div>
          <p className="font-semibold text-stone-200">
            Hapixel.net © 2009 - {new Date().getFullYear()}. Powered by{" "}
            <span onClick={showEmulatorInfo} className="cursor-pointer hover:underline">
              Whyvern Server
            </span>
          </p>
        </div>
        <div>
          <p className="text-stone-100">
            <a href="#">Ajuda</a> | <a href="#">Hapixel Etiqueta</a> | <a href="#">Termos e Condições de Uso</a> |{" "}
            <a href="#">Política de privacidade</a> | <a href="#">Política de Cookies Server</a>
          </p>
        </div>
      </div>
    </motion.footer>

    <Dialog open={emulatorInfo} onOpenChange={setEmulatorInfo}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Curioso?</DialogTitle>
          </DialogHeader>
          <div>
            <p>
             Curiosidade é a resposta para mais curiosidade, bobão.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
   
  );
}
