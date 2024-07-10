import { createRoot } from "react-dom/client";
import App from "./App";

if (module.hot) {
  module.hot.accept();
}

const container = document.getElementById("root");

if (!container) {
  throw Error("Root doesn't exist");
}
const root = createRoot(container!);
root.render(<App />);
