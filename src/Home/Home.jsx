import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Navbar from "../Containers/Navbar/Navigation";
import Board from "../Containers/board/Board";
import Sidebar from "../Containers/sidebar/Sidebar";
import style from "../Home/Home.module.css";
import { theme } from "../recoil/atoms/Atoms";
import { useRecoilValue } from "recoil";

const Home = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [Theme, setTheme] = React.useState(0);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const newTheme = useRecoilValue(theme);
  const changeTheme = () => {
    if (newTheme.length - 1 > Theme) {
      setTheme(Theme + 1);
    } else {
      setTheme(0);
    }
  };
  return (
    <div className={style.HomeContainer}>
      <div className={style.Navbar}>
        <Navbar changeTheme={changeTheme} />
      </div>
      <div className={style.container}>
        <div
          className={` ${style.sideBarContainer} ${
            collapsed ? style.collapsed : null
          }`}
        >
          {collapsed ? (
            <button id={style.expandBtn} onClick={handleCollapse}>
              <NavigateNextIcon sx={{ fontSize: "1.5rem" }} />
            </button>
          ) : (
            <Sidebar
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              handleCollapse={handleCollapse}
            />
          )}
        </div>

        <div
          className={` ${style.boardContainer} ${
            collapsed ? style.collapsed : null
          }`}
          style={{ backgroundImage: `url(${newTheme[Theme]})` }}
        >
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Home;
