import YandexMap from "../../components/Map";
import Sidebar from "../../components/Sidebar";

import styles from "./styles.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <YandexMap />
      <Sidebar />
    </div>
  );
};

export default Main;
