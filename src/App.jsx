import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/admin";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";

function NotFound() {
  return "Page Not Found!";
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path = "/admin" element={<Admin />} />
          <Route path = "*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
