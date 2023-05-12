import React, { useState } from 'react'
import style from './Title.module.css'
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import { useRecoilState } from 'recoil';
import { taskDetails } from '../../recoil/atoms/Atoms';

function Title() {
  // const [title, setTitle] = useState('')
  const [taskTitle, setTaskTitle] = useRecoilState(taskDetails)

  function addTaskTitle(e){
    const obj = {...taskTitle}
    obj.title = e.target.value
    setTaskTitle(obj)
  }
console.log(taskTitle.title)
  return (
    <div className={style.title_div}>
      <VideoLabelIcon fontSize='small'/>
      <div className={style.title_text}>
      <textarea type="text" value={taskTitle.title} onChange={addTaskTitle} className={style.title_box}/>
      <span>in list Todo</span>
      </div>
    </div>

  )
}

export default Title
