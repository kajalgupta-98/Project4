import React from "react";
import Card from "../../Components/card/Card";
import style from "./Board.module.css";
import AddList from '../../Components/addList/AddList';
import CardItem from '../../recoil/atoms/Atoms';
import {useRecoilState} from 'recoil';


function Board() {
 const [cardAtom,setCardAtom]= useRecoilState(CardItem);
 const [listTitle, setListTitle] = React.useState("")

 function handleAddList(e){

  if(listTitle.length!==0){

    setCardAtom([...cardAtom, {
      id:cardAtom.length+1,
      title:`${listTitle}`,
      date:new Date(),
      task:[
          
      ]
    }])
  }
}

  return (
    <div className={style.board_outer}>
      <div className={style.board}>
        {cardAtom.map((card,index)=>{
       
         return <Card card={card} index={index} key={card.id} />
        })}
       <AddList handleAddList={handleAddList} listTitle={listTitle} setListTitle={setListTitle} />
      </div>
    </div>
  );
}

export default Board;
