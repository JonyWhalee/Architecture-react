import './style/Layout.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/work' element={<Work></Work>} ></Route>
        <Route path='/About' element={<About></About>} ></Route>
        <Route path='/Contact' element={<Contact></Contact>} ></Route>
      </Routes>
      </BrowserRouter>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
