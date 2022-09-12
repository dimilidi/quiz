import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { QuizContext } from "../contexts/QuizContext";

function Result() {
 
  const { 
    setHistory,
    history,
    setWrong,
    setCorrect,
    setScore,
    setShowResults,
    setCurrentQuestion,
  } = useContext(QuizContext);

  //Clear states before new Quiz
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setCorrect([""]);
    setWrong([""]);
    setHistory([]);
  };

  return (
    <div>
      <h2> Result</h2>
      <div className="final-result">
        <table>
          <thead>
            <tr>
              <th>Answered Questions</th>
              <th>Correct Answers</th>
              <th>Wrong Answers</th>
              <th>Selected Answers</th>
            </tr>
          </thead>
          {history.map((el, index) => {

            return (
              index > 0 &&
            
              <tbody key={index}>
                <tr >
                  <td>{index}</td>
                  <td>{el.correct}</td>
                  <td>{el.incorrect}</td>
                  <td>{el.clicked}</td>
                </tr>
              </tbody>
            )
          })}
        </table>
        <button className="button" onClick={() => {restartGame()}}>
          <NavLink to="/">Restart</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Result;
