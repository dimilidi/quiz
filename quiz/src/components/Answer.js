import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

function Answer({ answer, i, className}) {

  const { checked,setChecked,setClicked, showResults} = useContext(QuizContext);
  
 
  const handleInput = (e,i) => {

    // Copy of checked items
    const _checked = [...checked];
    _checked[i] = e.target.checked;
    setChecked(_checked);

    // Add/Remove checked item from list
    if (e.target.checked) {
      // push selected id in list
      setClicked(prev => [...prev, e.target.id]);
    } else {
      // remove unchecked id from the list
      setClicked(prev => prev.filter(x => x !== e.target.id));
    }
  }


 
  return (
    <div  className="answers" >
      <label  className={className} htmlFor={`${i}`}>
        <input
          onChange={(e) => handleInput(e,i)}
          type="checkbox"
          name={`a${i}`}
          value={answer.text}
          id={`${i}`}
          checked =  {checked[i] }
          disabled =   {showResults && true}
        />
          <span>{answer.text}</span>
      </label>
    </div>
  );
}

export default Answer;
