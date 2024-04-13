import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Information from './components/Information.js';
import Footer from './components/Footer.js';
import TargetCollection from './components/TargetCollection.js';
import Singlecard from './components/Singlecard.js';
import SearchResult from './components/SearchResult.js';



function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/targetcollection' element={<TargetCollection />} />
          <Route path='/singlecard' element={<Singlecard/>}/>
          <Route path='/search-result' element={<SearchResult/>}/>
        </Routes>

        <Contact />
        <Information />
        <Footer />
      </>
    </Router>
  );
}

export default App;
