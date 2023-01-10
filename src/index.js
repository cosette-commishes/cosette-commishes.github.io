import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from "./reducers";

const store = createStore(reducers);

createRoot(document.querySelector('#root'))
    .render(
        <Provider store={store}>
            <App />
        </Provider>
    );