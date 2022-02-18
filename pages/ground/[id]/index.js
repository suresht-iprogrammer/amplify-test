import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import {search as searchData} from '../../../public/assets/data'
const Ground = ({ground}) => {
  const router = useRouter()

  return (
    ground ?<>
     <Meta title={ground.title} description={ground.address} />
      <h1>{ground.title}</h1>
      <p>{ground.address}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>:<>loading...</>
  )
}


export const getStaticProps = async (context) => {
  console.log('~~~ context: ',context)

  return {
    props: {
      // ground: searchData.find(searchDataItem=>searchDataItem.id===context.params.id). 
      ground: searchData[0],
    },
  }
}

export const getStaticPaths = async () => {
  const ids = searchData.map((dataItem) => dataItem.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default Ground