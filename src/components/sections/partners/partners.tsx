import bionovatic from "../../../assets/img/partners-bionovatic.svg";
import bayer from "../../../assets/img/partners-bayer.svg";
import corteva from "../../../assets/img/partners-corteva.svg";
import kws from "../../../assets/img/partners-kws.svg";
import "./_partners.scss";

export const Partners: React.FC = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="advantages__top">
          <h2 className="advantages__heading">Партнеры</h2>
          <h3 className="advantages__subheading">Наши клиенты </h3>
        </div>

        <div className="partners-wrapper">
          <img className="partners__img" src={bionovatic} alt="Bionovatic" />
          <img className="partners__img" src={bayer} alt="Bayer" />
          <img className="partners__img" src={corteva} alt="Corteva" />
          <img className="partners__img" src={kws} alt="KWS" />
        </div>
      </div>
    </section>
  );
};
