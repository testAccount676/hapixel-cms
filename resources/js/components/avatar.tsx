export default function Avatar({ figure }: { figure: string }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-200">
      <img
        src={`https://avatar.habbocity.me/?figure=${figure}&direction=2&head_direction=2&headonly=1`}
        alt="avatar"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
