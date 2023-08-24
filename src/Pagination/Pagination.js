import React from "react";
import styles from "../Drawer.module.scss";

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <p key={number} onClick={() => paginate(number)}>
            {number}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
