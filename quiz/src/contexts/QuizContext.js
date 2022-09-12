import { createContext, useState} from "react";
import { questions } from "../questions";


export const QuizContext = createContext()

export const QuizProvider = ({children}) =>{

    const questionsList = Object.values(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    // Show current result via styling (red color -->wrong,  green -->correct)
    const [showResults,setShowResults] = useState(false);
    // State history of results(question N_o, correct, wrong, clicked)
    const [history, setHistory] = useState([]);
    // Selected wrong answers
    const [wrong, setWrong] = useState([]);
    // Selected correct answers
    const [correct, setCorrect] = useState([]);
    // List of selected answers' indices for every question
    const [clicked, setClicked] = useState([]);
    const [checked, setChecked] = useState(new Array(8).fill(false));


    const exportData = {
      questionsList, 
      currentQuestion, 
      setCurrentQuestion, 
      score,
      setScore, 
      showResults, 
      setShowResults,  
      history, 
      setHistory, 
      wrong, 
      setWrong, 
      clicked, 
      setClicked, 
      correct, 
      setCorrect, 
      checked, 
      setChecked,
    }

    return (
      <QuizContext.Provider value = {exportData} >
         {children}
      </QuizContext.Provider>
    )
}
