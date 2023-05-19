import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navbar from "../Containers/Navbar/Navigation";
import Board from "../Containers/board/Board";
import Sidebar from "../Containers/sidebar/Sidebar";
import { Button } from "@mui/material";
import style from "../Home/Home.module.css";
import first from "../utils/first.jpeg";
import clone from "../utils/clone.jpg";
import MImage from "../utils/MImage.jpg";
import gexupdate from "../utils/gxupdate.jpg";
import Webb from "../utils/Webb.jpg";

const Home = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [Theme, setTheme] = React.useState(0);
  const backgroundImages = [first, clone, MImage, gexupdate, Webb];
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const changeTheme = () => {
    if (backgroundImages.length - 1 > Theme) {
      setTheme(Theme + 1);
    } else {
      setTheme(0);
    }
  };
  return (
    <div className={style.HomeContainer}>
      <Button
        onClick={changeTheme}
        variant="contained"
        sx={{
          position: "fixed",
          top: 8,
          left: 180,
          zIndex: 2,
          textTransform: "none",
          backgroundColor: "#757575",
          "&:hover": {
            backgroundColor: "#757575",
          },
        }}
      >
        Change background
      </Button>
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
              changeTheme={changeTheme}
            />
          )}
        </div>

        <div
          className={` ${style.boardContainer} ${
            collapsed ? style.collapsed : null
          }`}
          style={{ backgroundImage: `url(${backgroundImages[Theme]})` }}
        >
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Home;
