import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import styles from "../Drawer.module.scss";
import Bread from "../Categories/Bread";
import Pizza from "../Categories/Pizza";
import Salad from "../Categories/Salad";

function Catalog() {
  const [one, setOne] = useState();
  const [selected, setSelected] = useState("По популярности");
  const [powerOne, setPowerOne] = useState(false);
  const [powerTwo, setPowerTwo] = useState(false);
  const [powerThree, setPowerThree] = useState(false);
  const [categories, setCategories] = useState();
  const radioOne = () => {
    setPowerOne(!powerOne);
  };
  const radioTwo = () => {
    setPowerTwo(!powerTwo);
  };
  const radioThree = () => {
    setPowerThree(!powerThree);
  };
  const change = () => {
    setOne(styles.categories);
  };
  const out = () => {
    setOne("");
  };
  const select = (event) => {
    setSelected(event.target.innerHTML);
    setOne("");
  };

  const bread = () => {
    setCategories(Bread);
  };

  const onChange = () => {
    return;
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Хлеб и выпечка</h1>
        <div className={styles.categorySearch}>
          <div
            onClick={change}
            onMouseOver={out}
            className={styles.categorypopular}
          >
            <a>
              {selected}{" "}
              <div className={styles.arrowcreate}>
                <div className={styles.arrowbottom}></div>
                <div className={styles.arrowtop}></div>
              </div>
            </a>
          </div>
          <div className={one ? one : styles.stels}>
            <a onClick={select}>По популярности</a>
            <a onClick={select}>По возрастанию цены</a>
            <a onClick={select}>По уменьшению цены</a>
            <a onClick={select}>Сначала обсуждаемые</a>
            <a onClick={select}>Сначала с лучшей оценкой</a>
          </div>
        </div>
      </div>
      <div className={styles.mainList}>
        <div className={styles.titleBlock}>
          <div className={styles.Peculiarities}>
            <h3>Ососбенности</h3>
            <div>
              <input
                type="radio"
                id="yes"
                onClick={radioOne}
                className={styles.yes}
                checked={powerOne}
                onChange={onChange}
              />
              Со скидкой
            </div>
            <div>
              <input
                type="radio"
                id="yes"
                onClick={radioTwo}
                className={styles.yes}
                checked={powerTwo}
                onChange={onChange}
              />
              Доставка сегодня
            </div>
            <div>
              <input
                type="radio"
                className={styles.yes}
                onClick={radioThree}
                checked={powerThree}
                onChange={onChange}
              />
              Продукция от «Ильинского»
            </div>
          </div>
          <div className={styles.links}>
            <ul>
              <Link to="bread">
                <li>Хлеб</li>
              </Link>
              <Link to="bread">
                <li>Лаваш и лепешки</li>
              </Link>
              <li>Выпечка</li>
              <li>Баранки и сухарики</li>
              <li>Хлебцы</li>
              <li>Вегетарианцам</li>
              <li>Безглютеновая продукция</li>
              <li>Лаваш и лепешки</li>
            </ul>
          </div>
        </div>
        <div className={styles.centerBlock}>
          <div className={styles.leftBlock}>
            <h3>Каталог</h3>
            <ul>
              <li>
                <p>Кулинария</p>
              </li>
              <Link to="bread">
                <li>Выпечка</li>
              </Link>
              <Link to="pizza">
                <li>Пиццы</li>
              </Link>
              <Link to="salad">
                <li>Салаты</li>
              </Link>
              <li>
                <a>Супы</a>
              </li>
              <li>
                <a>Горячие блюда</a>
              </li>
              <li>
                <a>Десерты</a>
              </li>
            </ul>
            <ul>
              <li>
                <p>Супермаркет</p>
              </li>
              <li>
                <a>Вода и напитки</a>
              </li>
              <li>
                <a>Молоко, масло и яйца</a>
              </li>
              <li>
                <a>Снэки и сухофрукты</a>
              </li>
              <li>
                <a>Кофе, чай и сладости</a>
              </li>
              <li>
                <a>Макароны и крупы</a>
              </li>
              <li>
                <a>Хлеб и выпечка</a>
              </li>
              <li>
                <a>Десерты</a>
              </li>
              <li>
                <a>Консервы и соления</a>
              </li>
            </ul>
            <ul>
              <li>
                <p>Заморозка</p>
              </li>
              <li>
                <a>Пельмени, вареники и равиоли</a>
              </li>
              <li>
                <a>Хинкали и манты</a>
              </li>
              <li>
                <a>Полуфабрикаты</a>
              </li>
              <li>
                <a>Замороженные овощи</a>
              </li>
            </ul>
            <ul>
              <li>
                <p>Заморозка</p>
              </li>
              <li>
                <a>Красота и гигиена</a>
              </li>
              <li>
                <a>Стирка и уборка</a>
              </li>
              <li>
                <a>Полезные мелочи</a>
              </li>
            </ul>
          </div>
          <div className={styles.rightBlock}>
            <>
              <Routes>
                <Route path="bread" element={<Bread selected={selected} />} />
              </Routes>
              <Routes>
                <Route path="pizza" element={<Pizza selected={selected} />} />
              </Routes>
              <Routes>
                <Route path="salad" element={<Salad selected={selected} />} />
              </Routes>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
