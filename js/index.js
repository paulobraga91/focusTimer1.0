import  Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import {
    playButton,
    pauseButton,
    stopButton,
    setButton,
    soundButtonOff,
    soundButtonOn,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"


const sound = Sounds()

const controls = Controls({
    pauseButton,
    playButton,
    setButton,
    stopButton
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
       
})


playButton.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
})

pauseButton.addEventListener('click',function(){
    controls.pause()
    timer.hold()
    sound.pressButton()
})

stopButton.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  sound.pressButton()
    })

    
setButton.addEventListener('click', function(){
    let newMinute = controls.getMinutes()

    if (!newMinute){
        timer.reset()
        return
    }
  
    timer.updateDisplay(newMinute, 0)
    timer.updateMinutes(newMinute)
   
})

soundButtonOn.addEventListener('click', function(){
    soundButtonOn.classList.add('hide')
    soundButtonOff.classList.remove('hide')
    sound.bgAudio.play()
})

soundButtonOff.addEventListener('click',function(){
    soundButtonOn.classList.remove('hide')
    soundButtonOff.classList.add('hide')
     sound.bgAudio.pause()
})


