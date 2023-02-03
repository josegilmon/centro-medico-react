const styles = {
  margin: '15% 0'
}

export default function NotFound () {
  return (
    <div className="container has-text-centered not-found">
      <h1 style={ styles }>Lo sentimos, la página que está buscando no existe</h1>
      <div><a className="has-text-primary" href="/">Volver a la página de inicio</a></div>
    </div>
  )
}
