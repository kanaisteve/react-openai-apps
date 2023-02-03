import { useState } from 'react'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const generateImage = async () => {
    setPrompt('');
    setResponse('');
    console.log('submited: ' + prompt);
    const res = await fetch("http://localhost:3080/generate-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: prompt
      })
    });

    const data = await res.json();
    setResponse(data.image);
    console.log(data.image);
  }

  return <div className="app-main">
    <h3>Generate an Image using OpenAI API</h3>
    <input 
      className='app-input'
      placeholder='Type something to Generate an Image...'
      onChange={(e) => setPrompt(e.target.value)} 
    />
    <button onClick={generateImage}>Generate an Image</button>

    { response.length > 0 ? <img src={response} className="app-image" alt="response" /> : <></> }
  </div>
}

export default App
