import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App.tsx";
import { Toaster } from "./common/components/UI/Toaster.tsx";
import "./index.css";
import reduxStore from "./store/redux-store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={reduxStore}>
    <App />
    <Toaster />
  </Provider>
);
