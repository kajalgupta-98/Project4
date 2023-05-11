import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import style from './Button.module.css'
import AddCardIcon from '@mui/icons-material/AddCard';
function Button() {
  return (
    <div className={style.mainBtnDiv}>
        <div className={style.addCardBtn}>
      <AddIcon/>
      <span>Add Card</span>
        </div>
        <div className={style.addTaskIcon}>
        <AddCardIcon/>
        </div>
    </div>
  )
}

export default Button
