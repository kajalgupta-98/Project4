import React from "react";
import Navbar from "../Containers/Navbar/Navigation";
import Board from "../Containers/board/Board";
import Sidebar from "../Containers/sidebar/Sidebar";
import style from "../Home/Home.module.css";
const Home = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={style.HomeContainer}>
      <div className={style.Navbar}>
        <Navbar />
      </div>
      <div className={style.container}>
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          handleCollapse={handleCollapse}
        />

        <div
          className={` ${style.boardContainer} ${
            collapsed ? style.collapsed : null
          }`}
        >
          <Board id="drop" />
        </div>
      </div>
    </div>
  );
};

export default Home;
