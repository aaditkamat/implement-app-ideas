import React from 'react'
import './Results.css'

const Results = ({inputBinary}) =>  {
    return (
        <div className="results">
            Decimal Output: {parseInt(inputBinary, 2)}
        </div>
    )
}

export default Results;