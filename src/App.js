import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Error404 from './components/Error404';
import StatusBar from './components/StatusBar';
import Question from './components/Question';
import Answer from './components/Answer';
import Result from './components/Result';


function App() {
  return (
    <div className="App">
      <header>
        <h1>My Little Quiz</h1>
        <p>Check your knowledge!</p>
      </header>
      
      <main>


        <Routes>
          <Route path = '*' element= {<Error404 />} /> 
          <Route path = '/' element = {<Home />} />
          <Route path = '/quiz' element = {<StatusBar />} >
            <Route path = 'questions' element = {<Question />} />
            <Route path = 'result' element = {<Result />} />
          </Route> 
          
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
