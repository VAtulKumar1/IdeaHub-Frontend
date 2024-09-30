import './App.css'
import Home from './components/Home'
import {Route, Routes} from 'react-router-dom'
import AddIdea from './components/AddIdea'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'


function App() {

  return (
    
      <div className="w-screen bg-gradient-to-r from-slate-950 to-slate-800">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/post' element={<AddIdea/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
          
      </div>
    )
}

export default App
