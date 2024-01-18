import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ListedFlights from "./pages/ListedFlights"
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flights" element={<ListedFlights />} />
      </Routes>
    </>
  )
}

export default App
