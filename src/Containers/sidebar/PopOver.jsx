import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkMode, theme } from '../../recoil/atoms/Atoms';
import { Button } from '@mui/material';
// import Button from '@mui/material/Button';

export default function BasicPopover({openPop, changeTheme,setAnchorEl, anchorEl}) {
    const [darkModeOn, setDarkModeOn] = useRecoilState(darkMode)
    const themes = useRecoilValue(theme)
    const [checked, setChecked] = React.useState(false);
    const id = open ? 'simple-popover' : undefined;

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setDarkModeOn(!darkModeOn)
    // handleClosePop()
  };
  const handleClosePop = () => {
    setAnchorEl(null);
  };

 
  return (
    <div>
      <Popover
        id={id}
        open={openPop}
        anchorEl={anchorEl}
        onClose={handleClosePop}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
       
      >
        <Typography  sx={darkModeOn? {backgroundColor:"black", color:"white", p:2}: {p:2}}>
        <Button  variant ="contained" onClick={changeTheme}
                  sx={darkModeOn? {backgroundColor:"#707070", color:"white", marginBottom:"1rem"}: {backgroundColor:"white", color:"black",marginBottom:"1rem"}}>Change Theme</Button>
        {/* <select onChange={handleThemeChange}> */}
            {/* <option>first</option>
            <option>clone</option>
            <option>MImage</option>
            <option>gexupdate</option>
            <option>Webb</option> */}
            {/* {themes.map((item)=> <option>{item}</option>)} */}
        {/* </select> */}
            <br/>
            <strong>Dark Mode</strong>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </Typography>
      </Popover>
    </div>
  );
}