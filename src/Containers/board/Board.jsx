import React from "react";
import Card from "../../Components/card/Card";
import style from "./Board.module.css";
import AddList from "../../Components/addList/AddList";
import CardItem from "../../recoil/atoms/Atoms";
import { useRecoilState } from "recoil";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
function Board() {
  const [cardAtom, setCardAtom] = useRecoilState(CardItem);
  const [listTitle, setListTitle] = React.useState("");
  const onDragEnd = ({ source, destination }) => {};
  function handleAddList(e) {
    if (listTitle.length !== 0) {
      setCardAtom([
        ...cardAtom,
        {
          id: uuidv4(),
          title: `${listTitle}`,
          date: new Date(),
          task: [],
        },
      ]);
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={style.board_outer}>
        <div className={style.board}>
          {cardAtom.map((card, index) => {
            return <Card card={card} index={index} key={card.id} />;
          })}
          <AddList
            handleAddList={handleAddList}
            listTitle={listTitle}
            setListTitle={setListTitle}
          />
        </div>
      </div>
    </DragDropContext>
  );
}

export default Board;
