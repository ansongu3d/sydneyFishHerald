import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Form from './pages/Form'
import Article from './pages/Article'
import Login from './pages/Login'
import Register from './pages/Register'
import NewTopic from './pages/NewTopic'
import Topics from './pages/Topics'
import Topic from './pages/Topic'

// NOTE: Here we have removed the nested routing as the path is the same

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/article/:articleId' element={<Article />} />
            <Route
              path='/new-topic'
              element={
                <PrivateRoute>
                  <NewTopic />
                </PrivateRoute>
              }
            />
            <Route
              path='/topics'
              element={
                <PrivateRoute>
                  <Topics />
                </PrivateRoute>
              }
            />
            <Route
              path='/topic/:topicId'
              element={
                <PrivateRoute>
                  <Topic />
                </PrivateRoute>
              }
            />
          </Routes>
          {/* <footer>© Copyright Sydney Fishing Herald 2022.</footer> */}
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
