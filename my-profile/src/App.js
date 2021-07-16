import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home  from './components/Home';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="app">
      <NavBar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
    </Switch>
    <Footer />
    </div> 
</Router>
  );
}

export default App;
