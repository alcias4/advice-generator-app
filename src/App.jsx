import { useState , useEffect} from 'react'
import { Generator } from './componets/Generator'
import './App.css'

function App() {
  const [message, setMessage] = useState({});
  const url = 'https://api.adviceslip.com/advice'
  
  
  useEffect(()=>{
    fetch(url).then(re=>re.json()).then(resultado => setMessage(resultado))
  }, [])


  return (
    <div className="App">
      <Generator data={message.slip}/>
    </div>
  )
}

export default App
