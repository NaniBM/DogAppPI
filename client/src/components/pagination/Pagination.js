import "./Pagination.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breeds from "../breeds/Breeds";
import Pages from "../pages/Pages";
import { getBreed } from "../../actions/actions";

export default function Pagination() {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [pageNumberLimit] = useState(8);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(8);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => dispatch(getBreed()), []);

  const { breeds } = useSelector((state) => state);

  if (breeds && !Array.isArray(breeds)) return <Breeds items={breeds} />;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(breeds.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = breeds
    ? breeds.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  const handlePrevButton = () => {
    setcurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextButton = () => {
    setcurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextButton}> &hellip;</li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= pageNumberLimit) {
    pageDecrementBtn = <li onClick={handlePrevButton}> &hellip;</li>;
  }

  return currentItems.length ? (
    <div className="pagination">
      <Breeds items={currentItems} />
      <ul className="pageNumbers">
        <Pages
          pageNumbers={pageNumbers}
          paginate={paginate}
          currentPage={currentPage}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          handlePrevButton={handlePrevButton}
          handleNextButton={handleNextButton}
          pageDecrementBtn={pageDecrementBtn}
          pageIncrementBtn={pageIncrementBtn}
        />
      </ul>
    </div>
  ) : null;
}
