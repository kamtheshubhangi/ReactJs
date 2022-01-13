import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/pages/Home';
import View from './components/users/View';
import Edit from './components/users/Edit';


const App = () => {
    return (
        <>
       <Router>
                 <Routes>
                     <Route exact path="/" element={<Home />}/>
                     <Route exact path="/view/:id" element={<View />}/>
                     <Route exact path="/edit/:id" element={<Edit />}/>
                 </Routes>
       </Router>
        
        </>
        );
    };
    
    export default App;
    