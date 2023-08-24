import React from "react";
import styles from "./Drawer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.linksOne}>
        <a>Ильинский онлайн</a>
        <a className={styles.a1}>Кулинария</a>
        <a className={styles.a2}>Супермаркет</a>
        <a className={styles.a3}>Заморозка</a>
        <a className={styles.a4}>Другое</a>
      </div>
      <div className={styles.linksTwo}>
        <a>Ильинский онлайн</a>
        <a className={styles.a1}>Акции</a>
        <a className={styles.a2}>Доставка и оплата</a>
        <a className={styles.a3}>Программа лояльности</a>
        <a className={styles.a4}>Политика конфиденциальности</a>
        <a>Вакансии</a>
      </div>
      <div className={styles.linksThree}>
        <a className={styles.number}>
          <img src="/img/phone.svg" />
          +38 (000) 49-09-99
        </a>
        <a className={styles.a1}>Ежедневно c 09:00 до 21:00</a>

        <div>
          <a className={styles.a2}>
            <img src="/img/address.svg" />
            Адреса магазинов
          </a>
        </div>
        <a className={styles.a3}>
          <img src="/img/instagram.svg" />
          Следите за нами
        </a>
        <a className={styles.a4}>
          <img src="/img/mail.svg" />
          Обратная связь
        </a>
      </div>
      <div className={styles.email}>
        <div>
          <a>Подпишитесь на вкусные и полезые новости</a>
        </div>
        <div className={styles.subscribe}>
          <input type="email" />
          <a>Подписаться</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
