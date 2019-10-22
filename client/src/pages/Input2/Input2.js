import React, { Component } from "react";
import { connect } from 'react-redux';
import { Col, Row, Container } from "../../components/Grid";
import { Field, reduxForm } from 'redux-form';
import { fetchUser } from '../../actions';

class Input2 extends Component {
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

    onClick = () => {
        
    }

    mapLeagues = (leagues) => {
        return leagues.map(league => {
            return (
                <div key={league.league_id} onClick={this.onClick} >
                    {league.name}
                </div>
            )
        })
    }

  render() {
    return (
      <Container>

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
    return { leagues: state.leagues }
}

export default connect(mapStateToProps, { fetchUser })(reduxForm({
    form: 'user',
    validate
})(Input2))