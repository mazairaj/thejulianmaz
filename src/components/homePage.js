import React, { Component } from 'react';
import Side from './sideNav';
import About from './aboutme';
import Videos from './videos';
import Articles from './articles';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'about',
    };
    this.itemSelect = this.itemSelect.bind(this);
  }
  itemSelect(selection) {
    this.setState({ selected: selection });
  }
  renderPage(selection) {
    switch (selection) {
      case ('about'): {
        this.setState({ selected: 'about' });
        return <About />;
      }
      case ('videos'): {
        this.setState({ selected: 'videos' });
        return <Videos />;
      }
      case ('projects'): {
        this.setState({ selected: 'projects' });
        return <Projects />;
      }
      case ('articles'): {
        this.setState({ selected: 'Articles' });
        return <Articles />;
      }
      case ('resume'): {
        this.setState({ selected: 'resume' });
        return <Resume />;
      }
      case ('contact'): {
        this.setState({ selected: 'contact' });
        return <Contact />;
      }
      default: {
        this.setState({ selected: 'about' });
        return <About />;
      }
    }
  }
  render() {
    return (
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex' }}>
        <div style={{ flex: 1, borderRight: '5px double #061839' }}>
          {this.renderPage(this.state.selected)}
        </div>
        <Side
          itemSelect={this.itemSelect}
          selection={this.state.selected}
          style={{ flex: 1 }}
        />
      </div>
    );
  }
}

export default HomePage;
