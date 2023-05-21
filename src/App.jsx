import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import BlogList from './components/BlogList';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <Router>
    <div className='app-container'>
    <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/blogs' element={<BlogList />}/>
        </Routes>
    </div>
    </Router>
  )
}

export default App;
