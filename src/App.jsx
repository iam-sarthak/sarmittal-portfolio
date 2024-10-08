import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import ProjectsPage from './pages/Projects/ProjectsPage';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className='app'>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  )
}

export default App
