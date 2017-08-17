import React, { Component } from 'react';
import SvgIcon from 'react-icons-kit';
import { Modal, Button } from 'react-bootstrap';

import { arrowCircleLeft } from 'react-icons-kit/fa';
import { arrowCircleRight } from 'react-icons-kit/fa';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null,
      opacityLeft: 'linear-gradient(to right, #DCE8FF, white)',
      opacityRight: 'linear-gradient(to left, #DCE8FF, white)',
      imageOpacity: '1',
      show: false,
      images: [
        'https://github.com/mazairaj/oneFifty/raw/master/assets/image/ranking.png',
        'https://lh3.google.com/u/0/d/0B17WtuksYOC8U20zOUhfXzJkSXM=w1184-h634-iv1',
        'https://github.com/mazairaj/BetaVuew/raw/master/images/ActivitySearch.png',
      ],
    };
    this.mouseEnterLeft = this.mouseEnterLeft.bind(this);
    this.mouseLeaveLeft = this.mouseLeaveLeft.bind(this);
    this.mouseEnterRight = this.mouseEnterRight.bind(this);
    this.mouseLeaveRight = this.mouseLeaveRight.bind(this);
    this.mouseEnterImage = this.mouseEnterImage.bind(this);
    this.mouseLeaveImage = this.mouseLeaveImage.bind(this);
    this.mouseClickLeft = this.mouseClickLeft.bind(this);
    this.mouseClickRight = this.mouseClickRight.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.close = this.close.bind(this);
  }

  handleSelect() {
    this.setState({
      show: true,
    });
  }
  mouseEnterLeft() {
    this.setState({ opacityLeft: 'linear-gradient(to right, #BEC7E8, white)' });
  }
  mouseLeaveLeft() {
    this.setState({ opacityLeft: 'linear-gradient(to right, #DCE8FF, white)' });
  }
  mouseEnterRight() {
    this.setState({ opacityRight: 'linear-gradient(to left, #BEC7E8, white)' });
  }
  mouseLeaveRight() {
    this.setState({ opacityRight: 'linear-gradient(to left, #DCE8FF, white)' });
  }
  mouseEnterImage() {
    this.setState({ imageOpacity: '.78' });
  }
  mouseLeaveImage() {
    this.setState({ imageOpacity: '1' });
  }
  mouseClickLeft() {
    if (this.state.index === 0) {
      this.setState({ index: this.state.images.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  }
  mouseClickRight() {
    if (this.state.index === this.state.images.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
    console.log(this.state.index);
  }
  close() {
    this.setState({ show: !this.state.show });
  }
  modalSelect(index) {
    if (index === 0) {
      return (
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: !this.state.show })}
          bsSize="large" aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Rowing Team Data Management Mobile Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                <img
                  style={{ width: '60%', margin: 'auto' }} alt="150x200" src="https://media.giphy.com/media/ggmlxltx7mM7K/giphy.gif"
                />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                  <p>A personal project mobile application for tracking and
                   monitoring team workouts</p>
                  <p>Main Actions:<br />
                  1. Keep track of your teams practice schedule.<br />
                  2. Keep track of everyones extra workouts on your team.<br />
                  3. Schedule extra workouts, and post them to the team.<br />
                  4. Social feed with with Posts, updates, and messaging.<br />
                  5. Search data from past workouts.</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, textAllign: 'center', marginRight: 3 }}>React Native</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Redux</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>MongoDB</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>S3</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Google Sheets API</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Calendar</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Image Processing</h4>
                  </div>
                  <a
                    href="https://github.com/mazairaj/oneFifty"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button style={{ border: '2px solid #DCE8FF', backgroundColor: 'transparent', color: '#BEC7E8', padding: 10, borderRadius: 2, textAllign: 'center', width: '100%' }}>
                    Launch Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (index === 1) {
      return (
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: !this.state.show })}
          bsSize="large" aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Lilitofu React Web App</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <img
                  style={{ height: 'auto', width: 300, margin: 'auto', marginBottom: 15 }} alt="300x200" src="https://lh3.google.com/u/0/d/0B17WtuksYOC8clVZMUxlMHJvRVk=w1239-h634-iv1"
                />
                <img
                  style={{ height: 'auto', width: 300, margin: 'auto' }} alt="300x200" src="https://lh3.google.com/u/0/d/0B17WtuksYOC8bndtcWh1Y2xBRFE=w1239-h634-iv1"
                />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                  <p>Lilitofu is for the World Explorer in you. For your inner tree-hugger,
                   inner child, inner warrior. For the creative you dressed
                    in a monotone suit. Or tattered jeans. For the inner you
                     who is not fond of conventions and longed for freedom.</p>
                  <p>Calling out to all alternative travelers: craft your next experience with
                   Lilitofu. Share your stories. Inspire others. Let that inner you emerge.</p>
                  <p>Because the ones who are crazy enough to go to ends of the world are the ones
                      who will truly Live Life To the Fullest!</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, textAllign: 'center', marginRight: 3 }}>React</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Redux</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>AWS</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Docker</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>WebPack</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Algolia</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Machine Learning Integration</h4>
                  </div>
                  <a
                    href="https://lilitofu.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button style={{ border: '2px solid #DCE8FF', backgroundColor: 'transparent', color: '#BEC7E8', padding: 10, borderRadius: 2, textAllign: 'center', width: '100%' }}>
                      Launch Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (index === 2) {
      return (
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: !this.state.show })}
          bsSize="large" aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Event Sharing Based Social Media Mobile App</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <img
                  style={{ height: 'auto', width: '65%', margin: 'auto', marginBottom: 15 }} alt="300x200" src="https://github.com/mazairaj/BetaVuew/raw/master/images/ActivityTitlePage.png"
                />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                  <p>Social Media Application that help users discover the unique
                   activities going on around them. Users are given access
                   to a main feed that contains all of the currently active events
                    across multiple categories. Users can also connect based on
                     unique interests.</p>
                  <p>Cool Features Include:<br />
                    - Swipeable screen views<br />
                    - Live Messaging and Notifications<br />
                    - Well designed profile page layout<br />
                    - Facebook Login</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, textAllign: 'center', marginRight: 3 }}>React Native</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Redux</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>S3</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Facebook Authentication</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>MongoDB</h4>
                    <h4 style={{ border: '2px solid #DCE8FF', color: '#BEC7E8', padding: 10, borderRadius: 2, marginRight: 3 }}>Google Maps API</h4>
                  </div>
                  <a
                    href="https://github.com/mazairaj/BetaVuew"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button style={{ border: '2px solid #DCE8FF', backgroundColor: 'transparent', color: '#BEC7E8', padding: 10, borderRadius: 2, textAllign: 'center', width: '100%' }}>
                      Launch Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      )
    }
    return <h1>No Modal</h1>;
  }

  render() {
    const img = `${this.state.images[this.state.index]}`;
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row', backgroundColor: 'white' }}>
        <div style={{ backgroundImage: this.state.opacityLeft, width: '15%' }}>
          <div
            style={{ backgroundColor: 'transparent', width: '100%', height: '100%', display: 'flex' }}
            onMouseEnter={this.mouseEnterLeft}
            onMouseLeave={this.mouseLeaveLeft}
            onClick={this.mouseClickLeft}
          >
            <SvgIcon style={{ justifyContent: 'center', margin: 'auto', color: '#d3d3d3' }} size={40} icon={arrowCircleLeft} />
          </div>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '70%' }}
        >
          <div style={{ margin: 'auto' }}>
              <img
                style={{ opacity: this.state.imageOpacity, display: 'block', margin: 'auto' }} alt="250x400" src={this.state.images[this.state.index]}
                onMouseEnter={this.mouseEnterImage}
                onMouseLeave={this.mouseLeaveImage}
                onClick={this.handleSelect}
              />
          </div>
        </div>
        <div style={{ backgroundImage: this.state.opacityRight, width: '15%' }}>
          <div
            style={{ backgroundColor: 'transparent', width: '100%', height: '100%', display: 'flex' }}
            onMouseEnter={this.mouseEnterRight}
            onMouseLeave={this.mouseLeaveRight}
            onClick={this.mouseClickRight}
          >
            <SvgIcon style={{ justifyContent: 'center', margin: 'auto', color: '#d3d3d3' }} size={40} icon={arrowCircleRight} />
          </div>
        </div>
        {this.modalSelect(this.state.index)}
      </div>
    );
  }
}
export default Projects;
// <div style={{ flex: 1, width: 1000 }}>
//   <Slider
//     style={{ marginLeft: 20 }}
//   >
//     <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', marginTop: 40 }}>
//       <img alt="" height="300" src="https://github.com/mazairaj/oneFifty/raw/master/assets/image/ranking.png" />
//       <div style={{ width: 500, marginTop: 25 }}>
//         <p>This is my attempt to develop a Sports Team Workout Log.
//          This application stores the workout data for every athlete
//           individual workouts so that there is full workout transparency.</p>
//         <a style={{ alignItems: 'center' }} href="https://github.com/mazairaj/oneFifty">More Details Here!</a>
//       </div>
//     </div>
//     <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', marginTop: 40 }}>
//       <img alt="" height="300" src="https://github.com/mazairaj/BetaVuew/raw/master/images/ActivityTitlePage.png" />
//       <div style={{ width: 500, marginTop: 25 }}>
//         <p>This is a social Media Application that help users\
//          discover the unique activities going on around them.
//           Users are given access to a main feed that contains all of
//            the currently active events across multiple categories.
//             Users can also connect based on unique interests.</p>
//         <a style={{ alignItems: 'center' }} href="https://github.com/mazairaj/oneFifty">More Details Here!</a>
//       </div>
//     </div>
//     <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', marginTop: 40 }}>
//       <img alt="" height="300" src="https://github.com/mazairaj/stratego/raw/master/images/gamePlay.png" />
//       <div style={{ width: 500, marginTop: 25 }}>
//         <p>This is a React native version of stratego.
//          It was my first attempt to build a game in react native.
//          The game was built very quickly and was designed for a simple to use UI</p>
//         <a style={{ alignItems: 'center' }} href="https://github.com/mazairaj/oneFifty">More Details Here!</a>
//       </div>
//     </div>
//   </Slider>
// </div>
// constructor(props) {
//   super(props);
//   this.state = {
//     index: 0,
//     direction: null,
//   };
//   this.handleSelect = this.handleSelect.bind(this);
// }
//
// handleSelect(selectedIndex, e) {
//   console.log(selectedIndex)
//   console.log(e)
//   this.setState({
//     index: selectedIndex,
//     direction: e.direction,
//   });
// }
//
// render() {
//   return (
//     <Carousel
//       activeIndex={this.state.index}
//       direction={this.state.direction}
//       onSelect={this.handleSelect}
//     >
//       <Carousel.Item>
//         <img style={{ margin: 'auto' }} height={1200} width={500} alt="900x500" src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/15966063_10208225199250929_8665281952004263846_n.jpg?oh=366f416418e6c91b7817f9cf7e096734&oe=5A2CD5BA" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width={900} height={500} alt="900x500" src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/15966063_10208225199250929_8665281952004263846_n.jpg?oh=366f416418e6c91b7817f9cf7e096734&oe=5A2CD5BA" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width={900} height={500} alt="900x500" src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/15966063_10208225199250929_8665281952004263846_n.jpg?oh=366f416418e6c91b7817f9cf7e096734&oe=5A2CD5BA" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }
