import "./_hero.scss";

export const Hero: React.FC = () => {
  return (
    <div className="large-container">
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero--line">
            <div className="container">
              <div className="hero__inner">
                <h1 className="hero__heading">
                  AgroScout - беспилотные технологии для сельского хозяйства и
                  промышлености
                </h1>

                <div className="hero__works">
                  <h3 className="hero__works__heading">
                    <span className="hero__works__bold">50 000 Га</span>{" "}
                    ежегодной обработки
                  </h3>
                  <h3 className="hero__works__heading">
                    <span className="hero__works__bold">30% </span>экономии
                    средств
                  </h3>
                  <h3 className="hero__works__heading">
                    <span className="hero__works__bold">10 команд</span>{" "}
                    специалистов
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
