import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import FavoriteThings from './components/FavoriteThings';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (

   <Router>
        <div>
            <Route exact path="/" components={Home} />
            <Route path="/favoriteThings" component={FavoriteThings} />
        </div>
    </Router>
);

render(<App />, document.getElementById('root'));