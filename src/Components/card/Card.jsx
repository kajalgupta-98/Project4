import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import style from './Card.module.css'
import Button from '../button/Button';
import Task from '../task/Task';

function Card() {
  return (
    <div className={style.cardBox}>
      <div className={style.innerBox}>
        <h1>
           Todo
        </h1>
            <MoreHorizIcon/>
      </div>
      <Task task={'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}/>
      <Button/>
    </div>
  )
}

export default Card
