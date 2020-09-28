import React, { useState }  from 'react'
import { Container, Row } from 'react-bootstrap'
import InputBox from './components/InputBox'
import Results from './components/Results'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Home = () => {
    const [inputBinary, setInputBinary] = useState('')
    const [showResults, setShowResults] = useState(false)
    return (
      <Container>
        <Row />
        <Row />
        <Row> <InputBox setInputBinary={setInputBinary} setShowResults={setShowResults} /> </Row>
        <Row>{showResults ? <Results inputBinary={inputBinary} /> : <div />}</Row>
      </Container>
    )
}

export default Home;