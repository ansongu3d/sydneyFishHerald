import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import { FaPlus } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { getTopic, closeTopic } from '../features/topics/topicSlice'
import { getNotes, createNote } from '../features/notes/noteSlice'
import { useParams, useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import NoteItem from '../components/NoteItem'

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

Modal.setAppElement('#root')

function Topic() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')
  const { topic } = useSelector((state) => state.topics)

  const { notes } = useSelector((state) => state.notes)

  // NOTE: no need for two useParams
  // const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { topicId } = useParams()

  useEffect(() => {
    dispatch(getTopic(topicId)).unwrap().catch(toast.error)
    dispatch(getNotes(topicId)).unwrap().catch(toast.error)
  }, [topicId, dispatch])

  // Close topic
  const onTopicClose = () => {
    // NOTE: we can unwrap our AsyncThunkACtion here so no need for isError and
    // isSuccess state
    dispatch(closeTopic(topicId))
      .unwrap()
      .then(() => {
        toast.success('Topic Closed')
        navigate('/topics')
      })
      .catch(toast.error)
  }

  // Create note submit
  const onNoteSubmit = (e) => {
    // NOTE: we can unwrap our AsyncThunkACtion here so no need for isError and
    // isSuccess state
    e.preventDefault()
    dispatch(createNote({ noteText, topicId }))
      .unwrap()
      .then(() => {
        setNoteText('')
        closeModal()
      })
      .catch(toast.error)
  }

  // Open/close modal
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  if (!topic) {
    return <Spinner />
  }

  return (
    <div className='topic-page'>
      <header className='topic-header'>
        <BackButton />
        <h2>
          Topic ID: {topic._id}
          <span className={`status status-${topic.status}`}>
            {topic.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(topic.createdAt).toLocaleString('en-US')}
        </h3>
        <h3>Catogory: {topic.catogory}</h3>
        <hr />
        <div className='topic-desc'>
          <h3>Description of catch</h3>
          <p>{topic.description}</p>
          <p><strong>Fish Size: </strong>{topic.fishSize} (mm)</p>
          <img className='fish-img' src={topic.fishImage}/>
        </div>
        <h2>Notes</h2>
      </header>

      {topic.status !== 'closed' && (
        <button onClick={openModal} className='btn'>
          <FaPlus /> Add Note
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Add Note'
      >
        <h2>Add Note</h2>
        <button className='btn-close' onClick={closeModal}>
          X
        </button>
        <form onSubmit={onNoteSubmit}>
          <div className='form-group'>
            <textarea
              name='noteText'
              id='noteText'
              className='form-control'
              placeholder='Note text'
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </Modal>

      {notes ? (
        notes.map((note) => <NoteItem key={note._id} note={note} />)
      ) : (
        <Spinner />
      )}

      {topic.status !== 'closed' && (
        <button onClick={onTopicClose} className='btn btn-block btn-danger'>
          Close Topic
        </button>
      )}
    </div>
  )
}

export default Topic
