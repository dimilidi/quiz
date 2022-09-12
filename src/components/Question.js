import {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../contexts/QuizContext';
import Answer from './Answer';


export default function Question() {
  
  const navigate = useNavigate()

  const {
    clicked,
    setChecked, 
    setClicked,
    questionsList,
    setShowResults,
    showResults,
    correct,
    setCorrect,
    setWrong,
    wrong,
    history,
    setHistory,
    setScore,
    score,
    setCurrentQuestion,
    currentQuestion
  } = useContext(QuizContext);

  /* State {end} --> end of quiz
                 -->brings the answer of the last question into the history*/
  const [end, setEnd] = useState(false);
  

  // Solutions
  const solutions = questionsList[currentQuestion].solutions;
  // Answer Indices
  const answerIndex = questionsList[currentQuestion].answers.map((answer,i) =>  questionsList[currentQuestion].answers.indexOf(answer));
  // Which Answer Index is a Solution
  const result = solutions.map((solution) =>{
    return answerIndex.find((index) => index === solution)
  });
  // List of incorrect answers
  const wrongAnswers = clicked?.filter((item) => (!(String(result).includes(item))));
  // List of correct answers
  const correctAnswers = clicked.filter((item) => String(result).includes(item));
    
  /* Set Scores --> 1 score for every correctly checked box. 
                --> When the answer contains wrong and correct checked boxes - 0 scores.*/
  useEffect(() => {
    if(correct.length>0 && wrong.length === 0)  {
      setScore(score + correct.length)
    }else {
      setScore(score)
    }
  },[correct, wrong])

  // Set history for final result table
  useEffect(() => {
    setHistory([...history,{
      correct: [`${correct}`], 
      incorrect:[`${wrong}`],
      clicked: [`${clicked}`]
    }]);
    setClicked([]);
    
    if(end) {
      navigate('/quiz/result')
    }
  },[currentQuestion, end])


    
  //Submit Handler
  const handleSubmit = (e,i)=> {
    e.preventDefault();
    // By first click on submit show current result
    setShowResults(true);
    // Show next question ...
    if(showResults){
      if(currentQuestion + 1   < questionsList.length ) {
        setCurrentQuestion(currentQuestion + 1)
        // Set correct, wrong state
        setCorrect(correctAnswers);
        setWrong(wrongAnswers);
        // Remove show result styling before opening next question
        setShowResults(false)
        // Uncheck all boxes before opening next question
        setChecked([false, false, false, false, false, false, false, false])
    // ... or show final result
      } else {
        setCorrect(correctAnswers);
        setWrong(wrongAnswers);
        setEnd(true)
        if(end)
      setCurrentQuestion(currentQuestion + 1)

      }
    }
    
  }


  return (
    
     <form onSubmit={(e) =>handleSubmit(e)}>

        {/* Category */}
        {/* <h4>Category: {questionsList[currentQuestion].language}</h4> */}

        {/* Question */}
        <h3>{questionsList[currentQuestion].question}</h3>

        {/* Code */}
        <p className={questionsList[currentQuestion].code ?'code' : ''}>{questionsList[currentQuestion].code}</p>
        <p></p>

        {/* Answers */}
        <div className='answers-con'>
          {
            questionsList[currentQuestion].answers.map((answer,i) => {
              return (  
                 <Answer 
                    key={i}
                    answer = {answer} 
                    i = {i}  
                    result = {result}
                    className={!showResults? '' : result.includes(i)  ? 'correct' : 'incorrect'}
                 />
              )
            })
          }
        <input className = 'button' type="submit" value="Submit" />
        </div>
    </form>
  )
}