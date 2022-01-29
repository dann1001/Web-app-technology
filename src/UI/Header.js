import CartButton from "../Buttons/CartButton";
import { IoMoon, IoSunny, IoSearch } from "react-icons/io5";
import classes from "./Header.module.css";
import Card from "./Card";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const [navBar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);

  const searchOpenerHandler = () => {
    setSearchOpen(!searchOpen);
  };
  const menuOpener = () => {
    setResponsiveMenu(!responsiveMenu);
  };

  const backgroundChanger = () => {
    if (window.scrollY >= 122) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", backgroundChanger);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  const themeChanger = () => {
    props.onMode();
    toggleHandler();
  };

  return (
    <Card>
      <header>
        <nav className={navBar ? `${classes.active}` : ""}>
          <h1>ZUREA</h1>
          {!searchOpen && (
            <ul>
              <li className={classes.links}>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.activelink : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.activelink : ""
                  }
                  to="/bags-page"
                >
                  Bags
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.activelink : ""
                  }
                  to="/shoes-page"
                >
                  Shoes
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.activelink : ""
                  }
                  to="/watches-page"
                >
                  Watches
                </NavLink>
              </li>
            </ul>
          )}
          {!searchOpen && (
            <div
              id="mobile-nav"
              className={classes["mobile-nav"]}
              onClick={menuOpener}
            >
              Menu
              {responsiveMenu && (
                <ul className={classes["nav-menu"]}>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? classes.mobilelink : ""
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? classes.mobilelink : ""
                      }
                      to="/bags-page"
                    >
                      Bags
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? classes.mobilelink : ""
                      }
                      to="/shoes-page"
                    >
                      Shoes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? classes.mobilelink : ""
                      }
                      to="/watches-page"
                    >
                      Watch
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          )}
          <div className={classes.options}>
            {searchOpen && (
              <input
                type="search"
                className={classes.input}
                placeholder="search for items"
              ></input>
            )}
            <IoSearch className={classes.icon} onClick={searchOpenerHandler} />
            {!searchOpen && (
              <div className={classes.toggle} onClick={themeChanger}>
                <div
                  className={`${classes.icomode} ${
                    toggle ? `${classes.actives}` : ""
                  }`}
                />
                <IoMoon className={classes.moon} />
                <IoSunny className={classes.sun} />
              </div>
            )}
            {!searchOpen && <CartButton onShow={props.onShow} />}
          </div>
        </nav>
      </header>
    </Card>
  );
};

export default Header;
