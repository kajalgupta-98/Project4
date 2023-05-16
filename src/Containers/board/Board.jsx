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

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = cardAtom.filter((ele) => {
        if (ele.id === source.droppableId) {
          return ele;
        }
      });

      const destColumn = cardAtom.filter((ele) => {
        if (ele.id === destination.droppableId) {
          return ele;
        }
      });

      const sourceItems = [...sourceColumn[0].task];
      const destItems = [...destColumn[0].task];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      const newArr = cardAtom.map((ele) => {
        if (ele.id === destination.droppableId) {
          const newobj = { ...ele, task: destItems };
          return newobj;
        }
        if (ele.id === source.droppableId) {
          const newobj = { ...ele, task: sourceItems };
          return newobj;
        }
        return ele;
      });

      setCardAtom(newArr);
    } else {
      const [column] = cardAtom.filter((ele) => {
        if (ele.id === source.droppableId) {
          return ele;
        }
      });

      const copiedItems = [...column.task];
      const [removed] = copiedItems.splice(source.index, 1);
      console.log(removed);
      copiedItems.splice(destination.index, 0, removed);

      const newfilterArr = cardAtom.map((ele) => {
        if (ele.id === destination.droppableId) {
          return { ...ele, task: copiedItems };
        }
        return ele;
      });

      setCardAtom(newfilterArr);
    }
  };

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
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <div className={style.board_outer}>
        <div className={style.board}>
          {/* {Object.entries(cardAtom).map((card, index) => {
            return <Card card={card} index={index} key={card.id} />;
          })} */}
          {cardAtom.map((card, index) => {
            console.log(card.id, "card id");
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
