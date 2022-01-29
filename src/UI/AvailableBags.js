import ClothesItem from "./ClothesItem";
import img1 from "../Assests/Bags/1-min.png";
import img2 from "../Assests/Bags/2-min.png";
import img3 from "../Assests/Bags/3-min.png";
import img4 from "../Assests/Bags/4-min.png";
import img5 from "../Assests/Bags/5-min.png";
import img6 from "../Assests/Bags/6-min.png";
import img7 from "../Assests/Bags/7-min.png";
import img8 from "../Assests/Bags/8-min.png";
import img9 from "../Assests/Bags/9-min.png";
import img10 from "../Assests/Bags/10-min.png";
import img11 from "../Assests/Bags/11-min.png";
import img12 from "../Assests/Bags/12-min.png";
import img13 from "../Assests/Bags/13-min.png";
import classes from "./AvailableClothes.module.css";

const DUMMY_BAGS = [
  {
    id: "w1",
    name: "Red Channel",
    price: "149",
    image: `${img1}`,
  },
  {
    id: "w2",
    name: "Blue Wink",
    price: "96",
    image: `${img2}`,
  },
  {
    id: "w3",
    name: "Channel O4",
    price: "333",
    image: `${img3}`,
  },
  {
    id: "w4",
    name: "Davin Ro",
    price: "56",
    image: `${img4}`,
  },
  {
    id: "w5",
    name: "Clara Mink",
    price: "197",
    image: `${img5}`,
  },
  {
    id: "w6",
    name: "Eagle",
    price: "337",
    image: `${img6}`,
  },
  {
    id: "w7",
    name: "Python",
    price: "173",
    image: `${img7}`,
  },
  {
    id: "w8",
    name: "Pink Panther",
    price: "80",
    image: `${img8}`,
  },
  {
    id: "w9",
    name: "Antoan",
    price: "264",
    image: `${img9}`,
  },
  {
    id: "w10",
    name: "Adama",
    price: "201",
    image: `${img10}`,
  },
  {
    id: "w11",
    name: "Channel Br8 ",
    price: "569",
    image: `${img11}`,
  },
  {
    id: "w12",
    name: "Channel Q27",
    price: "780",
    image: `${img12}`,
  },
  {
    id: "w13",
    name: "Mindy",
    price: "112",
    image: `${img13}`,
  },
];

const AvailableBags = (props) => {
  const clothesList = DUMMY_BAGS.map((bag) => (
    <ClothesItem
      key={bag.id}
      name={bag.name}
      price={bag.price}
      image={bag.image}
    />
  ));
  return <ul className={classes.carts}>{clothesList}</ul>;
};

export default AvailableBags;
