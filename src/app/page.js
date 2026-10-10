import AllProduct from "@/components/homepage/AllProduct";
import HeroBanner from "@/components/homepage/Hero";
import TopFallers from "@/components/homepage/TopFallers";
import TopRisers from "@/components/homepage/TopRisers";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <TopRisers/>
      <TopFallers/>
      <AllProduct/>
    </div>
  );
}
