import { Box } from "@mui/material";
import Sidebar from "../Containers/sidebar/Sidebar";
import milky from "../utils/clone.jpg";
import Style from "../Home/Home.module.scss";
import Work from "../Components/Work/Work";
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
      <Work />
    </Box>
  );
};

export default Home;
