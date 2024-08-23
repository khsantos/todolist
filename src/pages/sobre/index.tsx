import React from "react";
import "./styles.css";

function Sobre() {
  return (
    <div className="container">
      <div className="separador-1">
        <h1 className="primary-title">Sobre Mim</h1>
        <h2 className="secondary-title"> Kauã Heidemann Santos</h2>
        <p className="primary-text"> Profissão: Estudante</p>
        <p className="primary-text">
          Nasci em Capitão Leônidas Marques, me chamo Kauã Heidemann Santos e
          tenho 19 anos.
        </p>
        <p className="primary-text">
          Desde cedo já tive a oportunidade de conhecer e se interessar por
          tecnologia, sendo muito curioso, meu irmão mais velho, quando eu o
          incomodava quando estava mexendo no computador, me deixava me divertir
          junto, as vezes deixando eu jogar ou me guiar de como funcionava.
        </p>
        <p className="primary-text">
          Com o fim do Ensino Médio, tive muita vontade de aprender mais sobre
          tecnologias, e como criar elas, portanto, comecei o Ensino Superior no
          curso de Engenharia de Software. Atualmente estou no 3º Ano e 6º
          Período.
        </p>
        <a href="https://github.com/khsantos" target="blank">
          {" "}
          <img
            className="github-logo"
            src="github-mark-white.png"
            alt="github-logo"
          />{" "}
        </a>
      </div>
      <div className="separador-2">
        <img className="pfp" src="/pfp.png" alt="pfp" />
      </div>
    </div>
  );
}

export default Sobre;
