import React from 'react'
import { useContext } from 'react'
import { QuestionContext } from '../context/QuestionProvider'

export default function Footer() {
    let { prevQuestion, nextQuestion } = useContext(QuestionContext);

    return (

        <div className="d-flex justify-content-center">  
            <button type='button' onClick={prevQuestion}> &lt; &lt; </button>
            <button type='button' onClick={nextQuestion}> &gt; &gt; </button>
        </div>

    )
}
