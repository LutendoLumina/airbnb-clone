import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Modal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
