import {BrowserRouter,Routes,Route} from "react-router-dom";
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route>
        <Route path="/" element={<Main />} />
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
