import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import DefaultLayout from "./pages/DefaultLayout";

import HomePage from './pages/HomePage'
import SingleMovie from './pages/SingleMovie'

export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/singleMovie/:id" element={<SingleMovie />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}


