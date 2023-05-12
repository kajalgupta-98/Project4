import Navbar from "../Containers/Navbar/Navigation";
import Board from "../Containers/board/Board";
import Sidebar from "../Containers/sidebar/Sidebar";
import style from "../Home/Home.module.css";
const Home = () => {
  return (
    <div className={style.HomeContainer}>
      <div className={style.Navbar}>
        <Navbar />
      </div>
      <div className={style.container}>
        <Sidebar/>
        <div className={style.boardContainer} >
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Home;
