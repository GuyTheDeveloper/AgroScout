import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "./_advantages.scss";
import "swiper/css";

export const Advantages: React.FC = () => {
  return (
    <section className="advantages">
      <div className="container advantages-container">
        <div className="advantages__top">
          <h2 className="advantages__heading">Наши приемущества </h2>
          <h3 className="advantages__subheading">Почему нам доверяют?</h3>
        </div>

        <div className="advantages-wrapper">
          <div className="advantages__card">
            <h3 className="advantages__card__heading">
              Квалифицированные сотрудники
            </h3>
            <p className="advantages__card__text">
              Все наши сотрудники имеют многолетний опыт работы в сфере
              беспилотной авиации. Нами было реализовано множество проектов
              различной тематики и самой различной сложности.
            </p>
          </div>

          <div className="advantages__card">
            <h3 className="advantages__card__heading">
              Высокотехнологичное оборудование
            </h3>
            <p className="advantages__card__text">
              Наша компания использует современное оборудование, которое
              обеспечивает высокое качество в выполнении поставленных задач.
            </p>
          </div>

          <div className="advantages__card">
            <h3 className="advantages__card__heading">Экономия</h3>
            <p className="advantages__card__text">
              Использование беспилотных технологий экономит вам много времени и
              денег. За счет отсутствия технологической колеи сохраняется до 6%
              урожая. Снижение расхода препаратов до 30%
            </p>
          </div>

          <div className="advantages__card">
            <h3 className="advantages__card__heading">Оперативность</h3>
            <p className="advantages__card__text">
              За рабочую смену наши специалисты способны защитить более 1000
              гектар ваших полей, кустарников и деревьев.
            </p>
          </div>
          <div className="advantages__card">
            <h3 className="advantages__card__heading">
              Собственное производство
            </h3>
            <p className="advantages__card__text">
              Мы разрабатываем и производим беспилотные летательные аппараты,
              поэтому знаем все тонкости их работы и можем настроить их под
              конкретные задачи и потребности клиентов.
            </p>
          </div>
          <div className="advantages__card">
            <h3 className="advantages__card__heading">Свой сервис</h3>
            <p className="advantages__card__text">
              Любой наш аппарат можно сдать на плановое техническое обслуживание
              или же в ремонт в наш собственный сервис, который гарантирует
              качество и оперативность выполнения работ.
            </p>
          </div>
        </div>

        <div className="advantages__swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{
              el: ".advantages__pagination",
              clickable: true,
            }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="advantages__card">
                <h3 className="advantages__card__heading">
                  Квалифицированные сотрудники
                </h3>
                <p className="advantages__card__text">
                  Все наши сотрудники имеют многолетний опыт работы в сфере
                  беспилотной авиации. Нами было реализовано множество проектов
                  различной тематики и самой различной сложности.
                </p>
              </div>
            </SwiperSlide>

            {/* first Slide */}

            <SwiperSlide>
              <div className="advantages__card">
                <h3 className="advantages__card__heading">
                  Высокотехнологичное оборудование
                </h3>
                <p className="advantages__card__text">
                  Наша компания использует современное оборудование, которое
                  обеспечивает высокое качество в выполнении поставленных задач.
                </p>
              </div>
            </SwiperSlide>

            {/* Second Slider */}

            <SwiperSlide>
              <div className="advantages__card">
                <h3 className="advantages__card__heading">Экономия</h3>
                <p className="advantages__card__text">
                  Использование беспилотных технологий экономит вам много
                  времени и денег. За счет отсутствия технологической колеи
                  сохраняется до 6% урожая. Снижение расхода препаратов до 30%
                </p>
              </div>
            </SwiperSlide>

            {/* Third Slider */}

            <SwiperSlide>
              <div className="advantages__card">
                <h3 className="advantages__card__heading">Оперативность</h3>
                <p className="advantages__card__text">
                  За рабочую смену наши специалисты способны защитить более 1000
                  гектар ваших полей, кустарников и деревьев.
                </p>
              </div>
            </SwiperSlide>

            {/* Fourth Slider */}

            <SwiperSlide>
              <div className="advantages__card">
                <h3 className="advantages__card__heading">
                  Собственное производство
                </h3>
                <p className="advantages__card__text">
                  Мы разрабатываем и производим беспилотные летательные
                  аппараты, поэтому знаем все тонкости их работы и можем
                  настроить их под конкретные задачи и потребности клиентов.
                </p>
              </div>
            </SwiperSlide>

            {/* Fifth Slider */}

            <SwiperSlide>
              <div className="advantages__card">
                <h3 className="advantages__card__heading">Свой сервис</h3>
                <p className="advantages__card__text">
                  Любой наш аппарат можно сдать на плановое техническое
                  обслуживание или же в ремонт в наш собственный сервис, который
                  гарантирует качество и оперативность выполнения работ.
                </p>
              </div>
            </SwiperSlide>

            {/* Last Slider */}
          </Swiper>
        </div>
        <div className="advantages__pagination"></div>
      </div>
    </section>
  );
};
