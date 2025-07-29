import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/admin";
import Home from "./components/home";

function NotFound() {
  return "Page Not Found!";
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/admin" element={<Admin />} />
          <Route path = "*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
