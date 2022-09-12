
import {useNavigate} from 'react-router-dom'


function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <p>This is a quiz about HTML, CSS, and JavaScript....</p>
      <p>Find out if you know all the details!</p>
      <button onClick={()=> navigate('/quiz/questions')}>Let's have fun → </button>
    </div>
  )
}

export default Home