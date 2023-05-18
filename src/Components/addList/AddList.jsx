import React from "react";
import style from "./addList.module.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilValue } from "recoil";
import {darkMode} from "../../recoil/atoms/Atoms"

const AddList = ({ handleAddList, listTitle, setListTitle , errorText}) => {
  const [showInputBox, setShowInputBox] = React.useState(false);
  const darkModeOn = useRecoilValue(darkMode)
  return (
    <>
      {showInputBox ? (
        <div className={style.addList} 
             style={darkModeOn&& {backgroundColor:"black", color:"white"}}>
          <input
            type="text"
            placeholder="Enter List Title..."
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            style={darkModeOn&& {backgroundColor:"transparent", color:"white"}}
          />
          {errorText && <span style={{color:"red"}}>{errorText}</span>}

          <span>
            <button onClick={handleAddList}>Add List</button>
            <CloseIcon onClick={() => setShowInputBox(false)} />
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
