import React from "react";
import Card from "../../Components/card/Card";
import style from "./Board.module.css";
import AddList from "../../Components/addList/AddList";
import CardItem from "../../recoil/atoms/Atoms";
import { useRecoilState } from "recoil";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
function Board() {
  const [cardAtom, setCardAtom] = useRecoilState(CardItem); // This is recoil state to get values and setter function for read and update the list
  const [listTitle, setListTitle] = React.useState(""); // This is the state from set the title of the list as well as we can change also.
  const [errorText, setErrorText] = React.useState(""); // This is the error state for the set error value to display for user

  const onDragEnd = (result) => {
    // This the onDragEnd function for do the operation on Drag and drop lists and tasks in respective lists.
    if (!result.destination) return;
    const { source, destination } = result;

    if (result.type == "COLUMN") {
      const newArr = [...cardAtom];
      const [removed] = newArr.splice(source.index, 1);

      newArr.splice(destination.index, 0, removed);
      setCardAtom(newArr);
      localStorage.setItem("data", JSON.stringify(newArr)); // After updating the column list our localstorage will update
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      // This is condition for our source and destination id not same
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

      const comments = [...removed.Comment];

      comments.unshift({
        activity: `move this card from ${sourceColumn[0].title} to ${destColumn[0].title}`,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      });

      destItems.splice(destination.index, 0, {
        ...removed,
        listName: destColumn[0].title,
        Comment: comments,
      });

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
      // console.log(copiedItems)

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

  function handleAddList() {      // This is handleAddList function to set our item in our recoil state
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
      setErrorText("");
      setListTitle("");
    } else {
      // setError(true)
      setErrorText("enter the title for list");
    }
  }

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      {/*This is DragDropContext component from react-beautiful-dnd library this will help us to wrap all the draggable and droppable functionality inside the Board component */}
      <div>
        <div className={style.board_outer}>
          <div className={style.board}>
            {/* This is the Droppable component from where we can drop our list */}
            <Droppable droppableId="board" type="COLUMN" direction="horizontal">
              {(provided) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={style.dragCard}
                  >
                    {/* This is the all lists are mapping and display in our UI in the form of Lists*/}
                    {cardAtom.map((card, index) => {
                      return <Card card={card} index={index} key={card.id} />;
                    })}
                  </div>
                );
              }}
            </Droppable>
              {/* This is the add list component to add new list inside the state */}
            <AddList
              handleAddList={handleAddList} 
              listTitle={listTitle}
              setListTitle={setListTitle}
              errorText={errorText}
              setErrorText={setErrorText}
            />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default Board;
