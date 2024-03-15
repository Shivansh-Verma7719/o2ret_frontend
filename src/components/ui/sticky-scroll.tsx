"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--black)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] no-scrollbar overflow-y-auto flex justify-center relative space-x-40 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-80 no-scrollbar rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};

const content = [
    {
        title: "What we do",
        description:
          "Community first offline GTM in Tier-1s/2s via shelf space aggregation of prime retail locationsModern Trade/A+ Stores, HoReCa opportunities, gyms, mall pop-ups and salons for consumers with high disposable incomes. Helps in consumer acquisition and community creation. Pre-defined LOC and other terms for easy expansion.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] flex items-center justify-center text-white">
            <b>What we do</b>
          </div>
        ),
      },
  {
    title: "Distributor aggregation",
    description:
      "Distributor aggregation for reaching valueseeking audiences and ensuring repetitive purchases (retention). Helps push products to kiranas and other sales channels to reach target consumers. Onboarding distributors/retailers on ONDC.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <b>Distributor aggregation</b>
      </div>
    ),
  },
  {
    title: "Location Analytics",
    description:
      "Leveraging Google Analytics for tracking Maps-based user-location behavior. Helps in competitive landscaping and development of AI-based expansion strategies. Can also be leveraged for strategising openings of independant brick and mortar stores.",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--red-500))] flex items-center justify-center text-white">
        <b>Location Analytics</b>
      </div>
    ),
  },
  {
    title: "In the future",
    description:
      "Subcategory diversification(expand to all of CPG) and In-store sales analytics using Computer Vision/POS P.S. Brands pay platform fees for all this, no cost to the retailers or the distributors",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <b>In the future</b>
      </div>
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollReveal;
