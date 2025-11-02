
function Result({userAnswer, questionList}){
    console.log(userAnswer);
    console.log(questionList);
    return (
        <div>
            <h2>Quiz Completed !</h2>
            <p>Your Score 2/3</p>
            <button className="restart-button">Restart</button>
        </div>
    )
}

export default Result;