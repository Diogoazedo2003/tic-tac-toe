import React, { Component } from 'react';
import Board from './Board';
import Pontuacao from './Pontuacao';
import PlayerForm from './PlayerForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jogadorX: '',
      jogadorO: '',
      pontosJogadorX: 0,
      pontosJogadorO: 0,
      reiniciarJogo: false,
      vencedor: null,
      jogoIniciado: false,
      jogoTerminado: false,
      vencedorFinal: null
    };
  }

  handlePlayerNamesSubmit = (jogadorX, jogadorO) => {
    this.setState({
      jogadorX,
      jogadorO,
      jogoIniciado: true
    });
  }

  atualizarPontuacao = (vencedor) => {
    this.setState(prevState => {
      let novosPontosX = prevState.pontosJogadorX;
      let novosPontosO = prevState.pontosJogadorO;

      if (vencedor === 'X') {
        novosPontosX += 2;
      } else if (vencedor === 'O') {
        novosPontosO += 2;
      } else {
        novosPontosX += 1;
        novosPontosO += 1;
      }

      let jogoTerminado = false;
      let vencedorFinal = null;

      if (novosPontosX >= 30) {
        jogoTerminado = true;
        vencedorFinal = prevState.jogadorX;
      } else if (novosPontosO >= 30) {
        jogoTerminado = true;
        vencedorFinal = prevState.jogadorO;
      }

      return {
        pontosJogadorX: novosPontosX,
        pontosJogadorO: novosPontosO,
        jogoTerminado: jogoTerminado,
        vencedorFinal: vencedorFinal
      };
    });
  }

  atualizarVencedor = (vencedor) => {
    this.setState({
      vencedor: vencedor
    });
  }

  reiniciarJogo = () => {
    this.setState({
      reiniciarJogo: true,
      vencedor: null
    });
  }

  handleReiniciarJogo = () => {
    this.setState({
      reiniciarJogo: false,
      vencedor: null
    });
  }

  reiniciarPontuacao = () => {
    this.setState({
      pontosJogadorX: 0,
      pontosJogadorO: 0,
      jogoTerminado: false,
      vencedorFinal: null
    });
  }

  render() {
    const { jogoIniciado, jogadorX, jogadorO, pontosJogadorX, pontosJogadorO, jogoTerminado, vencedorFinal } = this.state;
  
    let mensagemFinal = '';
    if (vencedorFinal) {
      if (vencedorFinal === jogadorX) {
        mensagemFinal = `${jogadorX} com ${pontosJogadorX} pontos, venceu o jogo!`;
      } else if (vencedorFinal === jogadorO) {
        mensagemFinal = `${jogadorO} com ${pontosJogadorO} pontos, venceu o jogo!`;
      }
    } else if (jogoTerminado) {
      mensagemFinal = `O jogo terminou em empate! Jogador X: ${pontosJogadorX} pontos, Jogador O: ${pontosJogadorO} pontos.`;
    }
  
    return (
      <div className="App">
        <h1>Jogo do Galo</h1>
        {!jogoIniciado && <PlayerForm onSubmit={this.handlePlayerNamesSubmit} />}
        {jogoIniciado && (
          <>
            {jogoTerminado ? (
              <div>
                <h2>{mensagemFinal}</h2>
                <button onClick={this.reiniciarPontuacao}>Reiniciar Pontuação</button>
              </div>
            ) : (
              <>
                <Board
                  atualizarPontuacao={this.atualizarPontuacao}
                  atualizarVencedor={this.atualizarVencedor}
                  reiniciarJogo={this.state.reiniciarJogo}
                  reiniciar={this.handleReiniciarJogo}
                />
                <Pontuacao jogadorX={jogadorX} jogadorO={jogadorO} pontosX={pontosJogadorX} pontosO={pontosJogadorO} />
                <button onClick={this.reiniciarJogo}>Reiniciar Jogo</button>
                <button onClick={this.reiniciarPontuacao}>Reiniciar Pontuação</button>
              </>
            )}
          </>
        )}
      </div>
    );
  }
  
  
}

export default App;




