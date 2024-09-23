import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import './styles/main.css';
import './styles/animations.css';
import './styles/fonts.css';
import './styles/bootstrap.min.css';

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
import ClosingFooter from './components/closingFooter';
import ModelsDetail from './components/ModelsDetail';
import ModelPage from './components/ModelPage';
import FilteredModels from './components/FilteredModels';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#222831" }} className="App">
        <Header style={{ marginBottom: '20px' }} />
        <Routes>
          {/* Default Route to show all components */}
          <Route path="/" element={
            <>
              <HomePage />
              <Preview />
              <ModelList />
              <EmailUs />
              <Details />
              <BlogTrial />
              <ModelPage />
             
            </>
          } />
          {/* Define routes for each component */}
          <Route path="/models-detail/:id" element={<ModelsDetail />} />
          <Route path="/blog" element={<BlogTrial />} />
          <Route path="/services" element={<Services />} />
          <Route path="/email-us" element={<EmailUs />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/filtered-models" element ={<FilteredModels />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
        <ClosingFooter />
      </div>
    </Router>
  );
}

export default App;
