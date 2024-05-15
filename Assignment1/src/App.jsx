import './App.css';
import Viewer from './components/Viewer.jsx';
import Control from './components/Control.jsx';
import Result from './components/Result_.jsx';

import { useState } from 'react';

function App() {

  const [getInput, setGetInput] = useState(0);

  const onClickButton = (value) => {
    setGetInput(value);
  }

  return (
    <div className='App'>
      <section>
        <Viewer/>
      </section>
      <section className='control'>
        <Control onClickButton={onClickButton}/>
      </section>
      <section>
        <Result getInput={getInput}/>
      </section>
    </div>
  )
}

export default App
