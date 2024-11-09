import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./features/Login/Login";
import "./index.css";
import Admin from "./features/admin/Admin";
import Teacher from "./features/teacher/Teacher";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Teacher" element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
