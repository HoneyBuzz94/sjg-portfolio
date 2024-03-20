import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <body className="hero is-fullheight">
        <div className="columns is-centered m-3">
          <Outlet />
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
