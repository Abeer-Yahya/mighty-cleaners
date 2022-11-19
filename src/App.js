import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Service from "./components/Services";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/About" element={<Landing />}></Route>
        <Route exact path="/Services" element={<Service />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
