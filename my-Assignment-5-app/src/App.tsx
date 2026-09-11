import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Technologies />

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        aria-label="Notifications"
      />

      <Footer />
    </>
  );
}

export default App;