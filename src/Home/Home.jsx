import React, { useState } from "react";
import Sidebar from "../Containers/sidebar/Sidebar";
import Navbar from "../Containers/navbar/Navbar";
import Board from "../Containers/board/Board";
import style from './Home.module.css'



function Home() {
  return (
    <div className={style.HomeContainer}>
      <div className={style.Navbar}>
        <Navbar />
      </div>
      <div className={style.container}>
        <div>
          <Sidebar />
        </div>
        <div className={style.boardContainer} >
          <Board />
        </div>
      </div>
    </div>
  );
}

export default Home;
