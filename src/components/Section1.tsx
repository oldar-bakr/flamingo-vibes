import React from 'react';
import YouTube from 'react-youtube';
import logo from '../assets/logo.png'; 
import bg1Image from '../assets/s1-bg.png';

const Section1 = () => {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const videoId = 'aQsfPFwX1YU'; 

  return (
    <section style={{ backgroundImage: `url(${bg1Image})` }} className="bg-gradient-to-r from-orange-400 to-orange-500 py-16 mb-8 px-8">
      <div className="container mx-auto">
        <div className="text-center ">
          {/* Logo */}
          <img src={logo} alt="Logo" className="mx-auto mb-8" style={{ maxWidth: '150px' }} />

          {/* Headings */}
          <h1 className="text-4xl font-bold text-white mb-4">ENJOY THE HOLIDAY BETWEEN</h1>
          <h1 className="text-6xl font-bold mb-4">TRABZON & ISTANBUL</h1>
          <p className="text-lg text-white mb-8">The best choice for a holiday with the taste of nature</p>
          
          {/* YouTube video */}
          <div className="overflow-hidden rounded-lg mb-4">
            <YouTube videoId={videoId} opts={opts} className="rounded-lg" />
          </div>
          
          {/* Book now button */}
          <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded hover:bg-blue-100">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section1;
