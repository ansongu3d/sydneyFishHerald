import { Link } from 'react-router-dom'

function TopicItem({ topic }) {
  return (
    <div className='topic'>
      <div>{new Date(topic.createdAt).toLocaleString('en-US')}</div>
      <div>{topic.catogory}</div>
      <div className={`status status-${topic.status}`}>{topic.status}</div>
      <Link to={`/topic/${topic._id}`} className='btn btn-reverse btn-sm'>
        View
      </Link>
    </div>
  )
}

export default TopicItem
