import "./App.css";
import MainPage from "./components/MainPage";
import SavedCities from "./components/SavedCities";
import SearchCities from "./components/SearchCities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  // const url = `htpps://api.openweathermap.org/data/2.5/weather?q={city name}&appid=f659463b0549ba98597434fca08d8a11`;

  return (
    <>
      <div className="background">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/saved" element={<SavedCities />} />
              <Route path="/search" element={<SearchCities />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
