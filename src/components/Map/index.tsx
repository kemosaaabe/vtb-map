import React from "react";
import {
  YMaps,
  Map,
  GeolocationControl,
  ZoomControl,
} from "@pbe/react-yandex-maps";

import styles from "./styles.module.css";

const YandexMap = () => {
  return (
    <YMaps query={{ apikey: process.env.REACT_APP_API_KEY }}>
      <Map
        className={styles.map}
        defaultState={{
          center: [55.751574, 37.573856],
          zoom: 9,
        }}
      >
        <GeolocationControl
          options={{ float: "right" }}
          data={{ image: "/assets/svg/geo.svg" }}
        />
        <ZoomControl
          options={{ size: "small", position: { right: 10, top: 50 } }}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
