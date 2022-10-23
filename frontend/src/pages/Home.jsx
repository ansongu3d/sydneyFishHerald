import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'


function AllTopics() {

  const [allTopics, setAllTopics] = useState([])

  // NOTE: only need one useEffect here
  useEffect(async() => {
    axios.get('/api/topics/all').then((res) => {
      console.log(res.data)
      setAllTopics(res.data)
    })
  }, [])

  // NOTE: no need for loading state, we can check for absence of topics
  // If we don't have topics we are loading, if we do have topics we just
  // need to update the topics with latest topics in the background
  if (!allTopics.length) {
    return <Spinner />
  }

  return (
    <>
      <p>{JSON.stringify(allTopics)}</p>
    </>
  )
}

export default AllTopics
