import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
