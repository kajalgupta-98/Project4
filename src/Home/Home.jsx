import React from "react"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
        
        <div className={` ${style.sideBarContainer} ${collapsed ? style.collapsed : null}`}>
          {collapsed ?
            <button id={style.expandBtn} onClick={handleCollapse}>
              <NavigateNextIcon sx={{ fontSize: "1.5rem" }} />
            </button> :
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} handleCollapse={handleCollapse} />
          }
        </div>

        <div className={` ${style.boardContainer} ${collapsed ? style.collapsed : null}`}>
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Home;
