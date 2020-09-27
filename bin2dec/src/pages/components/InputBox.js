import React from "react"

const InputBox = ({ setInputBinary }) => {
    const handleChange = (e) => {
        setInputBinary(e.target.value)
    }

    return (
        <React.Fragment>
            <input onChange={handleChange}/>
            <input type="submit" value="Convert to Binary"/>
        </React.Fragment>
    )
}

export default InputBox