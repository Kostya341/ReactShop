import React from "react";
import styles from "../Drawer.module.scss";

function Lists() {
  return (
    <>
      <div className={styles.nameList}>
        <h1>СУПЕРМАРКЕТ</h1>
        <div>
          <p>Смотреть все</p>
          <img src="/img/arrow-Img.png" />
        </div>
      </div>
      <div className={styles.Supermarket}>
        <div>
          <p className={styles.p1}>Вода и напитки</p>
          <img className={styles.p2__1} src="img/1.png" alt="" />
        </div>
        <div>
          <p className={styles.p2}>Молоко, масло и яйца</p>
          <img className={styles.p2__2} src="img/2.png" alt="" />
        </div>
        <div>
          <p className={styles.p3}>Снэки и сухофрукты</p>
          <img className={styles.p2__3} src="img/3.png" alt="" />
        </div>
        <div>
          <p className={styles.p4}>Кофе, чай и сладости</p>
          <img className={styles.p2__4} src="img/4.png" alt="" />
        </div>
        <div>
          <p className={styles.p5}>Макароны и крупы</p>
          <img className={styles.p2__5} src="img/5.png" alt="" />
        </div>
        <div>
          <p className={styles.p6}>Хлеб и выпечка</p>
          <img className={styles.p2__6} src="img/6.png" alt="" />
        </div>
        <div>
          <p className={styles.p7}>Масло, соусы и специи</p>
          <img className={styles.p2__7} src="img/7.png" alt="" />
        </div>
        <div>
          <p className={styles.p8}>Консервы и соления</p>
          <img className={styles.p2__8} src="img/8.png" alt="" />
        </div>
      </div>
      <div className={styles.nameList}>
        <h1>КУЛИНАРИЯ</h1>
        <div>
          <p>Смотреть все</p>
          <img src="/img/arrow-Img.png" />
        </div>
      </div>
      <div className={styles.COOKING}>
        <div>
          <p className={styles.p1}>Выпечка</p>
          <img className={styles.p2__1} src="img/1-2.png" alt="" />
        </div>
        <div>
          <p className={styles.p2}>Пиццы</p>
          <img className={styles.p2__2} src="img/1-3.png" alt="" />
        </div>
        <div>
          <p className={styles.p3}>Гриль-меню</p>
          <img className={styles.p2__3} src="img/1-4.png" alt="" />
        </div>
        <div>
          <p className={styles.p4}>Свежее мясо</p>
          <img className={styles.p2__4} src="img/1-5.png" alt="" />
        </div>
        <div>
          <p className={styles.p5}>Салаты</p>
          <img className={styles.p2__5} src="img/1-6.png" alt="" />
        </div>
        <div>
          <p className={styles.p6}>Супы</p>
          <img className={styles.p2__6} src="img/1-7.png" alt="" />
        </div>
        <div>
          <p className={styles.p7}>Горячие блюда</p>
          <img className={styles.p2__7} src="img/1-8.png" alt="" />
        </div>
        <div>
          <p className={styles.p8}>Десерты</p>
          <img className={styles.p2__8} src="img/1-9.png" alt="" />
        </div>
      </div>
      <div className={styles.nameList}>
        <h1>ЗАМОРОЗКА</h1>
        <div>
          <p>Смотреть все</p>
          <img src="/img/arrow-Img.png" />
        </div>
      </div>
      <div className={styles.FRESH}>
        <div>
          <p className={styles.p1}>Пельмени, вареники и равиоли</p>
          <img className={styles.p2__1} src="img/2-1.png" alt="" />
        </div>
        <div>
          <p className={styles.p2}>Хинкали и манты</p>
          <img className={styles.p2__2} src="img/2-2.png" alt="" />
        </div>
        <div>
          <p className={styles.p3}>Полу- фабрикаты</p>
          <img className={styles.p2__3} src="img/2-3.png" alt="" />
        </div>
        <div>
          <p className={styles.p4}>Замороженные вощи</p>
          <img className={styles.p2__4} src="img/2-4.png" alt="" />
        </div>

        <div>
          <p className={styles.p5}>Рыба и морепродукты</p>
          <img className={styles.p2__5} src="img/2-5.png" alt="" />
        </div>
        <div>
          <p className={styles.p6}>Мясо</p>
          <img className={styles.p2__6} src="img/2-6.png" alt="" />
        </div>
      </div>
      <div className={styles.nameList}>
        <h1>ДРУГОЕ</h1>
        <div>
          <p>Смотреть все</p>
          <img src="/img/arrow-Img.png" />
        </div>
      </div>
      <div className={styles.another}>
        <div>
          <p className={styles.p1}>Красота и гигиена</p>
          <img className={styles.p2__1} src="img/3-1.png" alt="" />
        </div>
        <div>
          <p className={styles.p2}>Стирка и уборка</p>
          <img className={styles.p2__2} src="img/3-2.png" alt="" />
        </div>
        <div>
          <p className={styles.p3}>Полезные мелочи</p>
          <img className={styles.p2__3} src="img/3-3.png" alt="" />
        </div>
        <div>
          <p className={styles.p4}>Бытовая техника</p>
          <img className={styles.p2__4} src="img/3-4.png" alt="" />
        </div>
      </div>
      <div className={styles.nameList}>
        <h1>АКЦИИ</h1>
        <div>
          <p>Смотреть все</p>
          <img src="/img/arrow-Img.png" />
        </div>
      </div>
      <div className={styles.sales}>
        <div>
          <p className={styles.p1}>Сделай предзаказ в кулинарии со скидкой</p>
          <img className={styles.p2__1} src="img/4-1.png" alt="" />
        </div>
        <div>
          <p className={styles.p2}>Праздник к нам приходит</p>
          <img className={styles.p2__2} src="img/4-2.png" alt="" />
        </div>
        <div>
          <p className={styles.p3}>
            Скидка на третий товар в корзине «Чистая линия»
          </p>
          <img className={styles.p2__3} src="img/4-3.png" alt="" />
        </div>
        <div>
          <p className={styles.p4}>Комбо-набор 3 пиццы за 1500 ₽ </p>
          <img className={styles.p2__4} src="img/4-4.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Lists;
