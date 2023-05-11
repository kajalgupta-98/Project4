import { Box} from "@mui/material";
import Sidebar from "../Containers/sidebar/Sidebar";
import milky from "../utils/clone.jpg";
import Style from "../Home/Home.module.scss";
import DialogBox from "../Components/Dialog/DialogBox";
const Home = () => {
  return (
    <Box
      component="div"
      className={Style.root}
      sx={{
        backgroundImage: `url(${milky})`,
      }}
    >
      <Sidebar />
      <DialogBox />
    </Box>
  );
};

export default Home;
