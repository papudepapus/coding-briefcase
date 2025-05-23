import './App.css';
import  NavBar  from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
