import React from 'react'

const Results = ({inputBinary}) =>  {
    return (
        <div>
            <span> Binary Input: {inputBinary} </span>
            <br />
            <span> Decimal Output: {parseInt(inputBinary, 2)} </span>
        </div>
    )
}

export default Results;