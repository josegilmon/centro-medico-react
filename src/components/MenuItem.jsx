import { Link, useLocation } from 'react-router-dom'

export default function MenuItem ({ to, name }) {
  const location = useLocation()

  const className = location.pathname === to ? 'active-link' : ''

  return (
    <Link to={ to } className={ className }>{ name }</Link>
  )
}
