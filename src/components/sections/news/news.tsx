import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import newsImage1 from "../../../assets/img/news-img1.jpg";
import "./_news.scss";
import "swiper/css";

export const News: React.FC = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="advantages__top">
          <h2 className="advantages__heading">Новости</h2>
          <h3 className="advantages__subheading">Что у нас нового</h3>
        </div>

        <div className="news-wrapper">
          <div className="news__card">
            <div className="news__card__img">
              <img src={newsImage1} width={374} height={253} alt="" />
            </div>
            <h3 className="news__card__heading">
              Дроны – будущее сельского хозяйства
            </h3>
            <p className="news__card__text">
              Новые технологии не обходят стороной и самую консервативную
              отрасль – сельское хозяйство. Согласно прогнозам международной
              общественной организации Association for Unmanned Vehicle Systems
              International, в скором времени агросектор станет крупнейшим
              потребителем дронов – беспилотных летательных аппаратов (БПЛА).
            </p>
            <Link to="/" className="news__card__link">
              Читать полностью
            </Link>
          </div>

          <div className="news__card">
            <div className="news__card__img">
              <img src={newsImage1} width={374} height={253} alt="" />
            </div>
            <h3 className="news__card__heading">
              Дроны – будущее сельского хозяйства
            </h3>
            <p className="news__card__text">
              Новые технологии не обходят стороной и самую консервативную
              отрасль – сельское хозяйство. Согласно прогнозам международной
              общественной организации Association for Unmanned Vehicle Systems
              International, в скором времени агросектор станет крупнейшим
              потребителем дронов – беспилотных летательных аппаратов (БПЛА).
            </p>
            <Link to="/" className="news__card__link">
              Читать полностью
            </Link>
          </div>

          <div className="news__card">
            <div className="news__card__img">
              <img src={newsImage1} width={374} height={253} alt="" />
            </div>
            <h3 className="news__card__heading">
              Дроны – будущее сельского хозяйства
            </h3>
            <p className="news__card__text">
              Новые технологии не обходят стороной и самую консервативную
              отрасль – сельское хозяйство. Согласно прогнозам международной
              общественной организации Association for Unmanned Vehicle Systems
              International, в скором времени агросектор станет крупнейшим
              потребителем дронов – беспилотных летательных аппаратов (БПЛА).
            </p>
            <Link to="/" className="news__card__link">
              Читать полностью
            </Link>
          </div>
        </div>

        <div className="news__swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{
              el: ".news__pagination",
              clickable: true,
            }}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
          >
            <SwiperSlide>
              <div className="news__card">
                <div className="news__card__img">
                  <img src={newsImage1} width={374} height={253} alt="" />
                </div>
                <h3 className="news__card__heading">
                  Дроны – будущее сельского хозяйства
                </h3>
                <p className="news__card__text">
                  Новые технологии не обходят стороной и самую консервативную
                  отрасль – сельское хозяйство. Согласно прогнозам международной
                  общественной организации Association for Unmanned Vehicle
                  Systems International, в скором времени агросектор станет
                  крупнейшим потребителем дронов – беспилотных летательных
                  аппаратов (БПЛА).
                </p>
                <Link to="/" className="news__card__link">
                  Читать полностью
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="news__card">
                <div className="news__card__img">
                  <img src={newsImage1} width={374} height={253} alt="" />
                </div>
                <h3 className="news__card__heading">
                  Дроны – будущее сельского хозяйства
                </h3>
                <p className="news__card__text">
                  Новые технологии не обходят стороной и самую консервативную
                  отрасль – сельское хозяйство. Согласно прогнозам международной
                  общественной организации Association for Unmanned Vehicle
                  Systems International, в скором времени агросектор станет
                  крупнейшим потребителем дронов – беспилотных летательных
                  аппаратов (БПЛА).
                </p>
                <Link to="/" className="news__card__link">
                  Читать полностью
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="news__card">
                <div className="news__card__img">
                  <img src={newsImage1} width={374} height={253} alt="" />
                </div>
                <h3 className="news__card__heading">
                  Дроны – будущее сельского хозяйства
                </h3>
                <p className="news__card__text">
                  Новые технологии не обходят стороной и самую консервативную
                  отрасль – сельское хозяйство. Согласно прогнозам международной
                  общественной организации Association for Unmanned Vehicle
                  Systems International, в скором времени агросектор станет
                  крупнейшим потребителем дронов – беспилотных летательных
                  аппаратов (БПЛА).
                </p>
                <Link to="/" className="news__card__link">
                  Читать полностью
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="news__card">
                <div className="news__card__img">
                  <img src={newsImage1} width={374} height={253} alt="" />
                </div>
                <h3 className="news__card__heading">
                  Дроны – будущее сельского хозяйства
                </h3>
                <p className="news__card__text">
                  Новые технологии не обходят стороной и самую консервативную
                  отрасль – сельское хозяйство. Согласно прогнозам международной
                  общественной организации Association for Unmanned Vehicle
                  Systems International, в скором времени агросектор станет
                  крупнейшим потребителем дронов – беспилотных летательных
                  аппаратов (БПЛА).
                </p>
                <Link to="/" className="news__card__link">
                  Читать полностью
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="news__pagination"></div>
      </div>
    </section>
  );
};
