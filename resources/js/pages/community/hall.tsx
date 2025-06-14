import { TitleBox } from "@/components/title-box";
import AppLayout from "@/layouts/app-layout";
import { User } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";

interface HallPageProps {
  topCredits: User[];
  topDiamonds: User[];
  topDuckets: User[];
}

export default function Hall({ topCredits, topDiamonds, topDuckets }: HallPageProps) {

  return (
    <>
      <AppLayout>
        <Head title="Hall da Fama" />

        <div className="mb-2">
          <TitleBox
            image={"https://www.habboassets.com/assets/badges/NB103.gif"}
            imageIsBadge
            title={"Hall da Fama"}
            description={"Estes são os usuários mais famosos do servidor!"}
          />
        </div>
        <div className="flex gap-x-4">
          {/* RANKING BOX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex max-w-[358px] flex-row rounded-md bg-white shadow-md"
          >
            {/* RANKING LIST */}
            <div className="flex flex-col">
              {/* RANKING LIST BOX */}
              {topCredits.slice(1, 5).map((user, index) => {
                let medal;

                if (index === 0) {
                  medal = "medal-silver";
                } else if (index === 1) {
                  medal = "medal-copper";
                } else {
                  medal = "medal-default";
                }

                return (
                  <div key={user.id} className="max-w-[220px] border-b">
                    {/* RANKING LIST PERSON */}
                    <div
                      className="flex min-h-[64px] min-w-[216px] items-center justify-between gap-[8px]"
                      style={{
                        padding: "8px 12px",
                      }}
                    >
                      <div className="flex flex-row items-center">
                        {/* RANKING LIST PERSON AVATAR */}
                        <div className="relative h-[50px] w-[50px] overflow-hidden">
                          {/* RANKING LIST PERSON AVATAR HEAD */}
                          <div
                            className="absolute top-[-30px] left-[-20px] h-[110px] w-[64px]"
                            style={{
                              background: `url(https://www.habblet.city/habblet-imaging/avatarimage?figure=${user.figure}&head_direction=2&headonly=1)`,
                            }}
                          ></div>
                        </div>

                        {/* RANKING LIST PERSON INFO */}
                        <div className="flex flex-col">
                          <h2 className="text-sm text-zinc-800">{user.username}</h2>
                          <span className="text-sm text-[#E0B309]">{user.credits}</span>
                        </div>
                      </div>

                      <img src={`/assets/images/${medal}.png`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RANKING BEST */}
            {topCredits[0] && (
              <div
                className="flex min-h-[256px] w-[142px] flex-col items-center justify-center gap-[14px] rounded-md bg-[#E0B309] text-center text-sm text-zinc-50"
                style={{
                  paddingBlock: "9px",
                }}
              >
                {/* RANKING BEST TITLE */}
                <div className="flex flex-col items-center gap-[10px]">
                  <img src="/assets/images/currencies/credits.gif" />
                  <div>TOP 5 Moedas</div>
                </div>

                {/* RANKING BEST PERSON */}
                <div className="mb-2 flex flex-col items-center">
                  <div>{topCredits[0].username}</div>
                  <div>{topCredits[0].credits}</div>
                </div>

                <div className="relative flex h-[114px] w-[60px] items-end justify-center overflow-hidden">
                  <div
                    className="h-[110px] w-[66px]"
                    style={{
                      backgroundImage: `url(https://www.habblet.city/habblet-imaging/avatarimage?figure=${topCredits[0].figure}&direction=2&head_direction=2&action=wave)`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "bottom center",
                    }}
                  />
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex max-w-[358px] flex-row rounded-md bg-white shadow-md"
          >
            {/* RANKING LIST */}
            <div className="flex flex-col">
              {/* RANKING LIST BOX */}
              {topDuckets.slice(1, 5).map((user, index) => {
                let medal;

                if (index === 0) {
                  medal = "medal-silver";
                } else if (index === 1) {
                  medal = "medal-copper";
                } else {
                  medal = "medal-default";
                }

                return (
                  <div key={user.id} className="max-w-[220px] border-b">
                    {/* RANKING LIST PERSON */}
                    <div
                      className="flex min-h-[64px] min-w-[216px] items-center justify-between gap-[8px]"
                      style={{
                        padding: "8px 12px",
                      }}
                    >
                      <div className="flex flex-row items-center">
                        {/* RANKING LIST PERSON AVATAR */}
                        <div className="relative h-[50px] w-[50px] overflow-hidden">
                          {/* RANKING LIST PERSON AVATAR HEAD */}
                          <div
                            className="absolute top-[-30px] left-[-20px] h-[110px] w-[64px]"
                            style={{
                              background: `url(https://www.habblet.city/habblet-imaging/avatarimage?figure=${user.figure}&head_direction=2&headonly=1)`,
                            }}
                          ></div>
                        </div>

                        {/* RANKING LIST PERSON INFO */}
                        <div className="flex flex-col">
                          <h2 className="text-sm text-zinc-800">{user.username}</h2>
                          <span className="text-sm text-[#E0B309]">{user.activity_points}</span>
                        </div>
                      </div>

                      <img src={`/assets/images/${medal}.png`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RANKING BEST */}
            {topDuckets[0] && (
              <div
                className="flex min-h-[256px] w-[142px] flex-col items-center justify-center gap-[14px] rounded-md bg-[#731576] text-center text-sm text-zinc-50"
                style={{
                  paddingBlock: "9px",
                }}
              >
                {/* RANKING BEST TITLE */}
                <div className="flex flex-col items-center gap-[10px]">
                  <img src="/assets/images/currencies/duckets.png" />
                  <div>TOP 5 Duckets</div>
                </div>

                {/* RANKING BEST PERSON */}
                <div className="mb-2 flex flex-col items-center">
                  <div>{topDuckets[0].username}</div>
                  <div>{topDuckets[0].activity_points}</div>
                </div>

                <div className="relative flex h-[114px] w-[60px] items-end justify-center overflow-hidden">
                  <div
                    className="h-[110px] w-[66px]"
                    style={{
                      backgroundImage: `url(https://www.habblet.city/habblet-imaging/avatarimage?figure=${topDuckets[0].figure}&direction=2&head_direction=2&action=wave)`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "bottom center",
                    }}
                  />
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex max-w-[358px] flex-row rounded-md bg-white shadow-md"
          >
            {/* RANKING LIST */}
            <div className="flex flex-col">
              {/* RANKING LIST BOX */}
              {topDiamonds.slice(1, 5).map((user, index) => {
                let medal;

                if (index === 0) {
                  medal = "medal-silver";
                } else if (index === 1) {
                  medal = "medal-copper";
                } else {
                  medal = "medal-default";
                }

                console.log(index);

                return (
                  <div key={user.id} className="max-w-[220px] border-b">
                    {/* RANKING LIST PERSON */}
                    <div
                      className="flex min-h-[64px] min-w-[216px] items-center justify-between gap-[8px]"
                      style={{
                        padding: "8px 12px",
                      }}
                    >
                      <div className="flex flex-row items-center">
                        {/* RANKING LIST PERSON AVATAR */}
                        <div className="relative h-[50px] w-[50px] overflow-hidden">
                          {/* RANKING LIST PERSON AVATAR HEAD */}
                          <div
                            className="absolute top-[-30px] left-[-20px] h-[110px] w-[64px]"
                            style={{
                              background: `url(https://www.habblet.city/habblet-imaging/avatarimage?figure=${user.figure}&head_direction=2&headonly=1)`,
                            }}
                          ></div>
                        </div>

                        {/* RANKING LIST PERSON INFO */}
                        <div className="flex flex-col">
                          <h2 className="text-sm text-zinc-800">{user.username}</h2>
                          <span className="text-sm text-[#E0B309]">{user.vip_points}</span>
                        </div>
                      </div>

                      <img src={`/assets/images/${medal}.png`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RANKING BEST */}
            {topDiamonds[0] && (
              <div
                className="flex min-h-[256px] w-[142px] flex-col items-center justify-center gap-[14px] rounded-md bg-[#1ca4d9] text-center text-sm text-zinc-50"
                style={{
                  paddingBlock: "9px",
                }}
              >
                {/* RANKING BEST TITLE */}
                <div className="flex flex-col items-center gap-[10px]">
                  <img src="/assets/images/currencies/diamonds.png" />
                  <div>TOP 5 Diamantes</div>
                </div>

                {/* RANKING BEST PERSON */}
                <div className="mb-2 flex flex-col items-center">
                  <div>{topDiamonds[0].username}</div>
                  <div>{topDiamonds[0].vip_points}</div>
                </div>

                <div className="relative flex h-[114px] w-[60px] items-end justify-center overflow-hidden">
                  <div
                    className="h-[110px] w-[66px]"
                    style={{
                      backgroundImage: `url(https://www.habblet.city/habblet-imaging/avatarimage?figure=${topDiamonds[0].figure}&direction=2&head_direction=2&action=wave)`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "bottom center",
                    }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </AppLayout>
    </>
  );
}
