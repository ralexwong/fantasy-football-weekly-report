import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchRoster, setLeague_id, fetchGraphPPG } from '../../actions';

import { Container, Row, Col } from "reactstrap"

class Input2 extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    onClick = (e) => {
        console.log(e.target.getAttribute('id'));
        const league = e.target.getAttribute('id');
        localStorage.setItem("league", league);
        this.props.setLeague_id(league);
        this.props.fetchGraphPPG(league);
        this.props.fetchRoster(league);
    }

    mapLeagues = (leagues) => {
        return leagues.map(league => {
            return (
                <li id={league.league_id} key={league.league_id} onClick={(e) => this.onClick(e)} >
                    {league.name}
                </li>
            )
        })
    }

    render() {
        return (
            <div className="sleeperInput">
                <Container >
                    <Row>
                        <Col>
                            <div>
                                <h1>
                                    Click on one league!
                                </h1>
                            </div>
                            <ul>
                                {this.props.leagues ? (
                                    this.mapLeagues(this.props.leagues)
                                ) : (
                                        <div>Leagues not found</div>
                                    )}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { leagues: state.sleeper.leagues }
}

export default connect(mapStateToProps, { fetchRoster, setLeague_id, fetchGraphPPG })(Input2)