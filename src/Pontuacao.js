import React from 'react';
import './Pontuacao.css';

const Pontuacao = ({ jogadorX, jogadorO, pontosX, pontosO }) => {
  return (
    <div className="pontuacao">
      <h2>Pontuação:</h2>
      <p>{jogadorX} (X): {pontosX}</p>
      <p>{jogadorO} (O): {pontosO}</p>
    </div>
  );
}

export default Pontuacao;


