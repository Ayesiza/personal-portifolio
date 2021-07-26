import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home  from './components/Home';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Works from './components/Works';


function App() {
  return (
    <Router>
    <div className="app">
      <NavBar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/about" component={About}/>
      <Route path="/contact" component={Contact} />
      <Route path="/skills" component={Skills} />
      <Route path="/works" component={Works} />
    </Switch>
    <Footer />
    </div> 
</Router>
  );
}

export default App;
