import React from "react";
import { Link } from "react-router-dom";
import styles from "./Drawer.module.scss";

function Header() {
  return (
    <div className={`${styles.Header}`}>
      <Link to="/">
        <div className={`${styles.logo}`}>
          <img src="../img/logo.png" alt="" />
        </div>
      </Link>
      <div className={`${styles.catalog}`}>
        <div>
          <div />
          <div />
          <div />
        </div>
        <p>Каталог</p>
        <div className={styles.menuCatalog}>
          <ul className={styles.menu}>
            <li className={styles.salesfirst}>
              Акции
              <ul className={styles.salesOpen}>
                <li>Напитки</li>
                <li>Мучное</li>
                <li>Спиртные напитки</li>
                <li>Соки</li>
                <li>Десерт</li>
              </ul>
              <div className={styles.arrowcreate}>
                <div className={styles.arrowbottom}></div>
                <div className={styles.arrowtop}></div>
              </div>
            </li>
            <li className={styles.popular}>
              Популярные
              <ul className={styles.popularOpen}>
                <li>Мясо</li>
                <li>Спиртные напитки</li>
                <li>Морепродукты</li>
                <li>Выпечка</li>
                <Link to="lists/pizza">
                  <li>Пицца</li>
                </Link>
              </ul>
              <div className={styles.arrowcreate}>
                <div className={styles.arrowbottom}></div>
                <div className={styles.arrowtop}></div>
              </div>
            </li>
            <li className={styles.supermarkt}>
              Супермаркет
              <ul className={styles.supermarktOpen}>
                <li>Вода и напитки</li>
                <li>Молоко и яйца</li>
                <li>Снэки и сухофрукты</li>
                <li>Кофе, чай, сладости</li>
                <li>Макароны и крупы</li>
                <li>Хлеб и выпечка</li>
              </ul>
              <div className={styles.arrowcreate}>
                <div className={styles.arrowbottom}></div>
                <div className={styles.arrowtop}></div>
              </div>
            </li>
            <li className={styles.cooking}>
              Кулинария
              <ul className={styles.cookingOpen}>
                <Link to="lists/bread">
                  <li>Хлеб и выпечка</li>
                </Link>
                <li>Продукция к чаю</li>
                <li>Снэки</li>
              </ul>
              <div className={styles.arrowcreate}>
                <div className={styles.arrowbottom}></div>
                <div className={styles.arrowtop}></div>
              </div>
            </li>
            <li className={styles.freezing}>
              Заморозка
              <div className={styles.arrowcreate}>
                <div className={styles.arrowbottom}></div>
                <div className={styles.arrowtop}></div>
              </div>
            </li>
            <li className={styles.anthr}>
              Другое
              <div className={styles.arrowcreate}>
                <div className={styles.arrowbottom}></div>
                <div className={styles.arrowtop}></div>
              </div>
            </li>
            <li>
              Продукция от «Ильинского
              <div className={styles.arrowcreate}>
                <div className={styles.arrowbottom}></div>
                <div className={styles.arrowtop}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.input}`}>
        <input placeholder="Начать поиск..."></input>
      </div>
      <div className={`${styles.address}`}>
        <div className={`${styles.label}`}>
          <img src="/img/label.png" alt="" />
          <p>МСК</p>
        </div>
        <div className={`${styles.delivery}`}>
          <p>Выберите способ получения</p>
          <p>Доставка или самовывоз</p>
        </div>
      </div>
      <div className={`${styles.favorites}`}>
        <img src="/img/favorite.svg" alt="" />
      </div>
      <div className={`${styles.user}`}>
        <img src="/img/user.svg" alt="" />
      </div>
      <div className={`${styles.basket}`}>
        <img src="/img/basket.svg" alt="" />
        <p>Корзина</p>
      </div>
    </div>
  );
}

export default Header;
