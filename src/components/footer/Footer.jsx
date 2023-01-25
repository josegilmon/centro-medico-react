
function Footer() {

  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
    <footer className="footer">
      <div className="has-text-white">© 2023 Centro Médico La Paz</div>
      <div className="content has-text-centered">
        <p className="rrss">
          <a href="https://www.educa2.madrid.org/web/centro.ies.lapaz.alcobendas">
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="https://www.educa2.madrid.org/web/centro.ies.lapaz.alcobendas">
            <i className="fab fa-twitter-square fa-2x"></i>
          </a>
          <a href="https://www.educa2.madrid.org/web/centro.ies.lapaz.alcobendas">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.educa2.madrid.org/web/centro.ies.lapaz.alcobendas">
            <i className="fab fa-snapchat fa-2x"></i>
          </a>
        </p>
      </div>
      <div className="has-text-white">Developed by<a className="has-text-white" href="https://github.com/josegilmon" target="_blank">Team Medic</a></div>
    </footer>
  )
}

export default Footer
