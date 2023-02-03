// import styled from 'styled-components'

const experts = [
  {
    name: 'Lucía Gómez',
    speciality: 'Radiología',
    description: 'Lucía, nuestra experta en radiología',
    image: 'https://media.istockphoto.com/id/1189304032/es/foto/m%C3%A9dico-sosteniendo-tableta-digital-en-la-sala-de-reuniones.jpg?s=612x612&w=0&k=20&c=pmijXzja8qGwKXlqt7YWzSUkxFxnODfK6u7B1QXd1wU='
  },
  {
    name: 'Carlos García',
    speciality: 'Medicina General',
    description: 'Carlos Garcia, experto en Medicina General',
    image: 'https://media.gettyimages.com/id/1307155498/es/foto/smiling-male-doctor-against-gray-background.jpg?s=612x612&w=gi&k=20&c=ee6Q66w04NYYKI9ySgxHJxSNn1euuO9VKs3otPSxEvc='
  },
  {
    name: 'Mario Sánchez',
    speciality: 'Podología',
    description: 'Mario Sánchez, experto en podología',
    image: 'data:image/jpeg;base64,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'
  }
]

const doctors = [
  {
    name: 'Luis Guzón',
    speciality: 'Alergología',
    image: 'https://elmedicointeractivo.com/wp-content/uploads/2022/01/medico-700x466.jpg'
  },
  {
    name: 'Sandra Blanco',
    speciality: 'Cirugía Plástica',
    image: 'https://www.semfyc.es/wp-content/uploads/2016/05/semFYC_Medica-1.jpg'
  },
  {
    name: 'Daniel Guzmán',
    speciality: 'Otorrinolaringología',
    image: 'https://media.istockphoto.com/id/1373659740/es/foto/foto-de-un-joven-m%C3%A9dico-compartiendo-informaci%C3%B3n-de-su-tableta-digital-con-un-paciente-mayor.jpg?s=612x612&w=0&k=20&c=Hc9rLmom3r8u6poelr7H8ZQiXVFf0QcyOF3PNiWOE-o='
  },
  {
    name: 'Marta Martínez',
    speciality: 'Aparato Digestivo',
    image: 'https://blog.hubspot.es/hubfs/media/marketingpublicidadmedico.jpeg'
  },
  {
    name: 'Pedro Jarai',
    speciality: 'Oftalmología',
    image: 'https://www.gruporecoletas.com/noticias/wp-content/uploads/2019/06/medico-de-familia.jpg'
  },
  {
    name: 'Daniel Bañares',
    speciality: 'Ginecología',
    image: 'https://growmedical.org/wp-content/uploads/2022/01/Redes-Sociales-para-Medicos.jpg'
  },
  {
    name: 'Irene Hernandez',
    speciality: 'Uróloga',
    image: 'https://www.mapfre.es/media/mapfre-545x257-contratar-un-seguro-medico-privado.jpeg'
  },
  {
    name: 'Javier Gutierrez',
    speciality: 'Fisioterapia',
    image: 'https://mirial.es/images/blog/2022/mejores-medicos/mirial-mejores-medicos-2022-angel-charte.jpg'
  },
  {
    name: 'María Fernández',
    speciality: 'Odontología',
    image: 'https://img2.rtve.es/v/6546289?w=800&preview=1653314191890.jpg'
  },
  {
    name: 'Gema González',
    speciality: 'Dermatología',
    image: 'https://blog.hubspot.es/hubfs/media/marketingpublicidadmedico.jpeg'
  }
]

// const Section = styled.section`
//   display: flex;
//   width: 600px;
//   height: 430px;
// `
// const Img = styled.img`
//   width: 0px;
//   flex-grow: 1;
//   object-fit: cover;
//   opacity: .8;
//   transition: .5s ease;
//   &:hover {
//     cursor: crosshair;
//     width: 300px;
//     opacity: 1;
//     filter: contrast(120%);
//   }
// `

export default function Services () {
  const expertList = experts.map((doctor, index) =>
    <div className="column" key={index}>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={doctor.image} alt={doctor.name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{doctor.name}</p>
              <p className="subtitle is-6">{doctor.speciality}</p>
            </div>
          </div>
          <div>{doctor.description}</div>
        </div>
      </div>
    </div>
  )

  const doctorsList = doctors.map((doctor, index) =>
    <div className="column is-one-fifth tile is-parent" key={index}>
      <article className="tile is-child box">
        <div className="image mb-5">
          <img src={doctor.image} alt={doctor.name} />
        </div>
        <p className="title is-4">{doctor.name}</p>
        <p className="subtitle">{doctor.speciality}</p>
      </article>
    </div>
  )

  return (
    <>
      <div className="container">
        <div className="container has-text-centered">
          <h2 className="title">Nuestros Médicos</h2>
          <h3 className="px-6">
            Tenemos un amplio equipo de médicos a disposición de nuestros pacientes.
            A continuación podrá ver a que speciality médica se dedica cada uno, además de poder elegir el médico que prefiera por speciality.
          </h3>

          {/*
          <Section className="mx-auto">
            { experts.map((expert, i) => <Img src={expert.image} key={i} />) }
          </Section>
          */}

          <div className="experts columns is-centered py-6">{ expertList }</div>
        </div>

        <div className="container has-text-centered">
          <h2 className="title">Más Médicos</h2>

          <div className="doctor columns is-multiline">{ doctorsList }</div>
        </div>
      </div>

    </>
  )
}
