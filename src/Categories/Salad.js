import React, { useState } from "react";
import Json from "../JSON/Salad";
import styles from "../Drawer.module.scss";
import Pagination from "../Pagination/Pagination";
import Universal from "./Universal";

function Salad(props) {
  const [json, setJson] = useState(Json);

  const [currentPage, setCurrentPage] = useState(0);
  const [countriesPerPage] = useState(6);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    setCurrentPage((prev) =>
      prev < json[0].length / countriesPerPage - 1 ? prev + 1 : prev
    );
  };
  const prevPage = () => {
    setCurrentPage((prev) =>
      prev > json[0].length / json[0].length - 1 ? prev - 1 : prev
    );
  };

  function changeMinus(a, b) {
    if (a.price > b.price) return -1;
    if (a.price == b.price) return 0;
    if (a.price < b.price) return 1;
  }

  function changePlus(a, b) {
    if (a.price > b.price) return 1;
    if (a.price == b.price) return 0;
    if (a.price < b.price) return -1;
  }
  function changePopular(a, b) {
    if (a.price > b.price) return 1;
    if (a.price == b.price) return 0;
    if (a.price < b.price) return -1;
  }
  function changeDiscussed(a, b) {
    if (a.price > b.price) return -1;
    if (a.price == b.price) return 0;
    if (a.price < b.price) return 1;
  }
  function changeBest(a, b) {
    if (a.name > b.name) return -1;
    if (a.name == b.name) return 1;
    if (a.name < b.name) return 0;
  }
  React.useEffect(() => {
    const newArr = [...json];

    if (props.selected === "По популярности") {
      for (let i = 0; i < newArr.length; i++) {
        newArr[i].sort(changePopular);
      }
    } else if (props.selected === "По возрастанию цены") {
      for (let i = 0; i < newArr.length; i++) {
        newArr[i].sort(changePlus);
      }
    } else if (props.selected === "По уменьшению цены") {
      for (let i = 0; i < newArr.length; i++) {
        newArr[i].sort(changeMinus);
      }
    } else if (props.selected === "Сначала обсуждаемые") {
      for (let i = 0; i < newArr.length; i++) {
        newArr[i].sort(changeDiscussed);
      }
    } else if (props.selected === "Сначала с лучшей оценкой") {
      for (let i = 0; i < newArr.length; i++) {
        newArr[i].sort(changeBest);
      }
    }
    setJson(newArr);
  }, [props]);

  function division(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
    }
    return res;
  }
  const f = [...json[0]];
  const arrX = division(f, 6);

  const [boolean, setBoolean] = useState(false);
  const [meaning, setMeaning] = useState();
  const boolvalue = (event) => {
    setBoolean(!boolean);
    setMeaning(event.target.innerHTML);
  };
  const closed = () => {
    setBoolean(!boolean);
  };
  const newArr = [];

  const [favoriteMap, setFavoriteMap] = useState({});
  if (meaning != undefined) {
    const descriptionObj = [json[0].find((item) => item.name === meaning)];

    const toggleFavorite = (id) => {
      const clone = { ...favoriteMap };
      if (clone[id]) {
        clone[id] = false;
      } else {
        clone[id] = true;
      }
      setFavoriteMap(clone);
    };

    const Arr = descriptionObj.map((item) => (
      <Universal
        item={item}
        id={item.id}
        isFavorite={favoriteMap[item.id]}
        toggleFavorite={toggleFavorite}
      />
    ));
    newArr.push(Arr[0]);
  }

  let block = arrX[currentPage].map((item, index) => (
    <div className={styles.item_description} key={index}>
      <img
        className={styles.salad}
        src={item.image}
        height="200px"
        width="305px"
      />
      <div className={styles.double}>
        <p className={styles.quantity}>{item.quantity}</p>
        <p className={styles.priceLow}>{item.price}</p>
      </div>
      <p className={styles.name} onClick={boolvalue}>
        {item.name}
      </p>
      <p className={styles.price}>{item.price}</p>
    </div>
  ));
  console.log(newArr[0]);
  return (
    <div className={styles.ItemsAndFlip}>
      <div className={styles.items}>{block}</div>
      <div className={boolean ? styles.details : styles.detalis_none}>
        <div className={styles.windowPanel} onClick={closed}></div>
        <div className={styles.window}>
          <img
            className={styles.closed}
            src="../img/closed.png"
            onClick={closed}
          />
          <div>{newArr}</div>
        </div>
      </div>
      <div className={styles.flipping}>
        <button className={styles.btn_primary_Prev} onClick={prevPage}>
          {"<"}
        </button>
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={json[0].length}
          paginate={paginate}
        />
        <button className={styles.btn_primary_Next} onClick={nextPage}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Salad;
