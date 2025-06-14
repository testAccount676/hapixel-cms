import { TitleBox } from "@/components/title-box";
import { User } from "@/types";
import { motion } from "framer-motion";
import { Joystick } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";

interface UserBannerProps {
  user: User;
}

export default function UserBanner({ user }: UserBannerProps) {
  function convertEpochUnix(unix: number | undefined) {
    if (!unix) return;

    const date = new Date(unix * 1000);
    return date.toLocaleDateString("pt-BR");
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="mb-2 w-full">
          <TitleBox
            small
            image={"https://www.habboassets.com/assets/badges/NB093.gif"}
            title={`Olá ${user.username}, bem-vindo de volta!`}
            description={"Já verificou seu bônus de hoje?"}
            imageIsBadge={true}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-[160px] w-xl overflow-hidden rounded-md bg-[url('/assets/images/user-bg.png')] shadow-lg"
        >
          <div className="flex h-full w-full items-center justify-between bg-black/20">
            <a>
              <img
                src={`https://www.habblet.city/habblet-imaging/avatarimage?figure=${user.figure}&direction=2&head_direction=3&gesture=sml&action=wav&size=l`}
                alt={"Guest"}
                className="image-pixelated relative top-7 drop-shadow transition-all duration-300 hover:scale-105"
              />
            </a>

            <div className="flex flex-col gap-y-1 text-center text-zinc-100">
              <h1 className="font-md rounded-sm bg-black/20 px-2 py-1 font-semibold">{user.username}</h1>
              <p className="text-semibold rounded-sm bg-black/20 px-1 py-1 text-xs">
                Último login: <span>{user.last_online === 0 ? "Vamos jogar!" : convertEpochUnix(user.last_online)}</span>
              </p>

              <img
                className="image-rendering-pixelated w-10"
                src={`/assets/images/${user.online === "1" ? "online" : "offline"}.gif`}
                alt={"Status"}
              />
            </div>

            <div className="flex flex-1 flex-col items-center justify-end gap-y-2">
              <a href="/play">
                <button className="text-md bg-opacity-90 hover:bg-opacity-100 relative flex w-32 cursor-pointer items-center justify-center gap-x-1 rounded-md border-2 border-gray-300 bg-white bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 px-3 py-2 text-center font-semibold text-zinc-100 uppercase transition duration-300 ease-in-out dark:bg-gray-900 dark:text-white">
                  Jogar <Joystick size={18} />
                </button>
              </a>

              <a href="https://discord.gg/K7kx8EGA" target="_blank">
                <button className="text-md bg-gradient bg-opacity-90 hover:bg-opacity-100 relative flex w-32 cursor-pointer items-center justify-center gap-x-1 rounded-md border-2 border-indigo-500 bg-gradient-to-b from-indigo-400 via-indigo-500 to-indigo-600 px-3 py-2 font-semibold text-gray-300 uppercase transition duration-300 ease-in-out dark:bg-gray-900 dark:text-white">
                  Discord <FaDiscord size={18} />
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
