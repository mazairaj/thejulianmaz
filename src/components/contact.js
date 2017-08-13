import React, { Component, PropTypes } from 'react';
import { Collapse, Button, CardBlock, Card,
  Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { envelope } from 'react-icons-kit/fa';
import SvgIcon from 'react-icons-kit';

Collapse.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.node,
  navbar: PropTypes.bool,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]), // optionally override show/hide delays - default { show: 350, hide: 350 }
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 35, flexDirection: 'column' }}>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ backgroundColor: '#fcf6e7', width: 500 }}>
            <CardBlock style={{ padding: 10 }}>
              <Form>
                <FormGroup row>
                  <Label for="Email" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="Email" placeholder="Email" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Subject" sm={2}>Subject</Label>
                  <Col sm={10}>
                    <Input type="subject" name="subject" id="Subject" placeholder="Subject" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Message" sm={2}>Message</Label>
                  <Col sm={10}>
                    <Input type="textarea" name="text" id="Message" placeholder="Cool Story Brah!" />
                  </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                  <legend className="col-form-legend col-sm-2">Radio Buttons</legend>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        Option one is this and that—be sure to include why its great
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        Option two can be something else and selecting it will deselect option one
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" name="radio2" disabled />{' '}
                        Option three is disabled
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="checkbox2" sm={2}>Checkbox</Label>
                  <Col sm={{ size: 10 }}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Check me out
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBlock>
          </Card>
        </Collapse>
        <SvgIcon
          size={170} icon={envelope} style={{ color: '#2D4571' }}
          onClick={this.toggle}
        />
        <h3
          style={{ fontFamily: 'Pacifico, Helvetica, sans-serif',
            color: '#2D4571',
            textShadow: '3px 3px 0px rgba(0,0,0,0.1), 7px 7px 0px rgba(0,0,0,0.05)' }}
        >Contact Me</h3>
      </div>
    );
  }
}

export default Contact;
