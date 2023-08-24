import React from "react";
import styles from "./Drawer.module.scss";

function FreeShopping() {
  return (
    <div className={styles.field}>
      <div className={styles.fld}>
        <div>
          <p>БЕСПЛАТНАЯ ДОСТАВКА + СКИДКА 10%</p>
        </div>
        <div className={styles.btn}>
          <a className={styles.button}>Получить промокод</a>
        </div>
      </div>
      <div className={styles.fristOrder}>
        <p>первого заказа</p>
        <p>на заказы кулинарии</p>
      </div>
    </div>
  );
}

export default FreeShopping;
