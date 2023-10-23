import PortfolioDescription from "../components/HomePage/PortfolioDescription";
import Publications from "../components/HomePage/Publications";

export default function Home() {
  return (
    <section id="homePage" className="bg-oxford-blue text-white flex-grow">
      <PortfolioDescription/>
      <Publications/>
    </section>
  );
}
