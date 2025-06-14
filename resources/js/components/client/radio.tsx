import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronDown, FaChevronUp, FaPause, FaPlay, FaVolumeDown, FaVolumeUp } from "react-icons/fa";

export default function Radio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState<number>(50);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      await audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const increaseVolume = () => {
    if (volume < 100) {
      setVolume((prevVolume) => {
        const newVolume = prevVolume + 10;
        if (audioRef.current) {
          audioRef.current.volume = newVolume / 100;
        }
        return newVolume;
      });
    }
  };

  const decreaseVolume = () => {
    if (volume > 0) {
      setVolume((prevVolume) => {
        const newVolume = prevVolume - 10;
        if (audioRef.current) {
          audioRef.current.volume = newVolume / 100;
        }
        return newVolume;
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} className="absolute -left-[9999px] h-[1px] w-[1px]" autoPlay loop src="/assets/radio/lofi.mp3" />

      <motion.div
        className="fixed top-4 left-4 w-44 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      >
        <div
          className="overflow-hidden rounded-xl shadow-lg"
          style={{
            background: "linear-gradient(to bottom, #00303C, #0064C8)",
          }}
        >
          <div className="relative flex items-center gap-x-2 p-1.5">
            <img src="https://www.habboassets.com/assets/badges/ITG96.gif" className="h-7 w-7" alt={"Icon"} />
            <span className="font-semibold">Rádio</span>

            <button onClick={toggleExpand} className="absolute left-36">
              {isExpanded ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key="expanded-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 50, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="h-50 px-4 pb-4"
              >
                <div className="mt-2 flex justify-center gap-x-1">
                  <button
                    onClick={togglePlay}
                    className="rounded-full p-2 text-white"
                    style={{
                      background: "linear-gradient(to right, #0064C8, #00B4FF)", // Gradiente de azul vibrante para azul claro/ciano
                    }}
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>

                  <button
                    onClick={decreaseVolume}
                    className="rounded-full bg-white p-2"
                    style={{
                      background: "linear-gradient(to right, #0064C8, #00B4FF)", // Gradiente de azul vibrante para azul claro/ciano
                    }}
                  >
                    <FaVolumeDown />
                  </button>

                  <button
                    onClick={increaseVolume}
                    className="rounded-full p-2"
                    style={{
                      background: "linear-gradient(to right, #0064C8, #00B4FF)", // Gradiente de azul vibrante para azul claro/ciano
                    }}
                  >
                    <FaVolumeUp />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
