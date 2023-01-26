import HomepageGrid from './components/Homepage/Homepage';
import BookInfo from './components/InteriorPage/BookInfo';
import DisplayTypes from './components/CategoriesPage/DisplayType';
import ScrollToTop from './components/ScrollToTop';
import About from './components/CategoriesPage/About';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" class="font-brand text-base">
      <Router>
        
        <ScrollToTop>

          <Routes>
            <Route path="/" exact element={() => <HomepageGrid/>} />
            <Route path="/about" exact element={() => <About/>} />
            <Route path="/books" exact element={() => <DisplayTypes/>} />
            <Route path="/marketing" exact element={() => <DisplayTypes/>} />
            <Route path="/events" exact element={() => <DisplayTypes/>} />
            <Route path="/personal" exact element={() => <DisplayTypes/>} />
            <Route path="/:title" exact element={() => <BookInfo/>} />
          </Routes>


          <div class="text-center m-5 object-bottom">
            <p>Copyright 2022 @ Masie</p>
          </div>

        </ScrollToTop>

      </Router>
    </div>
  );
}

export default App;
