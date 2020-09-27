import React, { useState }from "react"
import InputBox from './components/InputBox'
import Results from './components/Results'

const Home = () => {
    const [inputBinary, setInputBinary] = useState('')
    const [showResults, setShowResults] = useState(false)
    return (
      <main>
        <InputBox setInputBinary={setInputBinary} setShowResults={setShowResults} />
        {
          showResults ? <Results inputBinary={inputBinary} /> : <div />
        }
      </main>
    )
}

export default Home;