import React, { Component } from 'react';
import './PlayerForm.css';

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jogadorX: '',
      jogadorO: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.jogadorX, this.state.jogadorO);
  }

  render() {
    return (
      <form className="player-form" onSubmit={this.handleSubmit}>
        <div>
          <label>Nome do Jogador X:</label>
          <input
            type="text"
            name="jogadorX"
            value={this.state.jogadorX}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label>Nome do Jogador O:</label>
          <input
            type="text"
            name="jogadorO"
            value={this.state.jogadorO}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit">Começar Jogo</button>
      </form>
    );
  }
}

export default PlayerForm;
