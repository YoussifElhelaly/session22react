import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Components/navbar/Navbar';
import Features from './Pages/Features/Features';
import Users from './Pages/users/users';
import Category from './Pages/Category/Category';
import Form from './Components/Form';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='features' element={<Features />} />
        <Route path='users/:UserId' element={<Users />} />
        <Route path='category/:CategoryName' element={<Category />} />
        <Route path='form' element={<Form />} />
      </Routes>
    </>

  );
}

export default App;
