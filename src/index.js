import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import spa from "./translations/spa/global.json";
import eng from "./translations/eng/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: spa,
    },
    eng: {
      global: eng,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
