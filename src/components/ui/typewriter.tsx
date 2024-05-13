"use client";
 
import { cn } from "../../utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
 
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
 
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.2,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);
 
  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `text-o2ret-blue opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-2xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "none rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export function Typewriter() {
    const words = [
      {
        text: "Streamline",
      },
      {
        text: "your",
      },
      {
        text: "offline",
      },
      {
        text: "retail",
      },
      {
        text: "journey",
      },
      {
        text: "with",
      },
      {
        text: "o2ret.",
      },
    ];
    return (
      <div className="flex flex-col items-center justify-center h-[18rem]">
        <p className="text-black dark:text-neutral-200 text-md sm:text-base  ">
          <b>Get started with us Excited!</b>
        </p>
        <TypewriterEffect words={words} />
        
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 items-center justify-center py-6">
          
        <a href="https://forms.gle/m7PKUbVCs9sJfWoU6">
        <button className="md:mx-2 w-42 p-2 h-12 rounded-xl bg-white text-black border border-o2ret-blue text-sm">
        Become our distribution partner
        </button></a>

        <a href="https://forms.gle/jzpoy8iTzcNTFtnU8"> <button className="text-white w-42 p-2 h-12 md:mx-2 rounded-xl bg-o2ret-blue border border-white border-transparent text-white text-sm">
          Join our brand waitlist
        </button></a>
        
      </div>
      </div>
    );
  }

export default Typewriter;