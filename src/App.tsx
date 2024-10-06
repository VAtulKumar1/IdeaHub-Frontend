import './App.css'
import {Route, Routes,Navigate} from 'react-router-dom'
import AddIdea from './components/AddIdea'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Footer from './components/Footer'
import Home from './components/Home'



function App() {

  return (
    
      <div className="w-screen bg-gradient-to-t from-slate-950 to-slate-800">
        
            <Navbar/>
            <Routes>
                <Route path='/' element={<Navigate to="/signup"/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/post' element={<AddIdea/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/signin' element={<SignIn/>}/>
            </Routes>
            <Footer/>
          
      </div>
    )
}

export default App
