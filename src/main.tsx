import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "styles/index.css";
import { Provider } from "react-redux";
import store from "store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);
