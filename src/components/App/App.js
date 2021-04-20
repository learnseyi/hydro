import Main from '../Main/Main';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

const App= ()=> {
  return (
    // importing browser router
    <Router>
       <div >
    <Main/>
    </div>
    </Router>
   
  );
}

export default App;
