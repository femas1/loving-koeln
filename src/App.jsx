import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import BlogList from './components/BlogList';

function App() {
  
  return (
    <Router>
    <div className='app-container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blogs' element={<BlogList />}/>
        </Routes>
    </div>
    </Router>
  )
}

export default App;
