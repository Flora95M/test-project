import MainNavigation from './components/MainNavigation';
import {Route,Router} from 'react-router-dom';
import {useRoutes}  from './components/routes';
import './App.css';


function App() {
  const routes = useRoutes();
  return (
    <Router>
        <div className = "App">
          <header className = "header">
          <MainNavigation/>
              <Route>
                {routes}
              </Route>
          </header>
       </div>
    </Router>
 );
}

export default App;
