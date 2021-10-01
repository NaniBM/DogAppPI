import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
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
        <button className='buttonPrevNext'
          onClick={handlePrevButton}
          disabled={currentPage === pageNumbers[0] ? true : false}
        >
        <GrPrevious/>
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
              <a onClick={() => paginate(number)} className="pageLink">
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
        <button className='buttonPrevNext'
          onClick={handleNextButton}
          disabled={
            currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
          }
        >
          <GrNext/>
        </button>
      </li>
    </>
  );
}
