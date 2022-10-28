import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTopics } from '../features/topics/topicSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import TopicItem from '../components/TopicItem'

function Topics() {
  const { topics } = useSelector((state) => state.topics)

  const dispatch = useDispatch()

  // NOTE: only need one useEffect here

  useEffect(() => {
    dispatch(getTopics())
  }, [dispatch])

  // NOTE: no need for loading state, we can check for absence of topics
  // If we don't have topics we are loading, if we do have topics we just
  // need to update the topics with latest topics in the background
  if (!topics) {
    return <Spinner />
  }

  return (
    <>
      
      <h1 className='Topics'>Topics</h1>
      <div className='topics'>
        <div className='topic-headings'>
          <div>Date</div>
          <div>Catogory</div>
          <div>Status</div>
          <div></div>
        </div>
        {topics.map((topic) => (
          // only display the biggerst fish in result 
          <TopicItem key={topic._id} topic={topic} />
        ))}
        <BackButton />
      </div>
    </>
  )
}

export default Topics
