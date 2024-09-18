import React from "react";
import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import Profile from "./profile";
import Dashboard from "./dashboard";
import ECommerce from "./ecommerce";

export default () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} >
          {/* <Route path="/Dashboard/default" element=""/>
          <Route path="/Dashboard/automotive" element=""/>
          <Route path="/Dashboard/smart-home" element=""/>
          <Route path="/Dashboard/CRM" element=""/>
          <Route path="/Dashboard/vr" element=""/> */}
        </Route>

        
        <Route path="/profile" element={<Profile />} />
        <Route path="/e-commerce" element={<ECommerce />} />
      </Routes>
    </Layout>
  );
};
