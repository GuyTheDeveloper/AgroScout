import {
  About,
  Advantages,
  Hero,
  News,
  Partners,
  Regions,
  Services,
} from "../../components";

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Advantages />
      <Services />
      <About />
      <Regions />
      <Partners />
      <News />
    </div>
  );
};
