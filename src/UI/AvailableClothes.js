import ClothesItem from "./ClothesItem";
import img1 from "../Assests/Clothes/1-min.png";
import img2 from "../Assests/Clothes/2-min.png";
import img3 from "../Assests/Clothes/3-min.png";
import img4 from "../Assests/Clothes/4-min.png";
import img5 from "../Assests/Clothes/5-min.png";
import img6 from "../Assests/Clothes/6-min.png";
import img7 from "../Assests/Clothes/7-min.png";
import img8 from "../Assests/Clothes/8-min.png";
import img9 from "../Assests/Clothes/9-min.png";
import img10 from "../Assests/Clothes/10-min.png";
import img11 from "../Assests/Clothes/11-min.png";
import img12 from "../Assests/Clothes/12-min.png";
import classes from "./AvailableClothes.module.css";

const DUMMY_CLOTHES = [
  {
    id: "m1",
    name: "Channel Bag",
    price: "20",
    image: `${img1}`,
  },
  {
    id: "m2",
    name: "Chiefs Mount",
    price: "126",
    image: `${img2}`,
  },
  {
    id: "m3",
    name: "yellow shirt",
    price: "65",
    image: `${img3}`,
  },
  {
    id: "m4",
    name: "shirt 2color",
    price: "71",
    image: `${img4}`,
  },
  {
    id: "m5",
    name: "Shirt Collar",
    price: "52",
    image: `${img5}`,
  },
  {
    id: "m6",
    name: "shirt 3color",
    price: "44",
    image: `${img6}`,
  },
  {
    id: "m7",
    name: "Sexy Casual",
    price: "83",
    image: `${img7}`,
  },
  {
    id: "m8",
    name: "Vintage Printed",
    price: "39",
    image: `${img8}`,
  },
  {
    id: "m9",
    name: "Skull Shirt",
    price: "63",
    image: `${img9}`,
  },
  {
    id: "m10",
    name: "Asymmetric",
    price: "78",
    image: `${img10}`,
  },
  {
    id: "m11",
    name: "Papa Ladies ",
    price: "16",
    image: `${img11}`,
  },
  {
    id: "m12",
    name: "Wool Cashmere",
    price: "34",
    image: `${img12}`,
  },
];

const AvailableClothes = (props) => {
  const clothesList = DUMMY_CLOTHES.map((cloth) => (
    <ClothesItem
      key={cloth.id}
      name={cloth.name}
      price={cloth.price}
      image={cloth.image}
    />
  ));
  return <ul className={classes.carts}>{clothesList}</ul>;
};

export default AvailableClothes;
