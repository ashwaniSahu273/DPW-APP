// import { basename } from "config";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Public from "./public";
import App from "./app";

import { basename } from "./config";

const MyRouter = () => (
  <Routes>
    <Route path="/*" element={<Public />} />
    <Route path="/app/*" element={<App />} />
  </Routes>
);


const content = () => (
  <BrowserRouter basename={basename}>
    <MyRouter />
  </BrowserRouter>
);

export default content;
