import { TitleBox } from "@/components/title-box";
import AppLayout from "@/layouts/app-layout";
import { formatCurrency } from "@/lib/format-currency";
import { SharedData } from "@/types";
import { Head, usePage } from "@inertiajs/react";

type PlayerBadge = {
  id: number
  player_id: number
  badge_code: string;
  slot: number
}

interface CurrentProfilePageProps {
  badgesInUse: PlayerBadge[]
  allBadges: PlayerBadge[]
}

export default function CurrentProfilePage({allBadges, badgesInUse}: CurrentProfilePageProps) {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <AppLayout>
        <Head title="Seu Perfil" />

        <div className="mb-2">
          <TitleBox
            image={"https://www.habboassets.com/assets/badges/TC930.gif"}
            imageIsBadge
            title={"Seu Perfil"}
            description={"Aqui você visualiza todas suas informações, para alterar dados vá para /users/me/settings."}
          />
        </div>
        <div className="relative flex flex-col items-center bg-white shadow-md">
          <div className="relative flex h-[120px] w-full items-end justify-end overflow-hidden bg-[#ffffff]">
            <div className="h-full w-full">
              <img
                src="https://www.habboassets.com/assets/images/web-promos/lpromo_Trippy_May25.png"
                className="mt-0 ml-0 w-full rounded-t-md object-fill"
                style={{
                  height: "initial",
                }}
                alt="Profile Background"
              />
            </div>
            <div className="absolute m-4 flex items-center space-x-2">
              {badgesInUse.map((badge, i) => (
 <div key={badge.badge_code} className="rounded-full bg-white p-1 duration-300 hover:scale-105">
                <img src={`https://swf.hapixel.net/c_images/album1584/${badge.badge_code}.gif`} />
              </div>
              ))}
             
            </div>
          </div>

          <div className="mt-2 flex w-full flex-col justify-between bg-white pb-2">
            <div className="flex justify-between">
              <div className="mx-5 flex items-center gap-x-2">
                <div
                  className="h-[100px] w-[85px] overflow-hidden rounded-md bg-zinc-100"
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    marginInline: "-7px",
                  }}
                >
                  <div className="relative -top-7 -left-4">
                    <img
                      className="max-w-xl"
                      src={`https://www.habblet.city/habblet-imaging/avatarimage?figure=${auth.user.figure}&direction=2&head_direction=3&gesture=sml&action=wav`}
                      alt=""
                    />
                  </div>
                </div>

                <div className="mx-2 flex w-full flex-col">
                  <h1 className="flex items-center gap-x-1 text-xl font-semibold text-zinc-800">
                    <img src="https://hubbe.biz/build/assets/icone-username-dsiV4qOb.png" /> {auth.user.username}
                  </h1>
                  <p className="text-sm text-zinc-400">@{auth.user.username}</p>

                  <p className="text-sm">{auth.user.motto}</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 p-2">
                <div className="flex items-center gap-x-1 rounded-md bg-zinc-50 p-2">
                  {" "}
                  <img src="/assets/images/currencies/credits.gif" alt="duckets" />
                  {formatCurrency(auth.user.credits)}
                </div>
                <div className="flex items-center gap-x-1 rounded-md bg-zinc-50 p-2">
                  <img src="/assets/images/currencies/diamonds.png" alt="duckets" />
                  {formatCurrency(auth.user.vip_points)}
                </div>
                <div className="flex items-center gap-x-1 rounded-md bg-zinc-50 p-2">
                  <img src="/assets/images/currencies/duckets.png" alt="diamonds" />
                  {formatCurrency(auth.user.activity_points)}
                </div>
                <div className="flex items-center gap-x-1 rounded-md bg-zinc-50 p-2">
                  <img src="https://dev.hapixel.net/nitro-assets/images/wallet/102.png" alt="diamonds" />
                  {formatCurrency(auth.user.seasonal_points)}
                </div>
              </div>
            </div>

            <div className="mx-2.5 mt-6 mb-2.5 flex w-[782px] flex-col">
              <div className="mx-7 mb-3 w-64 rounded-md bg-zinc-100 p-1">
                <h1 className="flex items-center gap-x-1 text-sm">
                  <img className="h-8 w-8" src="https://www.habboassets.com/assets/badges/TM023.gif" /> Emblemas de{" "}
                  <span className="font-black">{auth.user.username}</span>
                </h1>
              </div>

              <div className="mb-[8px] flex min-h-[160px] flex-row flex-wrap items-start justify-center gap-[7px] overflow-hidden">
                {allBadges.map((badge, i) => (
                  <div key={badge.badge_code} className="flex items-center justify-center rounded-full bg-zinc-100 p-2">
                    <img src={`https://swf.hapixel.net/c_images/album1584/${badge.badge_code}.gif`} alt=""></img>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
