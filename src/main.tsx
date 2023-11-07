import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "i18next";
const { t } = useTranslation();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
