import React, { useState }from "react"
import "./InputBox.css"

const InputBox = ({ setInputBinary, setShowResults }) => {
    const [warnUser, setWarnUser] = useState(false)

    const isFormattedCorrectly = (inputValue) => {
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
            <input onChange={handleChange} size="8" maxLength="8" className={warnUser ? 'input-red': 'normal-input'}/>
            <input type="submit" disabled={warnUser} onClick={handleSubmit} value="Convert to Binary"/>
            <br />
            {
                warnUser ? <span style={{color: 'red'}}> The digits entered must be either 0 or 1 </span>  : <span></span>
            }
        </React.Fragment>
    )
}

export default InputBox