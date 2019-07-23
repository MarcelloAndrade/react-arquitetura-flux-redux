import React from "react";
import { Provider } from "react-redux";

import store from "./store";

const App = () => (
  /* Provider e responsavel por enviar todo o conteudo do store para os componentes filhos */
  <Provider store={store}>
    <div>
      <h1>Arquitetura flux com react e redux</h1>
    </div>
  </Provider>
);

export default App;
