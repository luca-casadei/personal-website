import PortfolioDescription from "../components/HomePage/PortfolioDescription";
import Publications from "../components/HomePage/Publications";

export default function Home() {
  return (
    <section id="homePage" className="flex flex-col mt-20 items-center text-white">
      <PortfolioDescription/>
      <Publications/>
    </section>
  );
}
