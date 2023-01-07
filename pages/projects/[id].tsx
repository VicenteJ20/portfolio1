interface ProjectProps {
  data: {
    id: string,
    
    // Poner todos los valores que deben llegar al artículo por acá.
  }
}

const Project = (props: ProjectProps) => {
  return (
    <h1>Hola mundo</h1>
  )
}

export default Project