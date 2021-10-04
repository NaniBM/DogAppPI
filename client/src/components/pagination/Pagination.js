import "./Pagination.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breeds from "../breeds/Breeds";
import Pages from "../pages/Pages";
import { getBreed, setCurrentPage } from "../../actions/actions";
import Loading from "../../images/loading.gif";

export default function Pagination() {

  // const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [pageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const dispatch = useDispatch();
  useEffect(() =>
  {loadPage()
  dispatch(getBreed())},  []);

  const { breeds, currentPage } = useSelector((state) => state);

  

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading]);

  const loadPage = () => {
    setLoading(!loading);
    setTimeout(()=>{
      setLoading(!loading); }, 1500)
  }

  if (loading) return <img src={Loading} alt="loading" />;

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

  const paginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));

  const handlePrevButton = () => {
    dispatch(setCurrentPage(currentPage - 1));
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextButton = () => {
    dispatch(setCurrentPage(currentPage + 1));
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
