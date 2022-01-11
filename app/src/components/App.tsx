import React from 'react';
import Issues from './Issues/Issues';
import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom';

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
                    </Routes>
                </div>
            </>
        </Router>
    );
}

export default App;