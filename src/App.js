import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar/NavBar";
import Shortlisted from "./components/Shortlist/Shortlisted";
import Rejected from "./components/Rejectlist/Rejected";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shortlisted" exact element={<Shortlisted />} />
          <Route path="/rejected" exact element={<Rejected />} />
          {/* <Route path="/candidate/:id" exact element={<Candidate />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
