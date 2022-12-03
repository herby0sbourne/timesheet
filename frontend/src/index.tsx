import React from "react";
import ReactDOM from "react-dom/client";
import StoreProvider from "./provider/Store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
                    <App />
                </DevSupport>
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>
);
