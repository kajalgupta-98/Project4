import { Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import SideTopheading from "../../Components/sidbar/SideTopheading";
import SidebarTabs from "../../Components/sidbar/SidebarTabs";
import SideBarBottom from "../../Components/sidbar/SideBarBottom";
import Style from "../sidebar/Sidebar.module.scss";
import { RxChevronRight } from "react-icons/rx";
function Sidebar() {
  const [show, setShow] = useState(true);
  const spring = useSpring({
    translateX: show ? 0 : -10,
    width: show ? "20%" : "2%",
  });
  return (
    <animated.div
      style={{
        position: "relative",
        backgroundColor: "gray",
        height: "100%",
        maxHeight: "fit-content",
        ...spring,
      }}
    >
      {!show && (
        <RxChevronRight
          onClick={() => {
            setShow(true);
          }}
          size={28}
          style={{
            position: "absolute",
            top: 20,
            right: 0,
            borderRadius: "50%",
            border: "1px solid white",
            backgroundColor: "gray",
          }}
        />
      )}

      <Box
        component="div"
        className={Style.root}
        style={{ display: show ? "" : "none" }}
      >
        <SideTopheading setShow={setShow} />
        <SidebarTabs />
        <SideBarBottom />
      </Box>
    </animated.div>
  );
}

export default Sidebar;
