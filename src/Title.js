import React from "react";
import styles from "./Drawer.module.scss";

function Title() {
  return (
    <div className={`${styles.containerTitle}`}>
      <img
        className={`${styles.sale}`}
        src="/img/header-title-sale.png"
        alt=""
      />
      <p className={`${styles.infoSale}`}>
        ПИТАЙТЕСЬ РАЗНООБРАЗНО И КОПИТЕ <span>СКИДКУ</span> до 10%
      </p>
      <p className={`${styles.buttonSale}`}>Получить скидку</p>
    </div>
  );
}

export default Title;
