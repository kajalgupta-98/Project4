import React from 'react'
import style from "./Sidebar.module.css"
import {AiOutlineStar,AiFillStar} from "react-icons/ai"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SideDialog from './SideDialog';
import BasicPopover from './PopOver';
import {AiOutlineClear} from 'react-icons/ai'
import { useRecoilState } from 'recoil';
import CardItem from '../../recoil/atoms/Atoms';


function Sidebar({collapsed, setCollapsed, handleCollapse, changeTheme}) {
  const [boardName, setBoardName]= React.useState("Board Name")
  const [starred, setStarred] =React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data,setData]= useRecoilState(CardItem)

  let board = localStorage.getItem("board name")
  // let star = localStorage.getItem("starred")

  function handleBoardNameChange(e){
    setBoardName(e.target.value)
    localStorage.setItem("board name", e.target.value)
  }
 function handleStar(){

  setStarred(!starred)
 }

 function handleOpen(){
  setOpen(true)
 }
 


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  

  const openPop = Boolean(anchorEl);

 const clearData=()=>{
    setData([]);
    localStorage.setItem('data',null)
 }
  return (
   
  <>
      <div className={style.header}>
        <button className={style.logoBtn}>T</button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4> Trello Workspace</h4>
          <p>Free</p>
        </div>
        <NavigateBeforeIcon onClick={handleCollapse} sx={{ fontSize: "1.2rem" }}/>
        
      </div>

      <hr style={{ width: "100%", height: "0.5px" }} />

      <div className={style.sideBarOptions}>
        <div className={style.optionInner} onClick={clearData} >
          <AiOutlineClear sx={{ fontSize: "1.2rem" }} />
          <p>Clear List</p>
        </div>
      </div>

      <div className={style.sideBarOptions}>
        <div className={style.optionInner}>
          <PersonOutlineOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          <p>Members</p>
        </div>
        <AddOutlinedIcon onClick={handleOpen} sx={{ fontSize: "1.2rem" }} />
      </div>

      <div className={style.sideBarOptions}>
        <div className={style.optionInner}>
          <SettingsOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          <p>Workspace Settings</p>
        </div>
        <ExpandMoreIcon onClick={handleClick} sx={{ fontSize: "1.2rem" }} />
      </div>

  

      <div className={style.sideBarOptions}>
        <h4>Your Boards</h4>
        <div className={style.optionInner}>
          {/* <MoreHorizOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          <AddOutlinedIcon sx={{ fontSize: "1.2rem" }} /> */}
        </div>
      </div>

      <div className={style.sideBarOptions}>
        <input type="text" value={board ? board : boardName} onChange={handleBoardNameChange}/>
        <div className={style.optionInner}>
          <p onClick={handleStar}>          
            {(starred ) ? <AiFillStar /> : <AiOutlineStar/> }
          </p>
        </div>

      </div>
      <SideDialog open={open} setOpen={setOpen}  />
      <BasicPopover openPop={openPop} handleClick={handleClick}  setAnchorEl={setAnchorEl} anchorEl={anchorEl} changeTheme={changeTheme}/>
      

      </>
  )
}

export default Sidebar
