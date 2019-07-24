import { createStore } from "redux";

import reducers from "./reducers";

/* Inicializa o redux para criar os stores com os reducers configurados */
const store = createStore(reducers);

export default store;
