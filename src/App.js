import{BrowserRouter,Routes,Route} from 'react-router-dom'
import '../src/css/App.css'
import Layout from './component/Layout';
import About from './component/About';
import Home from './component/Home';
import Contact from './component/Contact';
import Skills from './component/Skills';
import Experience from './component/Experience'
import Education from './component/Education';
import Projects from './component/Projects';
import Footer from './component/Footer';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Skills'element={<Skills/>}/>
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Experience' element={<Experience/>} />
          <Route path='/Education' element={<Education/>} />
          <Route path='/projects' element={<Projects/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
                                        
export default App;
