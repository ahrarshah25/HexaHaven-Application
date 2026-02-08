import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import CreatePost from "./pages/CreatPost"
import CreateReel from "./pages/CreateReel"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create/post" element={<CreatePost />} />
        <Route path="/create/reel" element={<CreateReel />} />
      </Routes>
    </div>
  )
}

export default App