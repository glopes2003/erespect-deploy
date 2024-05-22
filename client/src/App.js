import "./App.css";
import ServiceFormPage from "./serviceFormPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer autoClose={3000} position="bottom-left" />
      <ServiceFormPage />
    </>
  );
}

export default App;
