import React from "react";

import { Routes, Route } from "react-router-dom";

import Landing from "./landing";
import Login from "./login";

import Article from "./article";
import Article_00000 from "./00000-article";
import Article_00001 from "./00001-article";
import Article_00002 from "./00002-article";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/article/*" element={<Article />} />
      <Route path="/00000_how_to/*" element={<Article_00000 />} />
      <Route path="/00001_our_services/*" element={<Article_00001 />} />
      <Route path="/00002_save_money/*" element={<Article_00002 />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
