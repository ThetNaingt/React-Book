import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GetBookData } from "./service/book.service";
import { GetAuthorData } from "./service/author.service";
import useFetch from "./hook/useFetch";
import { Homepage, DetailBookPage } from "./page";
import { NavComponents } from "./components";
import Notfound from "../Not-found";

const App = () => {
  const { loading, error, data } = useFetch(GetBookData, "book");

  return (
    <div className="main">
      <NavComponents />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/detail/:id" element={<DetailBookPage />} />
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
