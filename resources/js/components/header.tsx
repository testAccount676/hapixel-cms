import LoginDialog from "@/components/dialogs/login-dialog";
import { formatCurrency } from "@/lib/format-currency";
import { SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";

export default function Header() {
  const { authenticated, auth } = usePage<SharedData>().props;

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-center text-zinc-800">
        {authenticated ? (
          <>
            <ul className="flex items-center divide-x divide-gray-300 px-2 text-xs font-[500]">
              <li className="flex items-center justify-center gap-x-1 px-7 py-3">
                <img src="/assets/images/currencies/credits.gif" alt="duckets" />
                {formatCurrency(auth.user.credits)} moedas
              </li>
              <li className="flex items-center justify-center gap-x-1 px-7 py-3">
                <img src="/assets/images/currencies/duckets.png" alt="duckets" />
                {formatCurrency(auth.user.activity_points)} duckets
              </li>
              <li className="flex items-center justify-center gap-x-1 px-7 py-3">
                <img src="/assets/images/currencies/diamonds.png" alt="diamonds" />
                {formatCurrency(auth.user.vip_points)} diamantes
              </li>
              <li className="flex items-center justify-center gap-x-1 px-7 py-3">
                <img src="https://dev.hapixel.net/nitro-assets/images/wallet/102.png" alt="points" />
                {formatCurrency(auth.user.seasonal_points)} points
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="flex items-center divide-gray-300 px-2 text-[0.85rem] font-[500]">
              <LoginDialog />

              <li className={`flex cursor-pointer items-center justify-center gap-x-1 px-7 py-3 duration-500 hover:bg-gray-100`}>
                <Link href={"/auth/register"}>Registrar-se</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
