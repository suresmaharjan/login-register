import React from 'react'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {Test} from "./components/Test";

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/test" element={<Test />}  />
            <Route path="/signin" element={<SignIn />}  />
            <Route path="/signup" element={<SignUp />}  />
        </Routes>
    </BrowserRouter>
  );
}