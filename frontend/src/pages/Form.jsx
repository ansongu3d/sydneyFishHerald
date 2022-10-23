import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Form() {
  return (
    <>
      <section className='heading'>
        <h1>What do you need help with?</h1>
        <p>Please choose from an option below</p>
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

export default Form
