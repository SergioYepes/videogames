import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './components/pages/landing/landing';
import Home from './components/pages/home/home';
import Nuevo from './components/pages/Create/nuevo';
import Detalles from './components/pages/Details/details'
import Error404 from './components/pages/errors/error404';
import Favorites from './components/pages/Favorites/favorites';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/create" component={Nuevo}/>
        <Route exact path="/favs" component={Favorites}/>
        <Route exact path="/home/:id" component={Detalles}/>
        <Route path="*" component={Error404}/>
        </Switch>
       </div>
    </Router>
  );
}

export default App;
