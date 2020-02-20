import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchMatchupPoints, setWeekToState } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';


class Input3 extends Component {
    componentDidMount() {

    }

    // takes descontructed props from <Field>
    renderInput = ({ input, label, meta }) => {
        // console.log(meta)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <input {...input} autoComplete="off" placeholder="Week" />
            </div>
        ); // {...input} === onChange={formProps.input.onChange}  value={formProps.input.value}
    }

    onSubmit = (formValues) => {
        console.log(formValues.week);
        this.props.fetchMatchupPoints(formValues.week, this.props.league_id);
        this.props.setWeekToState(formValues.week)
    }

    render() {
        return (
            <Jumbotron className="sleeperInput__jumbotron">
                <div className="sleeperInput__helpertext">
                    <p className="bold">
                        Select a week!
                    </p>
                </div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="week" component={this.renderInput} />
                    <button type="button" className="btn btn--blue">Submit</button>
                </form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => {
    return { league_id: state.sleeper.league_id }
}

export default connect(mapStateToProps, { fetchMatchupPoints, setWeekToState })(reduxForm({
    form: 'user'
})(Input3))