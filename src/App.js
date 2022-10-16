import HomepageGrid from './components/Homepage/Homepage';
import BookInfo from './components/InteriorPage/BookInfo';
import DisplayTypes from './components/CategoriesPage/DisplayType';
import ScrollToTop from './components/ScrollToTop';
import About from './components/CategoriesPage/About';
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
            <Route path="/marketing" exact component={() => <DisplayTypes/>} />
            <Route path="/events" exact component={() => <DisplayTypes/>} />
            <Route path="/personal" exact component={() => <DisplayTypes/>} />
            <Route path="/:title" exact component={() => <BookInfo/>} />
          </Switch>


          <div class="text-center m-5 object-bottom">
            <p>Copyright 2022 @ Masie</p>
          </div>

        </ScrollToTop>

      </Router>
    </div>
  );
}

export default App;
