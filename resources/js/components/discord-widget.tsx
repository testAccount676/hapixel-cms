import { motion } from "framer-motion";
import { Forward } from "lucide-react";
import { useEffect, useState } from "react";
import { TitleBox } from "./title-box";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

const GUILD_ID = "1311852006511476806";
const DISCORD_ENDPOINT = `https://discordapp.com/api/guilds/${GUILD_ID}/widget.json`;

type DiscordWidgetData = {
  id: string;
  name: string;
  instant_invite: string | null;
  channels: {
    id: string;
    name: string;
    position: number;
  }[];
  members: {
    id: string;
    username: string;
    discriminator: string;
    avatar: string | null;
    status: "online" | "idle" | "dnd" | "offline";
    avatar_url: string;
    game?: {
      name: string;
    };
  }[];
  presence_count: number;
};

export default function DiscordWidget() {
  const [guildData, setGuildData] = useState<DiscordWidgetData>();

  function fetchDiscordGuild() {
    fetch(DISCORD_ENDPOINT, {
      method: "GET",
      mode: "cors",
      cache: "reload",
    }).then(function (response) {
      if (response.status != 200) {
        console.error("Discord widget cant connect to discord (" + response.status + ")");
        return;
      }

      response.json().then((data: DiscordWidgetData) => {
        setGuildData(data);
      });
    });
  }

  useEffect(() => {
    fetchDiscordGuild();
  }, []);

  return (
    <div className="w-96">
      <div className="mb-2 w-full">
        <TitleBox
          small
          title={"Discord"}
          image={"https://www.svgrepo.com/show/353655/discord-icon.svg"}
          imageIsBadge={true}
          description={"Faça parte do nosso servidor!"}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-[2.5rem] rounded-md border-b-2 border-gray-300 bg-white p-1.5 shadow dark:border-slate-800 dark:bg-slate-950"
      >
        <div>
          <div className="mb-2 flex h-10 w-full items-center justify-between border-b-2 border-indigo-500 p-2 text-white">
            <a
              href={guildData?.instant_invite ? guildData.instant_invite : "#"}
              target="_blank"
              className="flex flex-1 items-center gap-x-2 text-sm font-semibold text-indigo-500 underline-offset-4"
            >
              <Forward className="h-5 w-5" />
              <span>{guildData?.name}</span>
            </a>

            <div className="flex items-center gap-1">
              <i className="fa-solid fa-circle fa-beat-fade fa-2xs text-green-500"></i>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-200">{guildData?.presence_count}</span>
            </div>
          </div>
          <ScrollArea className="h-96">
            {guildData?.members.map((member) => {
              const statusColor = {
                online: "bg-green-500",
                idle: "bg-yellow-500",
                dnd: "bg-red-500",
                offline: "bg-gray-300",
              }[member.status];

              return (
                <div key={member.id} className="flex max-h-[15rem] flex-col overflow-y-auto">
                  <div className="relative flex h-11 items-center gap-2 p-1 odd:bg-gray-100 dark:odd:bg-slate-900">
                    <div
                      className="rendering-quality h-8 w-8 rounded-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${member.avatar_url}')` }}
                    ></div>
                    <div className="flex flex-1 items-center justify-start gap-2 truncate">
                      <div className={`h-3 w-3 rounded-full border-2 ${statusColor} dark:border-gray-800`} />
                      <div className="flex flex-col truncate">
                        <span className="text-sm font-medium dark:text-slate-200">{member.username}</span>

                        <span className="text-xs text-slate-400 dark:text-slate-600">{member.game ? member.game.name : null}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollArea>
          <Button
            onClick={() => {
              window.location.href = guildData?.instant_invite ? guildData.instant_invite : "#";
            }}
            className="mt-2 cursor-pointer border-indigo-700 bg-indigo-500 py-2 text-white shadow-indigo-600/75 hover:bg-indigo-400 dark:shadow-indigo-700/75"
          >
            Entrar no servidor
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
