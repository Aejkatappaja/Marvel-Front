import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Characters from "./Pages/Characters";
import Character from "./Pages/Character";
import Comics from "./Pages/Comics";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";

function App() {
  function SaveDataToLocalStorage(data) {
    let favFromUser = [];
    favFromUser = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favFromUser.some((id) => id === data)) {
      return null;
    } else {
      favFromUser.push(data);
      localStorage.setItem("favorites", JSON.stringify(favFromUser));
    }
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/character"
          element={
            <Character SaveDataToLocalStorage={SaveDataToLocalStorage} />
          }
        ></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route
          path="/favorites"
          element={<Favorites Favorites={localStorage.getItem("favorites")} />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
