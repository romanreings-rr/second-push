import React from 'react'
import twitterImage from './images/twitter.png';
import FacebookImage from './images/facebook.png';
import InstaImage from './images/insta.png';
import GithubImage  from './images/github.png';


function Footer() {
  return (
    <div>
      <div className='footer-main'>
      <img className='T' src={twitterImage} alt="twitter Logo" />
     <img className='F' src={FacebookImage} alt="facebook Logo" />
     <img className='I' src={InstaImage} alt="insta Logo" />
     <img className='G' src={ GithubImage } alt="github Logo" />
     
      </div>
     
     
    </div>
  )
}

export default Footer
