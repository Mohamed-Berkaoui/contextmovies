import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigator from "./Navigator";
import Home from "./pages/Home";
import FilmDetails from "./pages/FilmDetails";
import Favorites from "./pages/Favorites";
import ContextFav from "./ContextFav";


function App() {


  return (
<ContextFav>
    <div className="App">
      <Navigator />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"}/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/film/:id" element={<FilmDetails />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </div>
    </ContextFav>
  );
}

export default App;
