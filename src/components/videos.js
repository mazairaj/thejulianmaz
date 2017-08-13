import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: 'https://vid.me/9b3N',
    };
  }
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, flexDirection: 'column', height: 500 }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Library</h3>
            <img
              alt=""
              style={{ marginBottom: 5 }}
              src="https://lh3.google.com/u/0/d/0B17WtuksYOC8RkFIaVl2cG4wMFU=w1279-h699-iv1"
              width="150"
              height="85"
              onClick={() => this.setState({ video: 'https://vid.me/9b3N' })}
            />
            <img
              alt=""
              style={{ marginBottom: 5 }}
              width="150"
              src="https://lh3.google.com/u/0/d/0B17WtuksYOC8eUpSOEFtakhrdHc=w1279-h699-iv1"
              onClick={() => this.setState({ video: 'https://youtu.be/2KRFmLzzmRA' })}
            />
            <img
              alt=""
              style={{ marginBottom: 5 }}
              width="150"
              src="https://i.ytimg.com/vi/LWV-_ZziGSM/hqdefault.jpg?custom=true&amp;w=246&amp;h=138&amp;stc=true&amp;jpg444=true&amp;jpgq=90&amp;sp=68&amp;sigh=x020VN85mEEqcOMJ809RBURQcvQ"
              onClick={() => this.setState({ video: 'https://www.youtube.com/watch?v=LWV-_ZziGSM' })}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4>Video of the Day</h4>
            <img
              alt=""
              style={{ marginBottom: 5 }}
              src="https://i.ytimg.com/vi/2CfFvtSUDA0/hqdefault.jpg?sqp=-oaymwEWCMQBEG5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAX5-WvAX0BgJU8qhgnTT3ItnufLQ"
              width="150"
              height="85"
              onClick={() => this.setState({ video: 'https://www.youtube.com/watch?v=2CfFvtSUDA0' })}
            />
          </div>
        </div>
        <div style={{ flex: 4, margin: 100 }}>
          <ReactPlayer url={this.state.video} playing controls={true} />
        </div>
      </div>
    )
  }
}
export default Videos;
// https://youtu.be/HDveqhLWEBE
// https://www.youtube.com/watch?v=LWV-_ZziGSM
// https://youtu.be/2KRFmLzzmRA
