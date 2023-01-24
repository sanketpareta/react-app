// import React from 'react';
// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/login '
import Home from './components/home';
import Aboutme from './components/About me';
import Contact from './components/Contact me';
import Menu from './components/Menu';
import{BrowserRouter, Routes, Route} from "react-router-dom"
// import Navbar from './components/Navbar';

export default class App extends React.Component{
  render()
 {
    return (
  
<div>
       {/* <Navbar/> */}
         <BrowserRouter>
           <Routes>
               <Route path = "/" element = {<Login/>}  />
               <Route path =  "/home"  element= {<Home/>} />
               <Route path = "/Aboutme" element = {<Aboutme/>}  />
               <Route path = "/Contact" element = {<Contact/>}  />
               <Route path = "/Menu" element = {<Menu/>}  />
         </Routes>
      </BrowserRouter>
   </div>

  );
 }
}

 