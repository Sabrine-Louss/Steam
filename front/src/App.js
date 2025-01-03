import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar"
import ProfileUser from "./pages/ProfileUser";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<ProfileUser/>} />
      </Routes>
    </div>
  );
}

export default App;
