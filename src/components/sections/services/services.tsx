import "./_services.scss";

export const Services: React.FC = () => {
  return (
    <div className="huge-container">
      <section className="services">
        <div className="container">
          <div className="services-wrapper">
            <h2 className="services__heading">Оказываем услуги!</h2>
            <p className="services__text">
              Принимаем заявки по биологической и химической защите растений
              дронами, картографии и мониторингу.
            </p>
            <button className="services__btn">Оставить заявку</button>
          </div>
        </div>
      </section>
    </div>
  );
};
