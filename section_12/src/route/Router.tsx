import React, { VFC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout><Home/></HeaderLayout>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/setting" element={<Setting/>}/>
      <Route path="/user_management" element={<UserManagement/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
  )
})
