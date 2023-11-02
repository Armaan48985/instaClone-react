﻿import React from 'react'
import profilepic from '../images/WhatsApp Image 2023-10-07 at 12.37.10 PM.jpeg'
import {IoMdSettings} from 'react-icons/io'

function Profilehero() {
  return (
   <div className='profile-container'>
     <div className='profile-first-section'>
      <div className='profile-header'>
        <img className='profile-main-img' src={profilepic}/>

        <div className='profile-maintxt'>
          <div className='profile-first-txt'>
            <h4>_armaan_23___</h4>
            <button>Edit Profile</button>
            <button>View archieve</button>
            <span><IoMdSettings/></span>
          </div>
          <div className='profile-second-txt'>
            <p>0 posts</p>
            <p>0 followers</p>
            <p>0 following</p>
          </div>

            <span className='robin'>Armaan.</span>
        </div>

      </div>
      
        <div className='new-highlight'>
          <span className='nami'></span>
          <p>New</p>
        </div>
    </div>

    <div className='profile-second-section'>
      <ul className='slider-options'>
        <li>posts</li>
        <li>Saved</li>
        <li>tagged</li>
      </ul>

      <div className='profile-slider'>
        <div className='first-pro-slider'>
            <h1 className='white'>Slider Section</h1>
        </div>
        <div className='second-pro-slider'>
          <h1 className='white'>Slider Section</h1>
        </div>
        <div className='third-pro-slider'>
          <h1 className='white'>Slider Section</h1>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Profilehero