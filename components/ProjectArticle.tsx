import Footer from "./Footer"
interface ProjectURL {
  url: string
}

const ProjectArticle = ({ url }: ProjectURL) =>{
  console.log(url)
  return (
    <>
      <h1 className='text-lg md:text-6xl mt-2 mx-2'>{url}</h1>
      <Footer />
    </>
  )
}

export default ProjectArticle