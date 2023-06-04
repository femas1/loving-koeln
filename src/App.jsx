import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import BlogList from './components/BlogList';
import Navbar from './components/Navbar';
import About from './components/About';
import BlogDetails from './components/BlogDetails';
import Footer from './components/Footer';
import AuthorsList from './components/AuthorsList';
import AuthorDetails from './components/AuthorDetails';

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
          <Route path='/blogs/authors' element={<AuthorsList />}/>
          <Route path='/blogs/authors/:author' element={<AuthorDetails />}/>
        </Routes>
    <Footer /> 
    </div>
    </Router>
  )
}

export default App;
