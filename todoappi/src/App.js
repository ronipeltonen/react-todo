import React from 'react';
import axios from 'axios';
import './App.css';
import TodoLista from './TodoLista';

export default class App extends React.Component {
  state = {
    iteemit: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/tehtavat/`)
      .then(res => {
        const iteemit = res.data;
        this.setState({iteemit});
      })
      .catch(error => {
        this.setState({virheViesti: error.message});
        console.log(error);
      });
  }

  render() {
    const data = this.state.iteemit;
    console.log(data);
    if (this.state.virheViesti) {
      return (
      <div>
        Virhe: ({this.state.virheViesti}
      </div>
    );
    }
    return (
      <div className="App">
        <TodoLista iteemit={data}/>
      </div>
    );
  }
}
