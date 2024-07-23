import React from "react";
import Image from "next/image";
import { IconRepeat, IconReportAnalytics } from "@tabler/icons-react";
import globe from "../../public/elements/globe.svg";
import blurDataURLsElements from "../../public/elements/blurDataURLs.json";
import { motion } from "framer-motion";

export const Features = () => {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={globe}
            alt="Globe Image"
            width={400}
            height={400}
            blurDataURL={blurDataURLsElements['globe.svg']}
            placeholder="blur"
          />
        </motion.div>
        <div className="text-center md:text-start">
          <h2 className="text-2xl font-semibold">
            Optimize your trading performance
          </h2>
          <p className="mb-2 text-gray-300">
            Explore all possibilities that level up your profitability. See
            what statistically works so you can make data driven decisions and
            trade with confidence.
          </p>
          <motion.div
            className="flex items-start border rounded-2xl p-1 mb-4"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-shrink-0 w-10 h-10">
              <IconRepeat className="border w-full h-full rounded-xl p-2 animated-gradient" />
            </div>
            <div className="ml-4 text-left">
              <h3 className="text-xl text-gray-100 mb-4">Trade Feedback</h3>
              <p className="mb-2 text-gray-300">
                Explore all possibilities that level up your profitability.
                See what statistically works so you can make data driven
                decisions and trade with confidence.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start border p-1 rounded-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-shrink-0 w-10 h-10">
              <IconReportAnalytics className="border w-full h-full rounded-xl p-2 animated-gradient" />
            </div>
            <div className="ml-4 text-left">
              <h3 className="text-xl text-gray-100 mb-4">
                Drilled Down Reporting
              </h3>
              <p className="mb-2 text-gray-300">
                Explore all possibilities that level up your profitability.
                See what statistically works so you can make data driven
                decisions and trade with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
