import React, { useState } from "react";
import style from "./Editable.module.css";
import AddIcon from "@mui/icons-material/Add";
import AddCardIcon from "@mui/icons-material/AddCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilValue } from "recoil";
import { darkMode } from "../../recoil/atoms/Atoms";

function Editable({ name, setName, addList, errorText , setErrorText}) {
  const darkModeOn = useRecoilValue(darkMode)
  const [showBtn, setShowBtn] = useState(true);
  const handleClick = () => {
    setShowBtn(!showBtn);
  };

  const handleClose = () => {
    setShowBtn(!showBtn);
    setErrorText("")
  };

  const dislay = showBtn ? (
    <div className={style.container}>
      <p className={`${style.buttonDiv} ${darkModeOn? style.dark : null}`} 
         onClick={handleClick}>
        <AddIcon />
        Add a Card
      </p>
      <span className={`${style.moreIcons} ${darkModeOn? style.dark :null}`}>
        <AddCardIcon />
      </span>
    </div>
  ) : (
    <div className={`${style.btnDiv} ${darkModeOn? style.dark: null}`}>
      <input
        type="text"
        placeholder="Enter a title for this card...."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {errorText && <span style={{color:"red"}}>{errorText}</span>}
      <div className={style.inputBtn}>
        <div className={style.btnAdd}>
          <button onClick={addList}>Add Card</button>
          <span onClick={handleClose}>
            <CloseIcon className={style.closeBtn} />
          </span>
        </div>
        <MoreHorizIcon />
      </div>
    </div>
  );

  return <div>{dislay}</div>;
}

export default Editable;
