import React from "react";
import Card from "../../Components/card/Card";
import style from "./Board.module.css";
import AddList from "../../Components/addList/AddList";
import CardItem from "../../recoil/atoms/Atoms";
import { useRecoilState } from "recoil";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
function Board() {
  const [cardAtom, setCardAtom] = useRecoilState(CardItem);
  const [listTitle, setListTitle] = React.useState("");

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (result.type == "COLUMN") {
        const newArr = [...cardAtom];
       const [removed]= newArr.splice(source.index,1);
       console.log(removed)
       newArr.splice(destination.index,0,removed);
       setCardAtom(newArr)
       localStorage.setItem('data',JSON.stringify(newArr))
       return;
    }


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
      localStorage.setItem("data", JSON.stringify(newArr));
    } else {
      const [column] = cardAtom.filter((ele) => {
        if (ele.id === source.droppableId) {
          return ele;
        }
      });

      const copiedItems = [...column.task];
      const [removed] = copiedItems.splice(source.index, 1);
      // console.log(removed);
      copiedItems.splice(destination.index, 0, removed);

      const newfilterArr = cardAtom.map((ele) => {
        if (ele.id === destination.droppableId) {
          return { ...ele, task: copiedItems };
        }
        return ele;
      });

      setCardAtom(newfilterArr);
      localStorage.setItem("data", JSON.stringify(newfilterArr));
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
      localStorage.setItem(
        "data",
        JSON.stringify([
          ...cardAtom,
          {
            id: uuidv4(),
            title: `${listTitle}`,
            date: new Date(),
            task: [],
          },
        ])
      );
    }
    setListTitle("");
  }

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <div>
        <div className={style.board_outer}>
          <div className={style.board}>
            <Droppable droppableId="board" type="COLUMN" direction="horizontal">
              {(provided) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={style.dragCard}
                  >
                    {cardAtom.map((card, index) => {
                      console.log(card.id, "card id");
                      return <Card card={card} index={index} key={card.id} />;
                    })}
                  </div>
                );
              }}
            </Droppable>

            <AddList
              handleAddList={handleAddList}
              listTitle={listTitle}
              setListTitle={setListTitle}
            />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default Board;
