import { useState } from "react";
import Button from "../Buttons/Button";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { HeroData } from "./HeroData";
import classes from "./Hero.module.css";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length === 0) {
    return;
  }

  return (
    <section className={classes.slider}>
      <FaArrowAltCircleLeft
        className={classes["left-arrow"]}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className={classes["right-arrow"]}
        onClick={nextSlide}
      />
      {HeroData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <div className={classes.offs}>
              {index === current && (
                <img src={slide.image} alt="" className={classes.hero} />
              )}
              {index === current && (
                <div className={classes["offs-text"]}>
                  <h3 className={classes.title}>{slide.h3}</h3>
                  <p className={classes.paragraph}>{slide.p}</p>
                  <Button className={classes["hero-button"]}></Button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero;
