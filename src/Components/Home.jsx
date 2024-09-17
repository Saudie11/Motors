import React from 'react';

import './Appbar.css';
import Caro from './Caro';
import SearchForm from './SearchForm';
import Blog from './Blog';
import CarActions from './CarActions';
import Cards from './Cards';
import TestimonialSlider from './TestimonialSlider';
import CarWithCounters from './CarWithCounters';
import VideoPlayer from './VideoPlayer';
import Footer from './Footer';


const Home = () => {
    return (

        <div>
     
        <Caro/>
        <SearchForm/>
        <Blog/>
        <CarActions />
        <Cards />
      <TestimonialSlider/>
      <CarWithCounters />
      <VideoPlayer />
      <Footer />
      
      

      

        
        







    </div>
            
      
    );
}

export default Home;
