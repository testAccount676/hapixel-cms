import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Avatar from "../avatar";

interface PostProps {
  username: string;
  figure: string;
  content: string;
}

export default function Post({ content, figure, username }: PostProps) {
  return (
    <div className="flex max-w-xl items-start gap-3 rounded-md border-none bg-white p-4 shadow-sm">
      <div className="relative">
        <Avatar figure={figure} />
        <img src="https://hubbe.biz/build/assets/staff-D4kmbc3L.png" alt="badge" className="absolute -top-1.5 -right-1 h-5 w-5" />
      </div>

      <div className="flex-1">
        <div className="text-xs font-semibold">
          {username} <span className="font-normal text-gray-500">há 4 semanas</span>
        </div>

        <div className="mt-1 text-sm whitespace-pre-line text-gray-800">{content}</div>

        <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <AiFillLike />
          </div>
          <div className="flex items-center gap-1">
            <FaComment />
          </div>
        </div>
      </div>
    </div>
  );
}
