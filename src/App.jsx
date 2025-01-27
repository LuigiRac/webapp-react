import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import HomePage from '../components/pages/HomePage'
import SingleMovie from '../components/pages/SingleMovie'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/SingleMovie" Component={SingleMovie} />
        </Routes>

      </BrowserRouter >
    </>
  )
}

export default App
