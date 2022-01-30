import { BrowserRouter , Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./app.css";

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/login" element={<SignIn />}  />
            <Route path="/register" element={<SignUp />}  />
        </Routes>
    </BrowserRouter>
  );
}
