import { motion } from "framer-motion";

interface NewsCardProps {
  author: string;
  id: number;
  description: string;
  image: string;
}

const NewsCard = ({ author, description, image }: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="w-80 max-w-xs overflow-hidden rounded-2xl bg-white text-gray-700 shadow-lg duration-200 not-even:cursor-pointer hover:-translate-y-1"
    >
      <div
        className="relative h-32 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="space-y-2 p-4 pt-2 text-xs">
        <p>{description}</p>
      </div>
      <div className="relative flex h-6 items-center justify-start border-t px-4 py-6 text-sm text-gray-700">
        <p className="text-xs">
          por <span className="font-medium">{author}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default NewsCard;
