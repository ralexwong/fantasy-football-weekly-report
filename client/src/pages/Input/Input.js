import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchLeagues } from '../../actions';

import Container from "react-bootstrap/Container";
import './input.css'

class Input1 extends Component {
    componentDidMount() {
        
    }

    
      // deconstructs {meta} object and uses meta.error && meta.touched
    // displays error message from (validate) if true
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div >{error}</div>
                </div>
            )
        }
    }

    // takes descontructed props from <Field>
    renderInput = ({ input, label, meta }) => {    
        // console.log(meta)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}: </label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        ); // {...input} === onChange={formProps.input.onChange}  value={formProps.input.value}
    }

    onSubmit = (formValues) => {
        console.log(formValues.username);   
        this.props.fetchLeagues(formValues.username)
    }

  render() {
    return (
      <Container fluid id="input1Container">
          <div>
              <h1>
                  First enter your username here! 
              </h1>
              <h3>
                (You can use my username if you want to test it out: <b>wongman</b>)
              </h3>
          </div>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="username" component={this.renderInput} label="Enter Username" />
                <button className="platformBtn platformBtn--blue platformBtn--animated">Submit</button>
            </form>
      </Container>
    )
  }
}

// checks if user inputted a valid title/description
const validate = formValues => {
    const errors = {};

    if (!formValues.username) {
        errors.username = "You must enter a title";
    }
    return errors;
}

const mapStateToProps = (state) => {
    return { nullUsername: state.nullUsername }
}

export default connect(mapStateToProps, { fetchLeagues })(reduxForm({
    form: 'user',
    validate
})(Input1))