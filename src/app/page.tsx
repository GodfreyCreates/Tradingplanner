
import TickerTape from "@/components/Widgets/TickerTape";
import { Features } from "@/Sections/Features";
import { Hero } from "@/Sections/Hero";
import { Services } from "@/Sections/Services";
import TradingPlan from "@/Sections/TradingPlan";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <TradingPlan/>
      <Services/>
      <TickerTape/>
      <Features/>
    </main>
  );
}
