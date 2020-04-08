import React, { Component } from "react";
import faker from "faker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import { Container } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  renderTable() {
    return (
      <BootstrapTable search={ true } searchPlaceholder='Buscar' pagination data={this.state.users} >
        <TableHeaderColumn dataField="name" isKey >Nome</TableHeaderColumn>
        <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
        <TableHeaderColumn dataField="city">Cidade</TableHeaderColumn>
      </BootstrapTable>
    );
  }

  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        city: faker.address.city()
      };
      this.setState(prevState => ({
        users: [...prevState.users, user]
      }));
    }
  }

  render() {
    return (
      <Container>
        <div className="wrapper">
          {this.renderTable()}
        </div>
      </Container>
    );
  }
}

export default App;
