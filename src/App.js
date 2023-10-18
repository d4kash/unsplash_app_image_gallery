import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom";
import ImageDetailModal from './pages/modalComponent/modelComponent';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <ImageDetailModal/> } />
        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  );
}

export default App;
