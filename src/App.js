
import NavBar from './components/NavBar'
import HomepageGrid from './components/Homepage';
import BookInfo from './components/BookInfo';
import DisplayTypes from './components/DisplayType';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App" class="font-brand text-base">
      <Router>
        
        <ScrollToTop>

          <Switch>
            <Route path="/" exact component={() => <HomepageGrid/>} />
            <Route path="/about" exact component={() => <About/>} />
            <Route path="/books" exact component={() => <DisplayTypes/>} />
            <Route path="/catalogs" exact component={() => <DisplayTypes/>} />
            <Route path="/ads" exact component={() => <DisplayTypes/>} />
            <Route path="/other" exact component={() => <DisplayTypes/>} />
            <Route path="/:title" exact component={() => <BookInfo/>} />
          </Switch>


          <div class="text-center m-5 object-bottom">
            <p>Copyright 2021 @ Masie</p>
          </div>

        </ScrollToTop>

      </Router>
    </div>
  );
}

export default App;
