// import React from "react";
import Card from "../../Components/card/Card";
import style from "./Board.module.css";
import AddList from '../../Components/addList/AddList';
import CardItem from '../../recoil/atoms/Atoms';
import {useRecoilState} from 'recoil';
function Board() {
 const [cardAtom,setCardAtom]= useRecoilState(CardItem);
 console.log(cardAtom)
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
