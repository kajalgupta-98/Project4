import Navbar from "../Containers/Navbar/Navigation";
import Board from "../Containers/board/Board";
import style from "../Home/Home.module.css";
const Home = () => {
  return (
    <div className={style.HomeContainer}>
      <div className={style.Navbar}>
        <Navbar />
      </div>
      <div className={style.container}>
        <div></div>
        <div className={style.boardContainer}>
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Home;
