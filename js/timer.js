import Sounds from "../sounds"
export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls
}){
    
   let timerTimeOut
   let minutes = Number(minutesDisplay.textContent)

function updateDisplay(newMinute,seconds){ // função para atualizar o display, o contador.
    newMinute = newMinute === undefined ? minutes : newMinute
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinute).padStart(2,"0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
    updateMinutes(minutes)
}

function reset(){
    updateDisplay(minutes,0)
    clearTimeout(timerTimeOut)
}

function countdown(){
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent) 
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0
        
       updateDisplay(minutes, 0)

        if (isFinished){
            resetControls()
            updateDisplay()
            Sounds().timeEnd()
        return
        }

        if (seconds <= 0){
            seconds = 3
           --minutes
           
        }
        updateDisplay(minutes, String(seconds -1))
            
        countdown()
    }, 1000);

}

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function hold (){
        clearTimeout(timerTimeOut)
    }


    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold

    }
}