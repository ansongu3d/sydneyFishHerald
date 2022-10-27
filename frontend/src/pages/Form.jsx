import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

export default function Form() {
  return (
    <>
      <section className='heading'>
        <h1>Share your fishing story!</h1>
        <p>The biggest fish will be in the headline!</p>
      </section>

      <Link to='/new-topic' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Create New Topic
      </Link>

      <Link to='/topics' className='btn btn-block'>
        <FaTicketAlt /> View My Topics
      </Link>

    </>
  )
}


