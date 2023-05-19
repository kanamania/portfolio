import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./components/portfolio.jsx";

function App() {

  return (
      <div className="Main">

          <Router>
              <Routes>
                  <Route path="/" element={<Portfolio />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App
