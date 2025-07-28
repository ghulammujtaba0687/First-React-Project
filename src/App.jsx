import React from 'react'
import { Routes, Route, Navigate } from "react-router"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from "./Login"
import Signup from "./Signup"
import NavbarOne from "./NavbarOne"
import NavbarTwo from "./NavbarTwo"
import DynamicUsers from "./DynamicUsers"
import UserDetail from "./UserDetail"
import Services from "./Services"
import WebDevelopment from "./WebDevelopment"
import AppDevelopment from "./AppDevelopment"

function App() {
  return (
    <Routes>
      <Route element={<NavbarOne />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<NavbarTwo />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dynamic-users" element={<DynamicUsers />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
}

export default App
