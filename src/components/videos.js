import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: 'https://vid.me/9b3N',
      vid1opacity: '1',
      vid2opacity: '1',
      vid3opacity: '1',
    };
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 4, marginTop: 20, marginBottom: 0, marginLeft: 100, marginRight: 100 }}>
          <ReactPlayer width="auto" height="auto" url={this.state.video} playing controls={true} />
        </div>
        <div style={{ alignSelf: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'row' }}>
          <img
            alt=""
            style={{ opacity: this.state.vid1opacity, margin: 5, border: '3 solid #2D4571', backgroundColor: 'white' }}
            src="https://lh3.google.com/u/0/d/0B17WtuksYOC8RkFIaVl2cG4wMFU=w1279-h699-iv1"
            width="150"
            height="85"
            onClick={() => this.setState({ video: 'https://vid.me/9b3N' })}
            onMouseEnter={() => this.setState({ vid1opacity: '.78' })}
            onMouseLeave={() => this.setState({ vid1opacity: '1' })}
          />
          <img
            alt=""
            style={{ opacity: this.state.vid2opacity, margin: 5, border: 3, backgroundColor: '#2D4571' }}
            width="150"
            src="https://lh3.google.com/u/0/d/0B17WtuksYOC8eUpSOEFtakhrdHc=w1279-h699-iv1"
            onClick={() => this.setState({ video: 'https://youtu.be/2KRFmLzzmRA' })}
            onMouseEnter={() => this.setState({ vid2opacity: '.78' })}
            onMouseLeave={() => this.setState({ vid2opacity: '1' })}
          />
          <img
            alt=""
            style={{ opacity: this.state.vid3opacity, margin: 5, border: 3, backgroundColor: '#2D4571' }}
            width="150"
            src="https://i.ytimg.com/vi/LWV-_ZziGSM/hqdefault.jpg?custom=true&amp;w=246&amp;h=138&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=x020VN85mEEqcOMJ809RBURQcvQ"
            onClick={() => this.setState({ video: 'https://www.youtube.com/watch?v=LWV-_ZziGSM' })}
            onMouseEnter={() => this.setState({ vid3opacity: '.78' })}
            onMouseLeave={() => this.setState({ vid3opacity: '1' })}
          />
        </div>
      </div>
    )
  }
}
export default Videos;
// https://youtu.be/HDveqhLWEBE
// https://www.youtube.com/watch?v=LWV-_ZziGSM
// https://youtu.be/2KRFmLzzmRA
