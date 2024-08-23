import React from "react";

function Home() {
  return (
    <div>
      <h1>Home: Explicação de como um Todo funciona</h1>
      <p>
        Uma lista "to-do" é uma ferramenta simples e eficaz para organizar
        tarefas e compromissos. Ela permite que você anote tudo o que precisa
        fazer, ajudando a priorizar e a monitorar o progresso de suas
        atividades.
      </p>

      <div>
        <p>
          <h3 style={{ display: "inline-flex" }}>Organização: </h3>
          Ajuda a organizar as tarefas de forma clara e concisa, evitando que
          você esqueça de fazer algo importante.
        </p>

        <p>
          <h3 style={{ display: "inline-flex" }}> Priorização: </h3>
          Permite que você categorize as tarefas por ordem de importância ou
          urgência, ajudando a focar no que realmente importa.
        </p>

        <p>
          <h3 style={{ display: "inline-flex" }}> Produtividade: </h3>
          Ao ter uma visão clara das tarefas, você pode trabalhar de forma mais
          eficiente, completando uma por uma.
        </p>

        <p>
          <h3 style={{ display: "inline-flex" }}> Monitoramento:</h3>
          Facilita o acompanhamento do progresso, pois você pode marcar as
          tarefas concluídas, o que pode ser muito motivador.
        </p>

        <p>
          <h3 style={{ display: "inline-flex" }}> Redução de Estresse: </h3>
          Ao ter todas as suas tarefas listadas, você pode se sentir mais no
          controle e menos sobrecarregado.
        </p>
      </div>
    </div>
  );
}

export default Home;
