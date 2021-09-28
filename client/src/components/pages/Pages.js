import React from "react";
import "./Pages.css";

export default function Pages({
  pageNumbers,
  paginate,
  currentPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  handleNextButton,
  handlePrevButton,
  pageDecrementBtn,
  pageIncrementBtn,
}) {
  return (
    <>
      <li>
        <button
          onClick={handlePrevButton}
          disabled={currentPage === pageNumbers[0] ? true : false}
        >
          Prev
        </button>
      </li>
      {pageDecrementBtn}
      {pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              className={currentPage === number ? "active" : null}
            >
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          );
        } else {
          return null;
        }
      })}
      {pageIncrementBtn}
      <li>
        <button
          onClick={handleNextButton}
          disabled={
            currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
          }
        >
          Next
        </button>
      </li>
    </>
  );
}
