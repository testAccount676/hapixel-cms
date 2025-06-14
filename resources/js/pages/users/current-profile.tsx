import { TitleBox } from "@/components/title-box";
import AppLayout from "@/layouts/app-layout";
import { SharedData } from "@/types";
import { Head, usePage } from "@inertiajs/react";

export default function CurrentProfilePage() {
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
            description={"Aqui você visualiza todas suas informações."}
          />
        </div>
        <div className="relative flex flex-col items-center bg-white shadow-md">
          <div className="flex h-[170px] w-full items-end justify-end overflow-hidden bg-[#ffffff]">
            <div className="h-full w-full">
              <img
                src="https://www.habboassets.com/assets/images/web-promos/lpromo_tradingevent_feb25.png"
                className="mt-0 ml-0 w-full rounded-t-md object-fill"
                style={{
                  height: "initial",
                }}
                alt="Profile Background"
              />
            </div>
          </div>

          <div className="flex w-full bg-white p-2">
            <div className="absolute top-28 left-5 h-[115px] w-[115px] overflow-hidden rounded-full border-2 bg-zinc-100">
              <div
                className="h-full w-full scale-[215%] bg-center bg-no-repeat"
                style={{
                  imageRendering: "pixelated",
                  backgroundSize: "contain",
                  backgroundImage: `url(https://www.habblet.city/habblet-imaging/avatarimage?figure=${auth.user.figure}&head_direction=2)`,
                }}
              ></div>
            </div>
            <div className="flex w-full flex-col justify-end text-end">
              <h1 className="text-xl font-semibold text-zinc-800"> {auth.user.username}</h1>
              <p className="text-sm text-zinc-400">@{auth.user.username}</p>

              <p className="text-sm">{auth.user.motto}</p>
            </div>

            <div></div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
