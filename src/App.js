import logo from './logo.svg';
import './App.css';
import Func from './Components/Func';
import Cls from './Components/Cls';
import Forms from './Components/Forms';
import FormsTwo from './Components/FormsTwo';
import Ref from './Components/Ref';
import Validation from './Components/Validation';
import { createContext } from 'react';

import One from './Components/One';
export var prasad= createContext();
function App(){
var t="HIIIIIII"
  return(
    <div>
      <h1 >hi iam prasad</h1>

      <Func name="Sneha Reddy"/>
      <Cls name="Prasad"/>
<prasad.Provider value={t}>
      <Forms/>
      </prasad.Provider>
      <FormsTwo/>
      <Ref/>
      <Validation/>
      <one/>
    </div>
  )
}

export default App