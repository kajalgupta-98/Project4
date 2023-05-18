import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { BsCircleHalf, BsTrello } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { Button } from "@mui/material";
import BasicMenu from "../../Components/selector/Selector";
import Tooltip from "@mui/material/Tooltip";
import { useRecoilState } from "recoil";
import { darkMode } from "../../recoil/atoms/Atoms";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [darkModeOn, setDarkModeOn] = useRecoilState(darkMode)
  function changeMode(){
    setDarkModeOn(!darkModeOn)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: 0 }}>
        <Toolbar
          sx={{
            backgroundColor: "#424242",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: {
              xs: "1rem",
              sm: "1rem",
            },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <CgMenuGridR />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }}
          >
            <BsTrello style={{ marginRight: "0.5rem", marginTop: "0.5rem" }} />
            Trello
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              paddingLeft: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <BasicMenu
              title="Workspace"
              array={[
                { text: "Trello Workspace" },
                { text: "Trello Workspace" },
              ]}
            />
            <BasicMenu title="Recent" array={[{ text: "Trello Workspace" }]} />
            <BasicMenu title="Starred" array={[{ text: "Trello Workspace" }]} />
            <BasicMenu
              title="Templetes"
              array={[{ text: "Trello Workspace" }]}
            />
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#757575",
                "&:hover": {
                  backgroundColor: "#757575",
                },
              }}
            >
              Create
            </Button>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <HelpOutlineIcon />
              </Badge>
            </IconButton>
            <Tooltip title={darkModeOn? "Light mode" : "Dark mode"}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={changeMode}
              >
                <Badge badgeContent={0} color="error">
                  <BsCircleHalf size={20} />
                </Badge>
              </IconButton>
            </Tooltip>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
