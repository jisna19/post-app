import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import Search from './components/Search';
import Delete from './components/Delete';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddPost/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/delete' element={<Delete/>}/>
    <Route path='/view' element={<View/>}/>
   </Routes>
   </BrowserRouter>

  );
}

export default App;
