import React, { useState } from "react";
import ImageData from "./ImageData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import styles from "../Drawer.module.scss";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={`${styles.headerButtom}`}>
      <section className={`${styles.slider}`}>
        {ImageData.map((slide, index) => {
          return (
            <div
              className={
                index === current ? `${styles.slideActive}` : `${styles.slide}`
              }
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt="travel image"
                  className={`${styles.image}`}
                />
              )}
              <FaArrowAltCircleLeft
                className={`${styles.leftArrow}`}
                onClick={prevSlide}
              />
              <FaArrowAltCircleRight
                className={`${styles.rightArrow}`}
                onClick={nextSlide}
              />
            </div>
          );
        })}
        <section className={`${styles.blockImg}`}>
          <img className={`${styles.cashback}`} src="../img/cachback.png" />{" "}
          <br />
          <img className={`${styles.getsale}`} src="../img/getsale.png" />
        </section>
      </section>
    </div>
  );
};

export default Slider;
