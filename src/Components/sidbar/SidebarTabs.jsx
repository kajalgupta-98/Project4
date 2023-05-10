import { Box, Typography } from "@mui/material";
import React from "react";
import { BsClipboard2Data } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";
import { BiCalendar } from "react-icons/bi";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
const SidebarTabs = () => {
  return (
    <Box
      component="div"
      sx={{
        flex: 3,
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem",
        gap: "1rem",
        color: "white",
      }}
    >
      <Typography
        component="div"
        variant="body"
        sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
      >
        <BsClipboard2Data />
        <Typography variant="body1">Boards</Typography>
      </Typography>
      <Typography
        component="div"
        variant="body1"
        sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
      >
        <PersonIcon />
        <Typography variant="body1">Members</Typography>
      </Typography>
      <Typography
        component="div"
        variant="body1"
        sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
      >
        <SettingsIcon />
        <Typography variant="body1">Workspace settings</Typography>
      </Typography>
      <Typography variant="h6" sx={{ display: "flex" }}>
        Workspace views
      </Typography>
      <Typography
        component="div"
        sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
      >
        <CiViewTable />
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
          Table
        </Typography>
      </Typography>
      <Typography
        component="div"
        sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
      >
        <BiCalendar />
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
          Calender
        </Typography>
      </Typography>
      <Typography variant="h6">Your boards</Typography>
    </Box>
  );
};

export default SidebarTabs;
