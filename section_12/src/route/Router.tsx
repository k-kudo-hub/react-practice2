import React, { VFC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/setting" element={<Setting/>}/>
      <Route path="/user_management" element={<UserManagement/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
  )
})
