import "./App.css";
import MainPage from "./components/MainPage";
import SavedCities from "./components/SavedCities";
import SearchCities from "./components/SearchCities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div className="background">
        <div>
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default App;
