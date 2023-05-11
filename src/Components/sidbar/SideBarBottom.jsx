import { Box, Button } from "@mui/material";
import React from "react";
import { CgTrello } from "react-icons/cg";
const SideBarBottom = () => {
  return (
    <Box
      sx={{
        flex: 1 / 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "1px solid white",
      }}
    >
      <Button variant="contained" sx={{ textTransform: "none", width: "80%" }}>
        <CgTrello /> &nbsp; Try Premium free
      </Button>
    </Box>
  );
};

export default SideBarBottom;
