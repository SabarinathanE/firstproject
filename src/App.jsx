import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";


function App() {



  return (
  <section>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Blogs/1">Blogs</Link>
 <Routes>
  <Route path="/" Component={Home} />
  <Route path="/About" Component={About} />
  <Route path="/Contact" Component={Contact} />
  <Route path="/Blogs/:blogId" Component={Blogs} />
  
 </Routes>
  </section>
  )
}

export default App;


