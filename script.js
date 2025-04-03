
function stepTracker(){
    const stepGoal = document.querySelector("#myGoal").value
    const stepTaken = document.querySelector("#myStep").value
    const madeTime = document.querySelector("#madeIt").value
    const output = document.querySelector("#output")
    let outputText = ""

    if (parseInt(stepGoal) == parseInt(stepTaken)) {
        outputText = "you reached your goals"
    }
    if (parseInt(stepGoal)> parseInt(stepTaken)) {
        outputText = "You need to run faster"
    }else if(parseInt(stepGoal)< parseInt(stepTaken)){
        outputText = "You beat your goal"
    }
        
    

    output.textContent = outputText
}