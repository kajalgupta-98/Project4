import { Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import SideTopheading from "../../Components/sidbar/SideTopheading";
import SidebarTabs from "../../Components/sidbar/SidebarTabs";
import SideBarBottom from "../../Components/sidbar/SideBarBottom";
function Sidebar() {
  const [show, setShow] = useState(true);
  const spring = useSpring({
    translateX: show ? 0 : -280,
  });
  return (
    <animated.div
      style={{
        backgroundColor: "gray",
        height: "100%",
        maxHeight: "fit-content",
        width: "20%",
        ...spring,
      }}
    >
      <Box
        component="div"
        sx={{
          height: "100%",
          padding: "1rem 0rem 0rem 0.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <SideTopheading show={show} setShow={setShow} />
        <SidebarTabs />
        <SideBarBottom />
      </Box>
    </animated.div>
  );
}

export default Sidebar;
