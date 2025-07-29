import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/admin";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import Funding from './components/funding/Funding';
import Adoption from "./components/shelters/Adoption";
import Dashboard from "./components/shelters/Dashboard";
// import Adoption from './components/shelters/Adoption';


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
          <Route path = "/shelter_dashboard" element={<Dashboard />} />
          { <Route path = "/funding" element={<Funding />} /> }
          { <Route path = "/adoption" element={<Adoption />} /> }
          <Route path = "*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
