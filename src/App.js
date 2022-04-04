import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewLog from "./pages/NewLog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newLog" element={<NewLog />} />
      </Routes>
    </div>
  );
}

export default App;
