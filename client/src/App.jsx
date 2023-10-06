import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Auth from "./pages/Auth";
import Header from "./components/Header";


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
