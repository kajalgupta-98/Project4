import React from "react";
import style from "./addList.module.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilValue } from "recoil";
import { darkMode } from "../../recoil/atoms/Atoms";

// This is Add list component
const AddList = ({
  handleAddList,
  listTitle,
  setListTitle,
  errorText,
  setErrorText,
}) => {
  const [showInputBox, setShowInputBox] = React.useState(false);      // This is the state set our input box according to user click
  const darkModeOn = useRecoilValue(darkMode);                         // This return a true or flase value as per value our list background color change

  function handleClose() {
    setShowInputBox(false);
    setErrorText("");
  }
  return (
    <>
      {showInputBox ? (
        <div
          className={style.addList}
          style={
            darkModeOn ? { backgroundColor: "black", color: "white" } : null
          }
        >
          <input
            type="text"
            placeholder="Enter List Title..."
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            style={
              darkModeOn
                ? { backgroundColor: "transparent", color: "white" }
                : null
            }
          />
          {errorText && <span style={{ color: "red" }}>{errorText}</span>}

          <span>
            <button onClick={handleAddList}>Add List</button>
            <CloseIcon onClick={handleClose} />
          </span>
        </div>
      ) : (
        <div
          className={style.addListContainer}
          onClick={() => setShowInputBox(true)}
        >
          <AddOutlinedIcon />
          <p>Add Another List</p>
        </div>
      )}
    </>
  );
};

export default AddList;
