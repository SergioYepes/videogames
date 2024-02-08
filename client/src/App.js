import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './components/pages/landing/landing.jsx';
import Home from './components/pages/home/home.jsx';
import Nuevo from './components/pages/Create/nuevo.jsx';
import Detalles from './components/pages/Details/details.jsx'
import Error404 from './components/pages/errors/error404.jsx';
import Favorites from './components/pages/Favorites/favorites.jsx';

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
