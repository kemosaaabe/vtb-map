import { YMaps } from "@pbe/react-yandex-maps";

import YandexMap from "../../components/Map";

import styles from "./styles.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <YandexMap />
    </div>
  );
};

export default Main;
