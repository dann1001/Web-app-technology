import ClothesItem from "./ClothesItem";
import img1 from "../Assests/Watches/1-min.png";
import img2 from "../Assests/Watches/2-min.png";
import img3 from "../Assests/Watches/3-min.png";
import img4 from "../Assests/Watches/4-min.png";
import img5 from "../Assests/Watches/5-min.png";
import img6 from "../Assests/Watches/6-min.png";
import img7 from "../Assests/Watches/7-min.png";
import img8 from "../Assests/Watches/8-min.png";

import classes from "./AvailableClothes.module.css";

const DUMMY_WATCHES = [
  {
    id: "b1",
    name: "Brown Citizen",
    price: "300",
    image: `${img1}`,
  },
  {
    id: "b2",
    name: "Black Merlin",
    price: "111",
    image: `${img2}`,
  },
  {
    id: "b3",
    name: "Silver Rolex",
    price: "695",
    image: `${img3}`,
  },
  {
    id: "b4",
    name: "Golden Rolex",
    price: "999",
    image: `${img4}`,
  },
  {
    id: "b5",
    name: "Silver Seiko",
    price: "96",
    image: `${img5}`,
  },
  {
    id: "b6",
    name: "Children Rolex",
    price: "144",
    image: `${img6}`,
  },
  {
    id: "b7",
    name: "Black G-shock",
    price: "877",
    image: `${img7}`,
  },
  {
    id: "b8",
    name: "Mi xhu9",
    price: "397",
    image: `${img8}`,
  },
];

const AvailableWatches = (props) => {
  const clothesList = DUMMY_WATCHES.map((watch) => (
    <ClothesItem
      key={watch.id}
      name={watch.name}
      price={watch.price}
      image={watch.image}
    />
  ));
  return <ul className={classes.carts}>{clothesList}</ul>;
};

export default AvailableWatches;
