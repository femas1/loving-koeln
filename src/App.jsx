import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import BlogList from './components/BlogList';
import Navbar from './components/Navbar';
import About from './components/About';
import BlogDetails from './components/BlogDetails';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
    <div className='app-container'>
    <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/blogs' element={<BlogList />}/>
          <Route path='/blogs/:id' element={<BlogDetails />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
    <Footer /> 
    </div>
    </Router>
  )
}

export default App;
