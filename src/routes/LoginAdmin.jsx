import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthDispatch } from '../context/AuthContext'

export default function LoginAdmin () {
  const [data, setData] = useState({
    login: '',
    password: '',
    message: 'Mensaje de error'
  })
  const dispatch = useAuthDispatch()
  const navigate = useNavigate()

  function handleUsernameChange (e) {
    setData({
      ...data,
      login: e.target.value
    })
  }

  function handlePasswordChange (e) {
    setData({
      ...data,
      password: e.target.value
    })
  }

  function isValidForm () {
    return data.login && data.password
  }

  function send (e) {
    console.log(e)
  }

  function login () {
    if (isValidForm()) {
      fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ ...data })
      })
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: 'loginAdmin',
            data
          })
          navigate('/admin')
        },
        () => {
          setData({
            ...data,
            message: 'Nombre de usuario o contraseña no válidos'
          })
        })
    //   authStore.login(state.username, state.password)
    //     .then((response) => {
    //       authStore.storeTokenAdmin(response.data)
    //       router.push('/admin')
    //     }, () => {
    //       state.msg = 'Nombre de usuario o contraseña no válidos'
    //       router.push('/login')
    //     })
    }
  }

  return (
    <div className="level" onKeyDown={send}>
      <div className="level-item">
        <section className="section is-medium" style={{ width: '400px' }}>
          <article className="notification">

            <div className="field">
              <label className="label">Usuario</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Nombre de usuario"
                  maxLength="50"
                  value={data.login}
                  onChange={handleUsernameChange}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Contraseña"
                  value={data.password}
                  onChange={handlePasswordChange}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field has-text-centered">
              <p className="control">
                <button
                  onClick={login}
                  className="button is-success"
                  disabled={!isValidForm()}>
                  Login
                </button>
              </p>
            </div>

            { data.message && <p className="help is-danger" value={data.message}></p> }
          </article>
        </section>
      </div >
    </div >
  )
}
