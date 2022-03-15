import "./styles.css";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
