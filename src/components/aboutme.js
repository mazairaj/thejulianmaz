import React from 'react';
import SvgIcon from 'react-icons-kit';
import { instagram } from 'react-icons-kit/fa';

const About = function () {
  return (
    <div style={{ flex: 1, display: 'flex', margin: 100 }}>
      <div style={{ width: 500 }}>
        <h1>About Me</h1>
        <p>Hello!</p>
        <p> I only have two things to say: perfectionism is over-rated, and I am
        not the best with words, but I know a few. <i>Engineer. Rower. Coach.
        Rock Climber. Crazy.</i> I have been called all of these things, but you
        can just call me Julian</p>
        <p>I built this website to inspire me to create more. Create more written
        content so I could learn a few more words (<i>creative, inspiring, unique, etc...</i>).
        Build more UI. It is, after all, what I do. <strike>Shoot a thought provoking Hollywood
        classic that will be analyized by film students for years to come.</strike>
        Make cool videos. I am playing around with a 1970s film noir satire piece
        set in Silcon Valley. I need to learn some more words first.</p>
        <p>My goal is to let my mind roam free on this website. The people I am
        inspired by don&rsquo;t give a fuck, and that&rsquo;s how I want to live</p>
        <p>Please enjoy the content I have provided you. Message me with any
        suggestions and follow me on instagram!</p>
        <a style={{ alignItems: 'center' }} href="https://www.instagram.com/the_julianmaz/"><SvgIcon size={35} icon={instagram} /></a>
      </div>
    </div>
  );
};
export default About;
