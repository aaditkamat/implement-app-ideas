import React, { useState }from "react"
import InputBox from './components/InputBox'
import Results from './components/Results'

const Home = () => {
    const [inputBinary, setInputBinary] = useState('')
    return (
      <main>
        <InputBox setInputBinary={setInputBinary} />
        <Results inputBinary={inputBinary} />
      </main>
    )
}

export default Home;