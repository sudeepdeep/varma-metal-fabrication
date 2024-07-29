import About from "./About";
import "./App.css";
import Example from "./Example";
import Footer from "./Footer";
import Products from "./Products";

function App() {
  return (
    <div className="App font-poppins">
      <Example />
      <Products id="works" />
      <About id="about" />
      <Footer id="contact" />
    </div>
  );
}

export default App;
