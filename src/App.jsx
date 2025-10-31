import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/Portfolio/About';
import Skills from './Components/Portfolio/Skills';
import Projects from './Components/Portfolio/Projects';
import Contact from './Components/Portfolio/Contact';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio />}></Route>
          <Route path='/pf/about' element={<About />}></Route>
          <Route path='/pf/projects' element={<Projects />}></Route>
          <Route path='/pf/contact' element={<Contact />}></Route>
          <Route path='/pf/skills' element={<Skills />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;