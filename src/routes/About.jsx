const anchorStyle = {
  color: 'white',
  '&:visited': {
    color: 'white'
  }
}

const greenStyle = {
  backgroundColor: 'rgb(80, 196, 140)',
  color: 'white'
}

const imgStyle = {
  maxHeight: '500px'
}

export default function About () {
  return (
    <div className="columns mt-5">
      <div className="column is-9 columns" style={greenStyle}>
        <div className="container is-align-items-center column">
          <div className="column">
            <h4>Email</h4>
            <div>
              <p>
                <a className="is-text-white" href="./contact" style={anchorStyle}>
                  proyectodawjj@gmail.com
                  <br />
                  Si quiere dejar un mensaje, haga clic aqui
                </a>
              </p>
            </div>
          </div>

          <div className="column">
            <h4>Teléfono</h4>
            <div>
              918 67 43 38
            </div>
          </div>

          <div className="column">
            <h4>Horarios</h4>
            <div>
              08:00-21:00
            </div>
          </div>

          <div className="column">
            <h5>Dirección</h5>
            <div>
              <p>Oficinas Centrales</p>
              <h6>
                C. de Francisco Chico Mendes, 4, 28108
                <br />
                Alcobendas, Madrid
              </h6>
            </div>
          </div>
        </div>

        <div id="map" className="column mapa my-auto">
          <img src="http://localhost:8080/api/mapa" alt="Ubicación" style={imgStyle} />
        </div>
      </div>
      <div className="column is-3">
        <img className="mx-auto is-pulled-right" src="./public/nosotros.jpg" alt="Nosotros" style={imgStyle} />
      </div>
    </div>
  )
}
