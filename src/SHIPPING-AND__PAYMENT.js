import React from "react";
import styles from "./Drawer.module.scss";

import Maps from "./Map";

function SHPandPAY() {
  return (
    <div className={styles.SHPandPAY}>
      <h1>ДОСТАВКА И ОПЛАТА</h1>
      <div className={styles.services}>
        <div>
          <div>
            <div className={styles.delivery_zones}>
              <span>Зоны доставки</span>
              <p>
                Доставка осуществляется в районе ЖК «Ильинские Луга»
                (Харьковськая обл., Красногорск, пос. Ильинское-Усово, ул.
                Заповедная) и ЖК «Новая Рига» (Харьковськая обл., Красногорск,
                д. Глухово, ул. Рублевское Предместье)
              </p>
            </div>
          </div>
          <div>
            <div className={styles.time}>
              <span>25 минут</span>
              <p>Доставка 25 минут. Принимаем заказы с 7:00 до 23:00</p>
            </div>
          </div>
          <div>
            <div className={styles.price}>
              <span>300 грн</span>
              <p>
                Минимальная сумма бесплатной доставки с учетом скидок. Иначе
                стоимость доставке 50 грн
              </p>
            </div>
            <div className={styles.Payment}>
              <span>Оплата</span>
              <p>
                При оформлении заказа вы можете выбрать удобный для вас спобос
                рассчета
              </p>
              <p>
                Изображения продуктов могут отличаться от продуктов в заказе.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.Delivery_card}>
          <span>Карта доставки</span>
          <div className={styles.maps}>
            <Maps />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SHPandPAY;
