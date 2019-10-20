import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Table from 'react-bootstrap/Table'

class League extends Component {
  state = {
    table: 
    {
      weeks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      title: [],
      description: [],
      winner: []
    }
  };

  componentDidMount() {
    
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Table striped bordered hover>
          <tbody>
            {this.state.table.weeks.map(row => (
              <tr>
                <td>{row.weeks}</td>
                <td>{row.title}</td>
                <td>{row.description}</td>
                <td>{row.winner}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        
      </Container>
    )
  }
}

export default League;
