import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
