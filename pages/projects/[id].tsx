import { useRouter } from "next/router"
import ProjectArticle from "../../components/ProjectArticle"
import projectsData from '../../json/projectsData.json'

interface ProjectProps {
  data: {
    id: string,
    // Poner todos los valores que deben llegar al artículo por acá.
  }
}

function formatLink( title: string ) : string {
  let link = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return link.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '-').replaceAll('!', '').replaceAll('¡', '').replaceAll('.', '').toLowerCase().replaceAll('--', '-')
}

const Project = (props: ProjectProps) => {
  const router = useRouter()
  const returnedId = router.query.id
  return projectsData.map(x => formatLink(x.title) === returnedId ? <ProjectArticle key={x.id} url={x.title} /> : '')
}

export default Project