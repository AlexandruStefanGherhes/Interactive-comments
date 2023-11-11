import './App.css'
import useFetch from './hooks/useFetch';
import Render from './components/comments';

function App() {
  const {comments,setComments} = useFetch('http://localhost:8000/comments')

  return (
  <div>
    <Render
    comments={comments}
    setComments={setComments}
    />
  </div>
  )
}

export default App
