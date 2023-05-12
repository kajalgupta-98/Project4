// import React from "react";
import Card from "../../Components/card/Card";
import style from "./Board.module.css";
import AddList from '../../Components/addList/AddList';

function Board() {
 
  return (
    <div className={style.board_outer}>
      <div className={style.board}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
       <AddList/>
      </div>
    </div>
  );
}

export default Board;
