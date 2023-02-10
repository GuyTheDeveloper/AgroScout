import {
  About,
  Advantages,
  Hero,
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
    </div>
  );
};
