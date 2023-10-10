import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Education from './components/Education';
import Home from './components/Home';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Myresume from './components/Myresume';

function App() {
  return (
  <div>
     <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Detail' element={<Detail/>}/>
    <Route path='/education' element={<Education/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/work' element={<WorkExperience/>}/>
    <Route path='/skill' element={<Skills/>}/>
   
    <Route path='/myresume' element={<Myresume/>}/>
   </Routes>
   </BrowserRouter>
  </div>
  );
}

export default App;
