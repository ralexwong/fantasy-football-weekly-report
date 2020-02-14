import React, { Component } from "react";
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchLeagues } from '../../actions';

import '../Input';
import '../Input2';
import '../Input3';

import { Container, Row, Col, Jumbotron } from "reactstrap"

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
            <div className="sleeperInput">
                <Container>
                    <Row>
                        <Col className="test">
                            <Jumbotron className="sleeperInput__jumbotron">
                                <SleeperInput1 />
                                <SleeperInput2 />
                                <SleeperInput3 />
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
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