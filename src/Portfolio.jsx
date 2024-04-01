import React from "react";


import BasicQuizImage from "../src/assets/images/basic-coding-quiz.png";
import BasicPlanner from "../src/assets/images/Basic-Planner.png";
import DailyPlanner from "../src/assets/images/Daily-Planner.png";
import JavaNoteTaker from "../src/assets/images/Java-noteTaker.png";
import Pokepedia from "../src/assets/images/Poke-Pedia.png";
import WeatherbyCity from "../src/assets/images/Weather-by-city.png";


function Portfolio() {
    const portfolioItems = [
        { title: 'Basic Coding Quiz', image: BasicQuizImage, Text: 'This is a basic coding quiz that I made using HTML, CSS, and JavaScript.',
         appLink: 'https://willber10.github.io/Coding-quiz-basics-/' , repoLink: '//github.com/willber10/Coding-quiz-basics-?tab=readme-ov-file' },
        { title: 'Basic Planner', image: BasicPlanner, Text: 'This is a basic planner that I made using HTML, CSS, and JavaScript.', 
        appLink: 'https://willber10.github.io/Daily-Event-Planner/' , repoLink: 'https://github.com/willber10/Daily-Event-Planner?tab=readme-ov-file' },
        { title: 'Daily Planner', image: DailyPlanner, Text: 'This is a daily planner that I made using HTML, CSS, and JavaScript.', 
        appLink: 'https://rocky-mountain-31745-6823d73c66a2.herokuapp.com/login' , repoLink: 'https://github.com/shhutc18/Daily-Planner?tab=readme-ov-file' },
        { title: 'Java Note Taker', image: JavaNoteTaker, Text: 'This is a note taker that I made using HTML, CSS, and JavaScript.',
        appLink: 'https://desolate-escarpment-44843-449f4ff95d92.herokuapp.com' , repoLink: 'https://github.com/willber10/Javascript-Note-Taker' },
        { title: 'Pokepedia', image: Pokepedia, Text: 'This is a pokedex that I made using HTML, CSS, and JavaScript.',
        appLink: 'https://shhutc18.github.io/Poke-Pedia/' , repoLink: 'https://github.com/shhutc18/Poke-Pedia?tab=readme-ov-file' },
        { title: 'Weather by City', image: WeatherbyCity, Text: 'This is a weather app that I made using HTML, CSS, and JavaScript.',
        appLink: 'https://willber10.github.io/Weather-By-City-Search/' , repoLink: 'https://github.com/willber10/Weather-By-City-Search' },
    ];

return (
    <div style={{ 
        display: 'grid',
        gap: '20px',
        fontFamily: "'Work Sans', sans-serif",
        marginTop: '900px', 
        margin: '20px',
      }}>
        {portfolioItems.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3>{item.title}</h3>
              <p>{item.Text}</p>
              <a href={item.appLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', backgroundColor: '#007BFF', color: '#fff', padding: '10px 0', borderRadius: '5px', marginTop: '10px' }}>Live Application 🔗</a>
              <a href={item.repoLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', backgroundColor: '#6c757d', color: '#fff', padding: '10px 0', borderRadius: '5px', marginTop: '10px' }}>GitHub Repository 🐙</a>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Portfolio;