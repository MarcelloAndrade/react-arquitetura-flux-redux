import React from "react";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";

import store from "./store";
import Routes from "./routes";
//import TodoList from "./components/todos/index";

const App = () => (
  /* Provider e responsavel por enviar todo o conteudo do store para os componentes filhos */
  <Provider store={store}>
    <div>
      <h2>Arquitetura flux com react e redux</h2>
      <Routes />
      {/* <TodoList /> */}
    </div>
  </Provider>
);

export default App;
