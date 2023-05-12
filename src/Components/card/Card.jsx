import React from "react";
import style from "./Card.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Editable from "../editable/Editable";
import Task from "../task/Task";
import CardItem from "../../recoil/atoms/Atoms";
import { useRecoilState } from "recoil";
function Card(props) {
  const { id, title, date, task } = props.card;
  const [tasktitle, setTasktitle] = React.useState("");
  const [taskArr, setTaskArr] = useRecoilState(CardItem);
  const addTask = () => {
    if (!tasktitle) {
      return -1;
    }
 

            setTaskArr(...taskArr,{
              id: Math.random(),
              name: tasktitle,
              comments: "",
              date: Date.now(),
              cardName: "element.title",
            })

    // const index =taskArr.findIndex(ele=>)

    // const filterValue = taskArr.filter((element) => {

    //   if (element.id === id) {
    //     // return {
    //     //   // ...element,
    //     //   // task: task.push({
    //     //   //   id: Math.random(),
    //     //   //   name: tasktitle,
    //     //   //   comments: "",
    //     //   //   date: Date.now(),
    //     //   //   cardName: element.title,
    //     //   // }),
    //     // };
    //     console.log(element)
    //   }
    //   // return element;
    // });
    // settaskName([...taskName, filterValue]);
  console.log(taskArr);

  };

  return (
    <div className={style.card}>
      <div className={style.cardHeading}>
        <span>{title}</span>
        <span>
          <MoreHorizIcon />
        </span>
      </div>
      <div>
        <Task />
      </div>

      <div className={style.editableDiv}>
        <Editable
          tasktitle={tasktitle}
          setTasktitle={setTasktitle}
          addTask={addTask}
        />
      </div>
    </div>
  );
}

export default Card;
