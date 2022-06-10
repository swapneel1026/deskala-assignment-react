import "./App.css";
import LoginComponent from "./components/LoginComponent";
import NavbarComponent from "./components/NavbarComponent";
import SignupComponent from "./components/SignupComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRecords from "./components/CreateRecords";
import DisplayRecords from "./components/DisplayRecords";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/createRecords" element={<CreateRecords />} />
          <Route path="/viewRecords" element={<DisplayRecords />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
