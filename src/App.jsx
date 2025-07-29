import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/admin";

function NotFound() {
  return "Page Not Found!";
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/admin" element={<Admin />} />
          <Route path = "*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
