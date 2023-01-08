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

function formatLink( title: string ) : string {
  let link = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return link.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '-').replaceAll('!', '').replaceAll('¡', '').replaceAll('.', '').toLowerCase()
}

export async function getStaticPaths() {
  try {
    const res = await fetch('../../json/projectsData.json')
    const data = await res.json()
    const paths = data.map((x: any) => ({params: {id: formatLink(x.title)}}))

    return {
      paths,
      fallback: false
    }
  } catch (err) {
    console.log(err)
  }
}


export default Project