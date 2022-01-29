import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Classes from "./App.module.css";
import Header from "./UI/Header";
import Cart from "./Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/Cart-Provider";
import classes from "./App.module.css";
import NotFound from "./Pages/NotFound";
import Loading from "./UI/Loading";

const MainPage = React.lazy(() => import("./Pages/MainPage"));
const ShoesPage = React.lazy(() => import("./Pages/ShoesPage"));
const BagsPage = React.lazy(() => import("./Pages/BagsPage"));
const WatchesPage = React.lazy(() => import("./Pages/WatchesPage"));

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const modeChanger = () => {
    setDarkMode(!darkMode);
  };

  return (
    <CartProvider>
      <Suspense fallback={<Loading></Loading>}>
        <div className={Classes["st-bg"]}>
          <div
            className={
              darkMode
                ? `${classes["container-dark"]}`
                : `${classes["container-light"]}`
            }
          >
            {cartIsShown && <Cart onHide={hideCartHandler} />}
            <Header onShow={showCartHandler} onMode={modeChanger} />
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/shoes-page" element={<ShoesPage />}></Route>
              <Route path="/bags-page" element={<BagsPage />}></Route>
              <Route path="/watches-page" element={<WatchesPage />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </Suspense>
    </CartProvider>
  );
}

export default App;
