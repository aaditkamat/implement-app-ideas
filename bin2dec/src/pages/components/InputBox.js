import React, { useState } from 'react'
import './InputBox.css'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'

const InputBox = ({ setInputBinary, setShowResults }) => {
    const [warnUser, setWarnUser] = useState(false)

    const isFormattedCorrectly = (inputValue) => {
        if (!inputValue) {
            return false
        }
        for (let char of inputValue) {
            if (['0',  '1'].indexOf(char) === -1) {
                return false
            }
        }
        return true
    }

    const handleChange = (e) => {
        setShowResults(false)
        const inputValue = e.target.value
        if (isFormattedCorrectly(inputValue)) {
            setWarnUser(false)
            setInputBinary(inputValue)
        } else {
            setWarnUser(true)
        }
    }

    const handleSubmit = () => {
        setShowResults(true)
    }

    return (
        <React.Fragment>
            <Col><input placeholder={0} onChange={handleChange} size="8" maxLength="8" className={warnUser ? 'input-red': 'normal-input'}/></Col>
            <Col><Button variant="primary" disabled={warnUser} onClick={handleSubmit}>Convert to Binary</Button></Col>
            <br />
            {
                warnUser ? 
                <div className="message warning"> 😠 The digits entered must be either 0 or 1 </div> 
                : <div className="message correct">😀 The input is entered in a correct format </div>
            }
        </React.Fragment>
    )
}

export default InputBox