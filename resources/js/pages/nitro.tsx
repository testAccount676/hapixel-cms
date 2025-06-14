import NitroLayout from "@/layouts/nitro-layout";
import { SharedData } from "@/types";
import { usePage } from "@inertiajs/react";

// const NITRO_CLIENT_PATH = import.meta.env.VITE_NITRO_CLIENT_PATH;

export default function NitroClient({ nitro_path }: { nitro_path: string }) {
  const { auth } = usePage<SharedData>().props;

  if (!auth.user.auth_ticket) {
    window.location.href = "/users/me";
  }

  return (
    <>
      <NitroLayout>
        <iframe
          src={`${nitro_path}/index.html?sso=${auth.user.auth_ticket}`}
          className="absolute top-0 left-0 m-0 h-full w-full overflow-hidden border-none p-0"
        />
      </NitroLayout>
    </>
  );
}
