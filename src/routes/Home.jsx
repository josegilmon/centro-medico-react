import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useMainData, useMainDispatch } from '../context/MainContext'

export default function Home () {
  const data = useMainData()
  const dispatch = useMainDispatch()

  useEffect(() => {
    fetch('http://localhost:8080/api/noticias')
      .then(response => response.json())
      .then(data => dispatch({
        type: 'news',
        data
      }))
  }, [])

  const news = data.news.map(news => {
    return (
      <div className="column is-5" key={news.id}>
        <div className="noticia">
          <a href={news.enlace} target="_blank" rel="noreferrer">
            <div className="imagen">
              <img src={news.imagen} alt={news.titulo} />
            </div>
            <div className="titulo p-2 is-size-4 has-text-white has-background-info">
              { news.titulo }
              <span className="is-size-7 is-pulled-right">
                { dayjs(news.fecha).format('dddd, D [de] MMMM - HH:mm') }
              </span>
            </div>
          </a>
        </div>
      </div >
    )
  })

  function prev () {
    console.log('anterior')
  }

  function next () {
    console.log('siguiente')
  }

  return (
    <>
      <div className="container my-6">
        <div className="columns">
          <div className="banner column p-0 ml-3">
            <img src="./banner_home.jpg" alt="Centro Médico La Paz" />
          </div>
          <div className="column welcome ml-5 borde">
            <h1 className="is-size-4">Bienvenido al Centro Médico La Paz</h1>
            <div className="mt-6">
              El centro médico La Paz es uno de los más avanzados de la zona.
              Disponemos de las consultas más modernas, con la última tecnología en medicina y con los tratamientos más
              novedosos.
              Además, en nuestro centro podrá encontrar a su disposición a algunos de los mejores médicos del país, que le
              brindarán la mejor atención posible.
            </div>
            <div className="mt-6">
              Desde nuestra web, usted podrá concertar una cita con cualquiera de ellos y gestionarla fácilmente desde
              nuestra área privada de paciente,
              así como consultarnos cualquier duda que usted pueda tener sobre nuestros servicios o nuestro personal.
            </div>
          </div>
        </div>
      </div>

      <section className="section has-background-light is-clipped">
        <div className="container">
          <h2 className="title">Últimas noticias en medicina</h2>
          <div className="columns noticias">
            { news }
          </div>

          <div className="columns is-multiline is-justify-content-space-between is-align-items-center">
            <div className="column is-9 mr-4 has-background-grey-light p-0">
              <div className="column is-3 has-background-primary p-0"></div>
            </div>
            <div className="column is-2 ml-auto is-flex is-justify-content-end is-align-items-center">
              <button className="button is-primary is-medium"
                      disabled="state.disableAnterior"
                      onClick={prev}>
                <span className="icon">
                  <i className="fas fa-chevron-left"></i>
                </span>
              </button>
              <button className="button is-primary is-medium ml-3"
                      disabled="state.disableSiguiente"
                      onClick={next}>
                <span className="icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </button>
            </div >
          </div >

        </div >
      </section >
    </>
  )
}
