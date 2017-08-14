import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import React, { Component } from 'react';
import SvgIcon from 'react-icons-kit';

import { videoCamera } from 'react-icons-kit/fa';
import { idCard } from 'react-icons-kit/fa';
import { pencil } from 'react-icons-kit/fa';
import { paperclip } from 'react-icons-kit/fa';
import { cogs } from 'react-icons-kit/fa';
import { paperPlane } from 'react-icons-kit/fa';

class Side extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'about',
    };
  }
  render() {
    const introText = "Hi! I'm Julian...";
    return (
      <div style={{ background: 'white', color: '#2D4571', width: 220 }}>
        <SideNav
          highlightColor="#D73756"
          highlightBgColor="#DCE8FF"
          onItemSelection={(id) => {
            this.props.itemSelect(id);
          }}
        >
          <div style={{ backgroundColor: '#DCE8FF', borderBottom: '1px solid #061839', height: 100, flexDirection: 'row', display: 'flex' }}>
            <img
              alt=""
              width="80" style={{ borderRadius: 40, margin: 10 }} src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/12439023_10206114395882164_3964247135252667796_n.jpg?oh=5066dfc7c3d015f207479a0b54671ab9&oe=59F07362"
            />
            <h2 style={{ alignSelf: 'flex-end' }}>{introText}</h2>
          </div>
          <Nav id="about">
            <NavIcon><SvgIcon size={20} icon={idCard} /></NavIcon>
            <NavText> About Me</NavText>
          </Nav>
          <Nav id="videos">
            <NavIcon><SvgIcon size={20} icon={videoCamera} /></NavIcon>
            <NavText> My Videos </NavText>
          </Nav>
          <Nav id="projects">
            <NavIcon><SvgIcon size={20} icon={cogs} /></NavIcon>
            <NavText> My Projects </NavText>
          </Nav>
          <Nav id="articles">
            <NavIcon><SvgIcon size={20} icon={pencil} /></NavIcon>
            <NavText> Blog Posts </NavText>
          </Nav>
          <Nav id="resume" href="https://drive.google.com/file/d/0B17WtuksYOC8S1JBZ1ZKLU1ETEk/view?usp=sharing">
            <NavIcon ><SvgIcon size={20} icon={paperclip} /></NavIcon>
            <NavText>My Resume</NavText>
          </Nav>
        </SideNav>
      </div>
    );
  }
}

export default Side;
