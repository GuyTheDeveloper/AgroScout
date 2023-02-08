import { About, Advantages, Hero, Regions, Services } from "../../components";

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Advantages />
      <Services />
      <About />
      <Regions />
    </div>
  );
};
