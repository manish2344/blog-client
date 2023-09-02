import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Postdetaile from "./screens/Postdetaile.js";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/create/Create.jsx";
import Edit from "./components/create/Edit.js";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />

          <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/edit/:_id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            <Route path="/post/:_id" element={<Postdetaile />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
