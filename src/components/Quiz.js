import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from './Data'

const Quiz = () => {
    console.log('Quiz component rendered');
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false)

    let option1 = useRef(null)
    let option2 = useRef(null)
    let option3 = useRef(null)
    let option4 = useRef(null)

    const optionArray = [option1, option2, option3, option4]

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add('correct')
                setLock(true);
                setScore(prev => prev + 1)
            } else {
                e.target.classList.add('wrong')
                setLock(true)
                optionArray[question.ans - 1].current.classList.add('correct')
            }
        }

    }

    const handleNextEvent = () => {
        if (lock) {
            if (index === data.length - 1) {
                setResult(true);
                return 0
            }
            setIndex(++index)
            setQuestion(data[index]);
            setLock(false);
            optionArray.map((item) => {
                item.current.classList.remove('wrong');
                item.current.classList.remove('correct');
                return null
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0])
        setLock(false)
        setScore(0)
        setResult(false)
    }
 
    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            {result ? <></> : <>
                <h2>{index + 1}. {question.question}</h2>
                <ul>
                    <li ref={option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
                    <li ref={option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
                    <li ref={option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
                    <li ref={option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
                </ul>
                <button onClick={handleNextEvent}>Next</button>
                <div className='index'>
                    {index + 1} of {data.length} questions
                </div>
            </>}
            {result && (
                <>
                    <h2>You scored {score} out of {data.length} </h2>
                    <button onClick={reset}>Reset</button>
                </>
            )}
        </div>
    )
}

export default Quiz