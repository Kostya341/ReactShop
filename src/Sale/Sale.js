import React, { useState } from "react";
import styles from "../Drawer.module.scss";

function Sale({ ItemDiscount }) {
  let arr = ItemDiscount;
  const [arrNow, setArrNow] = useState(arr);
  const arrowRight = () => {
    const newArr = [...arrNow];
    const last = newArr.pop();
    newArr.unshift(last);
    setArrNow(newArr);
  };
  const arrowLeft = () => {
    const newArr = [...arrNow];
    const last = newArr.shift();
    newArr.push(last);
    setArrNow(newArr);
  };

  return (
    <div className={styles.DiscountGroup}>
      <div className={styles.title}>
        <div className={styles.lookSale}>
          <h2>Скидки</h2>
          <a>Смотреть всё</a>
        </div>
        <div className={styles.switch}>
          <img
            onClick={arrowLeft}
            className={styles.switchLeft}
            src="/img/arrowLeft.png"
          />
          <img
            onClick={arrowRight}
            className={styles.switchRight}
            src="/img/arrowRight.png"
          />
        </div>
      </div>

      <div className={styles.DiscountGroupBlock}>
        {arrNow.map((item, index) => {
          return (
            <div className={styles.DiscountList} key={index}>
              <img className={styles.imageDiscount} src={item.image} />
              <div className={styles.discriptionDiscount}>
                {item.discription}
              </div>
              <div className={styles.nameDicrtiption}>
                {item.nameDicrtiption}
              </div>
              <div className={styles.nameDiscount}>{item.name} </div>
              <div className={styles.infoDiscount}>
                <div className={styles.priceDiscount}>{item.price}</div>
                <div className={styles.basketDiscount}>{item.basket}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sale;
