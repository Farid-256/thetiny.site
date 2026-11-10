import Bannar from "@/components/Bannar";
import CounterSection from "@/components/CounterSection";
import Links from "@/components/Links";
import Premium from "@/components/Premium";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";



export default function Home() {
  return (
    <div>
      <Bannar></Bannar>

      <CounterSection></CounterSection>

      <Links></Links>

      <Premium></Premium>

      <Pricing></Pricing>

      <Testimonials></Testimonials>
    </div>
  )
}
