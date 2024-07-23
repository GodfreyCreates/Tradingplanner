import React from "react";
import Image from "next/image";

export const TradingPlanner = () => {
  return (
    <div>
      <section className="">
        <div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4 py-4">
            <div className="w-full h-full p-4 flex items-center justify-center border rounded-xl">
              <Image
                src="/images/currencies.svg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full h-full border rounded-xl">
                <div className="rounded-full border-2 h-52 w-52"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
