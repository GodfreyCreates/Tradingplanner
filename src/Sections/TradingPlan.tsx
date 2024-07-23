// TradingPlan.tsx
"use client";

import React, { useEffect } from "react";
import {
  IconChartArea,
  IconChartArcs,
  IconGraph,
  IconChartAreaLineFilled,
  IconChartCandle,
  IconChartArcs3,
} from "@tabler/icons-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GradientCircle from "@/components/ui/GradientCircle";
import '../Styles/BlurryCircle.css'

interface TradingStep {
  icon: JSX.Element;
  title: string;
  description: string;
  timeFrame: string;
  pdArrays: number[];
}

const tradingSteps: TradingStep[] = [
  {
    icon: <IconChartArea size={30} />,
    title: "Step 1: Market Analysis",
    description: "Analyze the market trends and patterns.",
    timeFrame: "1H",
    pdArrays: [1, 2, 3],
  },
  {
    icon: <IconChartArcs size={30} />,
    title: "Step 2: Strategy Development",
    description: "Develop a strategy based on analysis.",
    timeFrame: "4H",
    pdArrays: [4, 5, 6],
  },
  {
    icon: <IconGraph size={30} />,
    title: "Step 3: Risk Management",
    description: "Set risk management parameters.",
    timeFrame: "1D",
    pdArrays: [7, 8, 9],
  },
  {
    icon: <IconChartAreaLineFilled size={30} />,
    title: "Step 4: Execute Trade",
    description: "Execute the trade according to the plan.",
    timeFrame: "1W",
    pdArrays: [10, 11, 12],
  },
  {
    icon: <IconChartCandle size={30} />,
    title: "Step 5: Review and Adjust",
    description: "Review the trade and adjust strategy.",
    timeFrame: "1M",
    pdArrays: [13, 14, 15],
  },
  {
    icon: <IconChartArcs3 size={30} />,
    title: "Step 6: Review and Adjust",
    description: "Review the trade and adjust strategy.",
    timeFrame: "1M",
    pdArrays: [13, 14, 15],
  },
];

const TradingPlan: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-gradient-to-b from-transparent via-transparent to-black">
      {tradingSteps.map((step, index) => {
        const controls = useAnimation();
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });

        useEffect(() => {
          if (inView) {
            controls.start({ opacity: 1, y: 0 });
          } else {
            controls.start({ opacity: 0, y: 50 });
          }
        }, [inView, controls]);

        return (
          <motion.div
            key={index}
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-4 shadow-md relative text-center border rounded-2xl flex flex-col BlurryCircle items-center"
          >
            <div className="rounded-xl p-4 w-fit mb-2 animated-gradient">{step.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <p className="mb-2">{step.description}</p>
            <p className="mb-2">Time Frame: {step.timeFrame}</p>
            <p className="">PD Arrays: {step.pdArrays.join(", ")}</p>
            {index < tradingSteps.length - 1 && (
              <div className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 text-2xl"></div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default TradingPlan;
