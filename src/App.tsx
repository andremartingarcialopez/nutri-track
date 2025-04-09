
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CaloriesTracker from "./pages/CaloriesTracker"
import Home from "./pages/Home"


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caloriestracker" element={<CaloriesTracker />} />
        </Routes>
      </BrowserRouter>







    </>
  )
}

export default App
