import {Link, Switch} from 'react-router-dom';
import CreatePage from '../pages/Create';
import Todos from '../pages/Todos';
import favorites from '../pages/Favorites';

export const useRoutes = () => {
  return <div>
    <Switch>
       <Link path = "/" component = {Todos} exact/>
       <Link path = "/create" component = {CreatePage}/>
       <Link path = "/favorites" component = {favorites}/>
    </Switch>
  </div>
}

