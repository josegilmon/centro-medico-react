import MenuItem from './MenuItem'
import { useAuth, useAuthDispatch } from '../context/AuthContext'

export default function Access () {
  const auth = useAuth()
  const dispatch = useAuthDispatch()

  const mostrarLogin = !auth.tokenAdmin && !auth.tokenPaciente
  const rutaAreaPrivada = auth.tokenAdmin ? '/admin' : '/paciente'

  function logout () {
    dispatch({
      type: 'logout'
    })
  }

  return (
    <div>
      <div className="is-flex">
        <nav>
          <div>
            {
              mostrarLogin
                ? <>
                  <MenuItem to="/login-paciente" name="Acceso pacientes" />
                  <MenuItem to="/login" name="Acceso médicos" />
                </>
                : <>
                  <MenuItem to={rutaAreaPrivada} name="Área privada" />
                  <a href="#" onClick={logout}>
                    Cerrar sesión
                    <span className="icon">
                      <i className="fas fa-door-open"></i>
                    </span>
                  </a>
                </>
            }
          </div>
        </nav>
      </div>
    </div>
  )
}
