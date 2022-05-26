import { Description } from "./pages/Description";
import { FormContact } from "./pages/Form";
import { Home } from "./pages/home";
import { Testimonies } from "./pages/testimonies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <>
      <Home />
      <Description />
      <Testimonies />
      <FormContact />
      <Footer/>
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
