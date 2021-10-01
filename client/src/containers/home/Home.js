import React from "react";
import "./Home.css";
import SideBar from "../sideBar/SideBar";
import Pagination from "../../components/pagination/Pagination";

export default function HomeContainer() {
  return (
    <div className="container">      
      <SideBar />
      <Pagination />      
    </div>
  );
}
