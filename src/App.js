import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Service from "./components/Services";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/about" element={<Landing />}></Route>
        <Route exact path="/services" element={<Service />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>

        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/book" element={<Booking />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
