import Button from "../Buttons/Button";
import Card from "./Card";
import bag from "../Assests/Clothes/1-min.png";
import watch from "../Assests/Clothes/13-min.png";
import shoes from "../Assests/Clothes/11-min.png";
import classes from "./Category.module.css";
const Category = () => {
  return (
    <Card>
      <section className={classes.category}>
        <div className={classes.cards}>
          <span className={classes.cardimg}>
            <img src={bag} alt="white bag" />
          </span>
          <p className={classes.details}>
            Designer Bags
            <Button />
          </p>
        </div>
        <div className={classes.cards}>
          <span className={classes.cardimg}>
            <img src={watch} alt="black watch" />
          </span>
          <p className={classes.details}>
            Branded Watch
            <Button />
          </p>
        </div>
        <div className={classes.cards}>
          <span className={classes.cardimg}>
            <img src={shoes} alt="white shoes" />
          </span>
          <p className={classes.details}>
            Casual Shoes
            <Button />
          </p>
        </div>
      </section>
    </Card>
  );
};

export default Category;
