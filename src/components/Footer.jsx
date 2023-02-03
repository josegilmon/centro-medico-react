import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: rgba(72, 199, 142, 1);
  padding: 3rem 1.5rem 1rem;

  .rrss {
    a {
      color: white;
      padding: 10px;
    }
  }
`

function Footer () {
  return (
    <StyledFooter className="footer is-flex is-flex-direction-row">
      <div className="has-text-white is-flex-grow-1">© 2023 Centro Médico La Paz</div>
      <div className="has-text-centered is-flex-grow-5 mb-5">
        <p className="rrss">
          <a href="https://www.educa2.madrid.org/web/centro.ies.lapaz.alcobendas" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="https://www.educa2.madrid.org/web/centro.ies.lapaz.alcobendas" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter-square fa-2x"></i>
          </a>
          <a href="https://www.educa2.madrid.org/web/centro.ies.lapaz.alcobendas" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.educa2.madrid.org/web/centro.ies.lapaz.alcobendas" target="_blank" rel="noreferrer">
            <i className="fab fa-snapchat fa-2x"></i>
          </a>
        </p>
      </div>
      <div className="has-text-white is-flex-grow-1">
        Developed by <a className="has-text-white" href="https://github.com/josegilmon" target="_blank" rel="noreferrer">Team Medic</a>
      </div>
    </StyledFooter>
  )
}

export default Footer
