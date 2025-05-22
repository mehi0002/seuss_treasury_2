import { Outlet, NavLink } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <article data-theme="light" className="container-fluid">

      <header id="site-header" className="toolbar"> 
        <h1>Seuss Treasury</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Books</NavLink>
            </li>
            <li>
              <NavLink to="/quotes" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Quotes</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

    </article>
  );
}

export default App
