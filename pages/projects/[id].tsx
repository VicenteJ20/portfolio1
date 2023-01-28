import { GeneralLayout } from "../../Layout/GeneralLayout"
import Head from 'next/head';

const Project = () => {
  return (
    <>
      <Head>
        <title>This is the dynamic title</title>
      </Head>
      <GeneralLayout>
        <h1>This is a [id] page</h1>
      </GeneralLayout>
    </>
  )
}

export default Project