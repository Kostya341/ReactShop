import React from "react";
import styles from "./Drawer.module.scss";

function Categories() {
  return (
    <div className={`${styles.HeaderСontinued}`}>
      <div className={`${styles.Categories}`}>
        <div>
          <img src="/img/apple.svg" alt="" />
          <p>Супермаркет</p>
        </div>
        <div>
          <img src="/img/pizza.svg" alt="" />
          <p>Кулинария</p>
        </div>
        <div>
          <img src="/img/fresh.svg" alt="" />
          <p>Заморозка</p>
        </div>
        <div>
          <img src="/img/another.svg" alt="" />
          <p>Другое</p>
        </div>
        <div>
          <img src="/img/sales.svg" alt="" />
          <p>Акции</p>
        </div>
        <div>
          <img src="/img/stores.svg" alt="" />
          <p>Магазины</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
