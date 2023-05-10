import { Box, Button } from "@mui/material";
import React from "react";

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
        Try Premium free
      </Button>
    </Box>
  );
};

export default SideBarBottom;
