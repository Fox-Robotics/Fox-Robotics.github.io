import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LineFollower from "./pages/LineFollower/LineFollower";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lineFollowerV1" element={<LineFollower />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
