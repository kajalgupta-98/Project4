
import React from 'react';
import style from './Card.module.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Editable from '../editable/Editable'
function Card() {
  return (
    <div className={style.card}>
    <div className={style.cardHeading}>
        <h1>Todo</h1>
        <span>
        <MoreHorizIcon/>
        </span>
        
    </div>

    <div className={style.tasksDiv}>
            all the card
        </div>

        <div className={style.editableDiv}>
           <Editable />
        </div>

      


    </div>
  )
}

export default Card
