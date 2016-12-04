import React, { Component } from 'react';
import '../../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import MusicPlayer from './MusicPlayer';
import {Button, Form, FormGroup, FormControl, ControlLabel, Col, Checkbox} from 'react-bootstrap';

class Login extends Component {
   onSubmit(event) {
        event.preventDefault();
   		this.props.dispatch(actions.loginRequest(this.refs.emailText.value, this.refs.passwordText.value));    
        this.refs.emailText.value = "";
        this.refs.passwordText.value = "";
    }
    render() {
        return (
            <div className="Login-page">
            <MusicPlayer/>
                <Form horizontal>
                    <legend>Hey, Stranger. Wanna Jam?</legend>

                    <FormGroup controlId="formHorizontalEmail" >
                      <Col componentClass={ControlLabel} sm={2}>
                        Email
                      </Col>
                      <Col sm={10}>
                        <FormControl type="email" placeholder="Email" ref="emailText" />
                      </Col>
                    </FormGroup>
                    
                    <FormGroup controlId="formHorizontalPassword">
                      <Col componentClass={ControlLabel} sm={2}>
                        Password
                      </Col>
                      <Col sm={10}>
                        <FormControl type="password" placeholder="Password" ref="passwordText" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button id="login-button" onClick={this.onSubmit.bind(this)} value="Submit" className="login-button">Sign in</Button>
                        </Col>
                    </FormGroup>
                  </Form>
            </div>
        );
    }
};

export default connect()(Login);


