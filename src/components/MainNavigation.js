import {Link} from 'react-router-dom';


function MainNavigation() {



  return <header className="header">
   <div className = "userName">userName</div>
    <nav>
      <ul>
        <li><Link to = "/">Todos</Link></li>
        <li><Link to = "/create">Create Todo</Link></li>
        <li><Link to = "/favorites">favorites</Link></li>
      </ul>
    </nav>

  </header>
  
 
}

export default MainNavigation;