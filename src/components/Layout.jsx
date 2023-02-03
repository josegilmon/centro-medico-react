import { Outlet } from 'react-router-dom'
import Access from './Access'
import Footer from './Footer'
import MenuItem from './MenuItem'

export default function Layout () {
  return (
    <>
      <header className="columns">
        <div className="column title m-0 has-text-centered is-3">
          <div>
            <div>Centro</div>
            <span>+</span>
          </div>
          <div>Médico</div>
        </div>
        <div className="menu column is-6 has-text-centered">
          <nav>
            <MenuItem to="/" name="Inicio" />
            <MenuItem to="/services" name="Servicios" />
            <MenuItem to="/about" name="Nosotros" />
            <MenuItem to="/contact" name="Contacto" />
          </nav>
        </div>
        <div className="column is-3">
          <Access />
        </div>
      </header>

      <div className="content">
        <Outlet />
      </div>

      <Footer></Footer>
    </>
  )
}
