import HomepageGrid from './components/Homepage/Homepage';
import InteriorPage from './components/InteriorPage/InteriorPage';
import DisplayTypes from './components/CategoriesPage/DisplayType';
import ScrollToTop from './components/ScrollToTop';
import About from './components/CategoriesPage/About';
import './App.css';

import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-brand text-base">
      <Router>
        
        <ScrollToTop>

            <Route path="/" exact component={() => <HomepageGrid/>} />
            <Route path="/about" exact component={() => <About/>} />
            <Route path="/books" exact component={() => <DisplayTypes/>} />
            <Route path="/marketing" exact component={() => <DisplayTypes/>} />
            <Route path="/events" exact component={() => <DisplayTypes/>} />
            <Route path="/personal" exact component={() => <DisplayTypes/>} />
            <Route path="/:title" exact component={() => <InteriorPage/>} />


          <div className="text-center m-5 object-bottom">
            <p>Copyright 2024 @ Masie</p>
          </div>

        </ScrollToTop>

      </Router>
    </div>
  );
}

export default App;
