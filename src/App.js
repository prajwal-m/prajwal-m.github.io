import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Social from "./components/Social/Social";
import About from "./containers/About/About";
import Skils from "./containers/Skills/Skills";
import Experience from "./containers/Experience/Experience";
import Project from "./containers/Project/Project";
import Footer from "./containers/Footer/Footer";
import ThemeButton from "./components/ThemeButton/ThemeButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skils />
      <Experience />
      <Project />
      <Footer />
      <ThemeButton />
      <Social />
    </div>
  );
}

export default App;
