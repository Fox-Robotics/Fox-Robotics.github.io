import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectPage from "./pages/LineFollower/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
