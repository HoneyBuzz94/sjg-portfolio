import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <div className="columns is-centered m-3">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
