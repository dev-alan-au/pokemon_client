import { Link, Outlet } from 'react-router-dom'

export default function MainLayout() {
  return <>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Back to Pokedex
          </Link>
        </div>
      </div>
    </nav>
    <Outlet />
  </>
}