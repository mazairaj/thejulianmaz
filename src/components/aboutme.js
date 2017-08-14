import React from 'react';
import SvgIcon from 'react-icons-kit';
import { instagram } from 'react-icons-kit/fa';

const About = function () {
  return (
    <div style={{ display: 'flex', marginTop: 100, justifyContent: 'center', minWidth: 600 }} >
      <div style={{ width: '25%' }}>
        <img
          style={{ marginRight: 15, width: '100%', height: 'auto' }} alt="" src="https://lh3.google.com/u/0/d/0B17WtuksYOC8SW5aYlRjVVN5Y28=w1146-h699-iv1"
        />
      </div>
      <div style={{ width: '50%', marginLeft: 15 }}>
        <h1
          style={{ fontFamily: 'Pacifico, Helvetica, sans-serif',
            color: '#2D4571',
            textShadow: '1px 1px 0px rgba(0,0,0,0.1), 2px 2px 0px rgba(0,0,0,0.05)',
            fontSize: 25,
            marginBottom: 10 }}
        >About Me</h1>
        <p style={{ marginBottom: 10 }}>Hello!</p>
        <p style={{ marginBottom: 10 }}> I only have two things to say: per
        fectionism is over-rated, and I am n
        ot the best with words, but I know a few. <i>Engineer. Rower. Coach. R
        ock Climber. Crazy.</i> I have been called all of these things, but you c
        an just call me Julian</p>
        <p style={{ marginBottom: 10 }}>I built this website to inspire me to create mo
        re. Create more written c
        ontent so I could learn a few more words (<i>creative, inspiring, unique, etc...</i>). B
        uild more UI. It is, after all, what I do. <strike>Shoot a thought provoking Hollywood c
        lassic that will be analyized by film students for years to come.</strike> M
        ake cool videos. I am playing around with a 1970s film noir satire piece s
        et in Silcon Valley. I need to learn some more words first.</p>
        <p style={{ marginBottom: 10 }}>My goal is to let my mind r
        oam free on this website. The people I am i
        nspired by don&rsquo;t give a fuck, and that&rsquo;s how I want to live</p>
        <p style={{ marginBottom: 10 }}>Please enjoy the co
        ntent I have provided you. Message me with any s
        uggestions and follow me on instagram!</p>
        <a style={{ alignItems: 'center', color: '#2D4571' }} href="https://www.instagram.com/the_julianmaz/"><SvgIcon size={35} icon={instagram} /></a>
      </div>
    </div>
  );
};
export default About;
