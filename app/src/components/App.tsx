import React from 'react';
import Issues from './Issues/Issues';
import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Details from "./Details/Details";

const App = () => {
    return (
        <Router>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <Routes>
                        <Route key="/" path="/" element={<Issues/>}/>
                        <Route key="details" path="/issues/:id" element={<Details/>}/>
                    </Routes>
                </div>
            </>
        </Router>
    );
}

export default App;