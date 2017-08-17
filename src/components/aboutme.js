import React from 'react';
import SvgIcon from 'react-icons-kit';
import { instagram } from 'react-icons-kit/fa';
import { linkedin } from 'react-icons-kit/fa';
import { github } from 'react-icons-kit/fa';
import { facebook } from 'react-icons-kit/fa';

const About = function () {
  return (
    <div style={{ display: 'flex', marginTop: 100, justifyContent: 'center', minWidth: 625 }} >
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
        <p style={{ marginBottom: 10 }}> I only have two things to say:
         perfectionism is over-rated, and I am
         not the best with words, but I know a few. <i>Engineer. Rower. Coach. Rock
          Climber. Film Enthusiast. And Die Hard GoT Fan.</i> I have been called all
           of these things, but you
         can just call me Julian</p>
        <p style={{ marginBottom: 10 }}>I built this website to inspire me to create
         more. Create more written content (blog post integration is in the pipeline)
          so I could learn a few more words (<i>creative, inspiring, unique, etc...</i>).
           Build more UI. I plan
            to continue to add new features to this profile regularly. <strike>Shoot
             a thought provoking Hollywood
            classic that will be analyized by film students for years to come.</strike> Make
             cool videos. I am playing around with a film noir satire piece
              set in Silcon Valley.</p>
        <p style={{ marginBottom: 10 }}>My goal is to let my mind
         roam free on this website. The people I am
          inspired by don&rsquo;t think too much, they just create,
         and that&rsquo;s how I want to live</p>
        <p style={{ marginBottom: 10 }}>Please enjoy the
         content I have provided you. Message me with any
          suggestions and follow me on the instagrams!</p>
        <a
          style={{ alignItems: 'center', color: '#2D4571', margin: 5 }}
          href="https://github.com/mazairaj"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgIcon size={25} icon={github} />
        </a>
        <a
          style={{ alignItems: 'center', color: '#2D4571', margin: 5 }}
          href="https://www.linkedin.com/in/julian-mazaira-51386399/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgIcon size={25} icon={linkedin} />
        </a>
        <a
          style={{ alignItems: 'center', color: '#2D4571', margin: 5 }}
          href="https://www.instagram.com/the_julianmaz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgIcon size={25} icon={instagram} />
        </a>
        <a
          style={{ alignItems: 'center', color: '#2D4571', margin: 5 }}
          href="https://www.facebook.com/jmazaira"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgIcon size={25} icon={facebook} />
        </a>
      </div>
    </div>
  );
};
export default About;
