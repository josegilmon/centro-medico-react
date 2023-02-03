import styled from 'styled-components'

const Box = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;

  .content {
    border-left: 1px solid rgb(72, 199, 142);
    padding-left: 1rem;
  }
`

export default function Admin () {
  return (
    <Box>

      <aside className="menu">
        Calendario
        <br />
        Pacientes
        <br />
        Consultas
      </aside >

      <article className="content">
      </article >
    </Box>
  )
}
