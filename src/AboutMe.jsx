import React, { useEffect } from 'react'
import PersonalPhoto from './assets/images/Personal-photo.jpg'
import Backgroundphoto from './assets/images/Aboutme-Background.jpg'



function AboutMe() {

  useEffect(() => {
    document.body.style.backgroundImage = `url(${Backgroundphoto})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = '0 100px'; // Move the image down by 100px
    return () => {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundSize = null;
      document.body.style.backgroundRepeat = null;
      document.body.style.backgroundPosition = null;
    };
  }, []);

  const parentContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // This makes sure the parent container takes up the whole viewport height
  };


  const aboutMeStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    fontFamily: "'Work Sans', sans-serif",
    color: '#333',
    backgroundSize: 'contain',
    borderRadius: '15px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '70%',
    alignItems: 'center',
    justifyContent: 'center', // Add this line to center the content horizontally
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '35%',
    objectFit: 'cover',
    marginRight: '20px',
  };

  return (
  <div style={parentContainerStyle}>
    <div style={aboutMeStyle}>
      <img src={PersonalPhoto} alt="Will Schickler" style={imageStyle} />
      <div>
        <h2>Will Schickler</h2>
        <p>
          I am a full stack developer with a passion for creating and learning new things. I have experience with HTML, CSS, JavaScript, Node.js, React, and more. I am always looking for new projects to work on and new people to work with. Feel free to reach out to me if you have any questions or if you would like to work together.
          When I am not coding my main passion is cars and drifting! I have a 1989 Nissan Skyline R32 that I drift at local events. I also enjoy playing video games and spending time with my roomates!
        </p>
      </div>
    </div>
  </div>

  );

}

export default AboutMe
