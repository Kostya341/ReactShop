import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./Drawer.module.scss";

export default function Maps() {
  const defaultState = {
    center: [48.744446, 44.51915],
    zoom: 16,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} width="600px" height="500px">
        <Placemark geometry={[48.744446, 44.51915]} />
      </Map>
    </YMaps>
  );
}
