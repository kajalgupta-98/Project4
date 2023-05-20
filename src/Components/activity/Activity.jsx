import { useState } from "react";
import { RxActivityLog } from "react-icons/rx";
import style from "./Activity.module.css";
import CardItem, { darkMode } from "../../recoil/atoms/Atoms";
import { taskDetails } from "../../recoil/atoms/Atoms";
import { useRecoilState, useRecoilValue } from "recoil";

function Activity() {
  const darkModeOn = useRecoilValue(darkMode);
  const [editer, setEditer] = useState(true);
  const [value, setValue] = useState("");
  const [cardArr, setcardArr] = useRecoilState(CardItem);
  const cardID = useRecoilValue(taskDetails);
  const mainIndex = cardArr.findIndex((ele) => ele.id === cardID.mainId);
  const taskArr = [...cardArr[mainIndex].task];
  const index = taskArr.findIndex((ele) => ele.id === cardID.id);
  const [showDetails, setShowDetails] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setEditer(false);
  };

  const handleAddComments = () => {
    if (!value) {
      setErrorText("Enter something");
      return;
    }

    const comments = [...taskArr[index].Comment];
    const eleObj = { ...taskArr[index] };
    comments.unshift({
      activity: value,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    });
    const newOBj = { ...eleObj, Comment: comments };

    const mapTaskArr = taskArr.map((ele) => {
      if (ele.id === cardID.id) {
        return newOBj;
      }
      return ele;
    });

    const newMainArr = cardArr.map((ele) => {
      if (ele.id === cardID.mainId) {
        return {
          ...ele,
          task: mapTaskArr,
        };
      }
      return ele;
    });
    setcardArr(newMainArr);
    localStorage.setItem("data", JSON.stringify(newMainArr));

    setEditer(true);
    setValue("");
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.activityDiv}>
          <RxActivityLog />
          <h3>Activity</h3>
        </div>
        <button className={style.showBtn} onClick={handleShowDetails}>
          {showDetails ? "Hide details" : "Show details"}
        </button>
      </div>
      <div
        className={style.editableDiv}
        style={{ alignItems: !editer ? "self-start" : "center" }}
      >
        <h3 className={style.headingUsername}>PR</h3>
        {editer ? (
          <span className={style.editedArea} onClick={handleClick}>
            Write a comment...
          </span>
        ) : (
          <div className={style.tetContainDiv}>
            <textarea
              style={
                darkModeOn
                  ? {
                      backgroundColor: "transparent",
                      color: "white",
                      borderColor: "white",
                    }
                  : null
              }
              cols="58"
              rows="4"
              value={value}
              onChange={handleChange}
              placeholder="Enter Comments here...."
            />
            {errorText && <span style={{ color: "red" }}>{errorText}</span>}
            <div className={style.saveBtnDiv}>
              <button onClick={handleAddComments}>Save</button>
              <input type="checkbox" />
              <p>Watch</p>
            </div>
          </div>
        )}
      </div>
      <div className={style.comments}>
        {showDetails
          ? taskArr[index].Comment.map((ele, ind) => {
              return (
                <div className={style.comment} key={ind}>
                  <h3 className={style.userProfile}>PR</h3>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                    }}
                  >
                    <span className={style.activityBox}>
                      <p style={{ fontSize: "18px" }}>{ele.activity}</p>
                      <span className={style.time}>Time:{ele.time}</span>
                      {/* <span className={style.time}>Time:{new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()}</span> */}
                    </span>
                  </span>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Activity;
