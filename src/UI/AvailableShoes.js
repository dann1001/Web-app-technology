import ClothesItem from "./ClothesItem";
import img1 from "../Assests/Shoes/1-min.png";
import img2 from "../Assests/Shoes/2-min.png";
import img3 from "../Assests/Shoes/3-min.png";
import img4 from "../Assests/Shoes/4-min.png";
import img5 from "../Assests/Shoes/5-min.png";
import img6 from "../Assests/Shoes/6-min.png";
import img7 from "../Assests/Shoes/7-min.png";
import img8 from "../Assests/Shoes/8-min.png";
import img9 from "../Assests/Shoes/9-min.png";
import img10 from "../Assests/Shoes/10-min.png";
import img11 from "../Assests/Shoes/11-min.png";
import img12 from "../Assests/Shoes/12-min.png";
import img13 from "../Assests/Shoes/13-min.png";

import classes from "./AvailableClothes.module.css";

const DUMMY_SHOES = [
  {
    id: "s1",
    name: "Casual Fendy",
    price: "180",
    image: `${img1}`,
  },
  {
    id: "s2",
    name: "Nike Jordan",
    price: "800",
    image: `${img2}`,
  },
  {
    id: "s3",
    name: "Old Fashioned",
    price: "20",
    image: `${img3}`,
  },
  {
    id: "s4",
    name: "Versace Shoes",
    price: "71",
    image: `${img4}`,
  },
  {
    id: "s5",
    name: "Breezy",
    price: "138",
    image: `${img5}`,
  },
  {
    id: "s6",
    name: "J-West",
    price: "340",
    image: `${img6}`,
  },
  {
    id: "s7",
    name: "Canvas",
    price: "300",
    image: `${img7}`,
  },
  {
    id: "s8",
    name: "Summer Shoe",
    price: "126",
    image: `${img8}`,
  },
  {
    id: "s9",
    name: "Padded",
    price: "190",
    image: `${img9}`,
  },
  {
    id: "s10",
    name: "Savvy",
    price: "280",
    image: `${img10}`,
  },
  {
    id: "s11",
    name: "Closed Toe ",
    price: "110",
    image: `${img11}`,
  },
  {
    id: "s12",
    name: "Kampung",
    price: "299",
    image: `${img12}`,
  },
  {
    id: "s13",
    name: "Athletic",
    price: "125",
    image: `${img13}`,
  },
];

const AvailableShoes = (props) => {
  const clothesList = DUMMY_SHOES.map((shoes) => (
    <ClothesItem
      key={shoes.id}
      name={shoes.name}
      price={shoes.price}
      image={shoes.image}
    />
  ));
  return <ul className={classes.carts}>{clothesList}</ul>;
};

export default AvailableShoes;
