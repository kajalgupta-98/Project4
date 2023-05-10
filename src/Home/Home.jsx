import { Box } from "@mui/material";
import Sidebar from "../Containers/sidebar/Sidebar";
import milky from "../utils/clone.jpg";
const Home = () => {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${milky})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        height: "100vh",
      }}
    >
      <Sidebar />
    </Box>
  );
};

export default Home;
