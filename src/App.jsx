import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import DefaultLayout from "./pages/DefaultLayout";

import HomePage from './pages/HomePage'
import SingleMovie from './pages/SingleMovie'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/HomePage" Component={HomePage} />
            <Route path="/SingleMovie" Component={SingleMovie} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
