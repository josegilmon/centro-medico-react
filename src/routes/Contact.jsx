import { useState } from 'react'

export default function Contact () {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
    cc: false
  })

  function handleNameChange (e) {
    setContactData({
      ...contactData,
      name: e.target.value
    })
  }

  function handleEmailChange (e) {
    setContactData({
      ...contactData,
      email: e.target.value
    })
  }

  function handleMessageChange (e) {
    setContactData({
      ...contactData,
      message: e.target.value
    })
  }

  function handleCCChange (e) {
    setContactData({
      ...contactData,
      cc: e.target.checked
    })
  }

  function sendMessage (e) {
    console.log(e)
  }

  return (
    <section className="section columns">
      <div className="container has-text-centered column is-three-quarters">
        <h2 className="title">Contacte con nosotros</h2>

        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Nombre" name="name" value={contactData.name} onChange={handleNameChange} required />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" name="email" value={contactData.email} onChange={handleEmailChange} required />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <textarea className="textarea" placeholder="Escriba aquí su consulta" name="mensaje" value={contactData.message} onChange={handleMessageChange} required></textarea>
          </div>
        </div>

        <div className="field">
          <label className="checkbox has-text-grey-light">
            <input type="checkbox" value={contactData.cc} onChange={handleCCChange} /> Enviar una copia del mensaje a mi correo electrónico
          </label>
        </div>

        <button type="button" className="button is-primary bulma-control-mixin" onClick={sendMessage} disabled="!validForm">
          Enviar Mensaje
        </button>
      </div>
    </section>
  )
}
