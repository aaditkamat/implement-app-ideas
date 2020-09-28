import React from 'react'

const Results = ({inputBinary}) =>  {
    return (
        <div style={{marginLeft: "15px"}}>
            <span> Decimal Output: {parseInt(inputBinary, 2)} </span>
        </div>
    )
}

export default Results;