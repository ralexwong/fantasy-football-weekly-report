import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchLeagues } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

class SleeperInput1 extends Component {
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
                <input {...input} autoComplete="off" placeholder="Username" />
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
                <Jumbotron className="sleeperInput__jumbotron">
                    <div className="sleeperInput__helpertext">
                        <p className="bold">
                            First enter your username here!
                        </p>
                        <p>
                            (You can use my username if you want to test it out: <b>wongman</b>)
                        </p>
                    </div>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="sleeperForm">
                        <Field name="username" component={this.renderInput} label="Enter Username" />
                        <button type="button" className="btn btn--blue">Submit</button>
                    </form>
                </Jumbotron>
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
})(SleeperInput1))