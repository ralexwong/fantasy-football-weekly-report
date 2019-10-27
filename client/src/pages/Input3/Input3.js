import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {  } from '../../actions';

import Container from "react-bootstrap/container";

class Input3 extends Component {
    componentDidMount() {
        
    }

    
      // deconstructs {meta} object and uses meta.error && meta.touched
    // displays error message from (validate) if true
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
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
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        ); // {...input} === onChange={formProps.input.onChange}  value={formProps.input.value}
    }

    onSubmit = (formValues) => {
        console.log(formValues.username);   
        this.props.fetchUser(formValues.username)
    }

  render() {
    return (
      <Container>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="username" component={this.renderInput} label="Enter Title" />
                <button className="ui button primary">Submit</button>
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

    if (!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors;
}

export default connect(null, {  })(reduxForm({
    form: 'user',
    validate
})(Input3))