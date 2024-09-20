import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/main.css';
import './styles/animations.css';
import './styles/fonts.css';
import './styles/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogTrial from './components/BlogTrial';
import Header from './components/Header';
import Preview from './components/Preview';
import Adds from './components/Adds';
import Testimony from './components/Testimony';
import ModelList from './components/ModelList';
import Services from './components/Services';
import EmailUs from './components/EmailUs';
import Details from './components/Details';
import BlogPost from './components/BlogPost';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
// import MyCarousel from './components/carsoul';
import ClosingFooter from './components/closingFooter';

function App() {
  return (
    <div style={{backgroundColor:"#222831"}} className="App">
      {/* <Adds /> */}
      <Header style = {{marginBottom:'20px'}}/>
      < HomePage />
      <Preview />
      {/* <Testimony /> */}
      <ModelList />
      {/* <Services /> */}
      <EmailUs />
      <Details />
      {/* <BlogPost /> */}
      <BlogTrial/>
      {/* <Locations /> */}
      {/* <Contact /> */}
      {/* <MyCarousel /> */}
      {/* <BlogTrial/> */}
      <Footer />
      <ClosingFooter />
    </div>
  );
}

export default App;

