import React, { useState } from "react";
import styles from "../Drawer.module.scss";

function Universal(props) {
  const { item, isFavorite, toggleFavorite } = props;

  const onClick = () => {
    toggleFavorite(item.id);
  };
  return (
    <div className={styles.doubleBlock}>
      <div className={styles.leftBlock_one}>
        <img src={item.image} />
      </div>
      <div className={styles.rightBlock_one}>
        <div>{item.name}</div>
        <div className={styles.toBasket}>
          <div>{item.price}</div>
          <button>В корзину</button>
          <img
            src={
              isFavorite ? "../img/favoritedActive.png" : "../img/favorited.png"
            }
            onClick={onClick}
            width="50px"
            height="50px"
          />
        </div>
        <div>{item.descr}</div>
      </div>
    </div>
  );
}

export default Universal;
