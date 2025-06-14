import { StaffUser } from "@/pages/community/staff";

interface StaffCardProps {
  user: StaffUser;
}

export default function StaffCard({ user }: StaffCardProps) {
  return (
    <div className="relative h-24 w-full overflow-hidden rounded border bg-white md:mt-0 dark:border-gray-900 dark:bg-gray-700">
      <div
        className="staff-bg h-[65%] w-full"
        style={{
          background: `rgba(0, 0, 0, 0.1) url(https://www.habboassets.com/assets/images/web-promos/lpromo_peeloporttiwinter051224.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute -top-0.5 left-1 drop-shadow">
        <a href="#">
          <img
            className="transition duration-300 ease-in-out hover:scale-105"
            src={`https://www.habblet.city/habblet-imaging/avatarimage?figure=${user.figure}&direction=2&head_direction=3&gesture=sml`}
            alt=""
          />
        </a>
      </div>

      <p className="-mt-[30px] ml-[75px] text-xl font-semibold text-white">{user.username}</p>

      <div className="flex w-full items-center justify-between px-4">
        <p className="mt-[10px] ml-[57px] text-sm font-semibold text-gray-500">{user.motto}</p>

        <div
          className={`min-w-[15px] animate-pulse ${user.online === "1" ? "bg-green-600" : "bg-red-600"} mt-2 flex max-h-[15px] min-h-[15px] max-w-[15px] items-start rounded-full`}
        ></div>
      </div>
    </div>
  );
}
