import Image from "next/image";
import style from "./page.module.css";
import About from "./components/about";
import Imagen from "./components/imagen";
import Stats from "./components/stats";

function Home() {
  return (
        <div className={style["main"]}>
          <Imagen/>
          <About/>
          <Stats/>
        </div>
  );
}
export default Home;
