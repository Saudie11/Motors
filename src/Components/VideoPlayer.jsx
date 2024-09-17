import React from 'react'
import './VideoPlayer.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';




function VideoPlayer() {
  return (
    <div className='videomain'>
        <h1>WELCOME TO <span className="highlight">MOTORS</span></h1>
        <p>With specialists on hand to help with any part of the car shopping or vehicle ownership experience, Motors provides financing, car service and a great selection of vehicles for luxury car shoppers in Chicago, IL. Motors is ultimate Car Dealer,
        Automotive, Auto Dealer WordPress theme.</p>
        <div  className='videobutton'>
            <a href="https://www.youtube.com/embed/DeHme1oILtw?si=6lHW4usfr2xWYly2"><iframe width="560" height="315" src="https://www.youtube.com/embed/DeHme1oILtw?si=6lHW4usfr2xWYly2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></a>
        </div>

      
    </div>
  )
}

export default VideoPlayer

