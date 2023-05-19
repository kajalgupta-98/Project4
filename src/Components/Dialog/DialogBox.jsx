// import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Activity from "../activity/Activity";
import Description from "../description/Description";
import Title from "../title/Title";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { darkMode } from "../../recoil/atoms/Atoms";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogBox() {
  const darkModeOn = useRecoilValue(darkMode);
  const navigate = useNavigate();
  return (
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={true}
        PaperProps={
          darkModeOn
            ? {
                sx: {
                  position: "relative",
                  height: "80vh",
                  width: "100vw",
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "0.5rem",
                },
              }
            : {
                sx: {
                  position: "relative",
                  height: "80vh",
                  width: "100vw",
                },
              }
        }
      >
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            width: "5%",
            top: "0.5rem",
            right: "1rem",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <CloseIcon sx={darkModeOn ? { color: "white" } : null} />
        </IconButton>
        <DialogContent>
          <Title />
          <Description />
          <Activity />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
