import React from 'react';
import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import IndexPage from "../pages/IndexPage";
import DetailsPage from "../pages/DetailsPage";

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
                        <Route key="/" path="/" element={<IndexPage/>}/>
                        <Route key="details" path="/issues/:id" element={<DetailsPage/>}/>
                    </Routes>
                </div>
            </>
        </Router>
    );
}

export default App;