import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Navbar from "./Navbar"
import Alert from "./Alert"
import About from "./Pages/About"
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"
import UserDetails from './UserDetails'
import GithubState from '../context/github/githubState'
import AlertState from '../context/alert/alertState'


function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users/:login" element={<UserDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App