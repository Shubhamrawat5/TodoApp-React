import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="m-auto px-4">
      <Nav />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
