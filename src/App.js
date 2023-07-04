import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectPage from "./pages/Project/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import Roboticsprojects from "./components/RoboticsProjectList";
import codingProjects from "./components/CodingProjectList";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
