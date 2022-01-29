import { Fragment } from "react";
import Hero from "../UI/Hero";
import Category from "../UI/Category";
import Options from "../UI/Options";
import Choices from "../UI/Choices";
import { HeroData } from "../UI/HeroData";
import AvailableClothes from "../UI/AvailableClothes";
const MainPage = () => {
  return (
    <Fragment>
      <Hero slides={HeroData} />
      <Category />
      <Options />
      <Choices />
      <AvailableClothes />
    </Fragment>
  );
};
export default MainPage;
