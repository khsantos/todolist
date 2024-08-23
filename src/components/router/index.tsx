import React, { useState } from "react";
import Todo from "../../pages/todo";
import Sobre from "../../pages/sobre"
import Home from "../../pages/home/home";

enum routes {
    home =  'home',
    todo =  'todo',
    sobre = 'sobre'
}

const Router = () => {
    const [getRoute, setRoute] = useState<routes>(routes.home);

    // é renderizado como uma função com retorno de um Elemento do react
    const renderizarPagina = (rotaDaPagina: routes) => {
        switch (rotaDaPagina) {
            case routes.home: return <Home />
            case routes.todo: return <Todo />
            case routes.sobre: return <Sobre />
            default: return <div><h1>Home</h1></div>
        }
    }

    // é renderizado como um Elemento do react
    const renderizarHeader = () => (
        <div>
            <button onClick={() => setRoute(routes.home)}>Inicio</button>
            <button onClick={() => setRoute(routes.todo)}>Todo</button>
            <button onClick={() => setRoute(routes.sobre)}>Sobre</button>
        </div>
    )

    return (
        <div>
            {renderizarHeader()}
            {renderizarPagina(getRoute)}
        </div>
    )
}

export default Router;