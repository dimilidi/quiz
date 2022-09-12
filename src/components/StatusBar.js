import { useContext } from 'react';
import { Outlet } from 'react-router-dom'
import { QuizContext } from '../contexts/QuizContext';
import { questions } from '../questions';

function StatusBar() {

  const {score} = useContext(QuizContext);
  const {currentQuestion} = useContext(QuizContext);

  return (
    <div className='container'>
      <div className='status-bar'>
        <span>Questions {currentQuestion + 1} / {Object.values(questions).length}</span>
        <span>Score {score} / 41</span>
      </div>
      <Outlet />
  </div>
  )
}

export default StatusBar