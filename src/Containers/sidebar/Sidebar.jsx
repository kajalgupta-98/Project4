// import React from 'react'
import style from "./Sidebar.module.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import Divider from '@mui/material/Divider';


function Sidebar() {
  return (
    <div className={style.sideBarContainer}>
      <div className={style.header}>
        <button className={style.logoBtn}>T</button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4> Trello Workspace</h4>
          <p>Free</p>
        </div>
        <NavigateBeforeIcon sx={{ fontSize: "1.2rem" }}/>
      </div>

      <hr style={{ width: "100%", height: "0.5px" }} />

      <div className={style.sideBarOptions}>
        <div className={style.optionInner}>
          <TableChartOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          <p>Boards</p>
        </div>
      </div>

      <div className={style.sideBarOptions}>
        <div className={style.optionInner}>
          <PersonOutlineOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          <p>Members</p>
        </div>
        <AddOutlinedIcon sx={{ fontSize: "1.2rem" }} />
      </div>

      <div className={style.sideBarOptions}>
        <div className={style.optionInner}>
          <SettingsOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          <p>Workspace Settings</p>
        </div>
        <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} />
      </div>

      <h4 className={style.sideBarOptions}>WorkSpace Views</h4>

      <div className={style.sideBarOptions}>
        <div className={style.optionInner}>
          <TableChartOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          <em> Table</em>
        </div>
        <MoreHorizOutlinedIcon sx={{ fontSize: "1.2rem" }} />
      </div>

      <div className={style.sideBarOptions}>
        <div className={style.optionInner}>
          <CalendarMonthOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          <em> Calendar</em>
        </div>
        <MoreHorizOutlinedIcon sx={{ fontSize: "1.2rem" }} />
      </div>

      <div className={style.sideBarOptions}>
        <h4>Your Boards</h4>
        <div className={style.optionInner}>
          <MoreHorizOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          <AddOutlinedIcon sx={{ fontSize: "1.2rem" }} />
        </div>
      </div>


    </div>
  )
}

export default Sidebar
