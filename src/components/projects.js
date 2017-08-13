import React from 'react';
import Slider from 'react-slick';

const Projects = fucntion () {
    return (
      <div style = {{flex: 1, width: 1000}}>
      <Slider style={{marginLeft: 20}}{...settings}>
        <div style={{alignItems:'center', display: 'flex', flexDirection: 'column', marginTop: 40}}>
          <img height="300" src="https://github.com/mazairaj/oneFifty/raw/master/assets/image/ranking.png"/>
          <div style = {{width: 500, marginTop: 25}}>
          <p>This is my attempt to develop a Sports Team Workout Log. This application stores the workout data for every athlete individual workouts so that there is full workout transparency.</p>
          <a style={{alignItems: 'center'}} href='https://github.com/mazairaj/oneFifty'>More Details Here!</a>
          </div>
        </div>
        <div style={{alignItems:'center', display: 'flex', flexDirection: 'column', marginTop: 40}}>
          <img height="300" src="https://github.com/mazairaj/BetaVuew/raw/master/images/ActivityTitlePage.png"/>
          <div style = {{width: 500, marginTop: 25}}>
          <p>This is a social Media Application that help users discover the unique activities going on around them. Users are given access to a main feed that contains all of the currently active events across multiple categories. Users can also connect based on unique interests.</p>
          <a style={{alignItems: 'center'}} href='https://github.com/mazairaj/oneFifty'>More Details Here!</a>
          </div>
        </div>
        <div style={{alignItems:'center', display: 'flex', flexDirection: 'column', marginTop: 40}}>
          <img height="300" src="https://github.com/mazairaj/stratego/raw/master/images/gamePlay.png"/>
          <div style = {{width: 500, marginTop: 25}}>
          <p>This is a React native version of stratego. It was my first attempt to build a game in react native. The game was built very quickly and was designed for a simple to use UI</p>
          <a style={{alignItems: 'center'}} href='https://github.com/mazairaj/oneFifty'>More Details Here!</a>
          </div>
        </div>

      </Slider>
      </div>
    );
};

export default Projects;
