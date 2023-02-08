import "./_regions.scss";
import regionData from "./region.data";

export const Regions: React.FC = () => {
  return (
    <div className="large-container">
      <section className="regions">
        <div className="container">
          <div className="advantages__top">
            <h2 className="advantages__heading regions__heading">
              Регионы присутствия
            </h2>
            <h3 className="advantages__subheading regions__subheading">
              Где мы работаем
            </h3>
          </div>

          <div className="regions-wrapper">
            <ol className="regions__list">
              {regionData.slice(0, 12).map((region, index) => (
                <li key={index} className="regions__item">
                  <span>{region.id}.</span> <span>{region?.name}</span>
                </li>
              ))}
            </ol>
            <ol start={13} className="regions__list">
              {regionData.slice(12).map((region, index) => (
                <li key={index} className="regions__item">
                  <span>{region.id}.</span> <span>{region?.name}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};
