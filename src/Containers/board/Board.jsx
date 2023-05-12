import React from "react";
import Card from "../../Components/card/Card";
import style from "./Board.module.css";
import Editable from "../../Components/editable/Editable";

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
        <Editable />
      </div>
    </div>
  );
}

export default Board;
