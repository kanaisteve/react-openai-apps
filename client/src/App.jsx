import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import OptionSelection from './components/OptionSelection'
import Translation from './components/Translation'
import { arrayItems } from './AIOptions'

function App() {
  // console.log(arrayItems);
  const [options, setOptions] = useState({});
  const [input, setInput] = useState("");
  
  const selectOption = (options) => {
    console.log(options);
    setOptions(options);
  }
  console.log(Object.values(options).length)
  const optionsCount = Object.values(options).length

  const handleSubmit = async () => {
    // setPrompt('');
    // setResponse('');
    let object = { ...options, prompt: input }
    console.log(object)
    console.log(input)

    const res = await fetch("http://localhost:3080/question-and-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object),
    });

    const response = await res.json();
    console.log(response);
    // console.log(response);
  }

  return (
    <div className="App">
      { optionsCount === 0 
        ? <OptionSelection arrayItems={arrayItems} selectOption={selectOption} /> 
        : <Translation setInput={setInput} handleSubmit={handleSubmit} /> 
      }
    </div>
  )
}

export default App
