
// import { data } from './data'
import { Client } from '@/app/lib/contentful'
import ProjectDetail  from './projectDetail/ProjectDetail';


const page = async() => {
  const response = JSON.stringify(await Client.getEntries({ content_type: "project" }));
  return <ProjectDetail response={response}/>
  
}

export default page;