import { About, Advantages, Hero, Services } from "../../components";

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Advantages />
      <Services />
      <About />
    </div>
  );
};
