export default function Controls({
    setButton,
    playButton,
    pauseButton,
    stopButton
}){

    function play(){
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
    setButton.classList.add('hide')
    stopButton.classList.remove('hide')
    }

    function pause(){
        pauseButton.classList.add('hide')
        playButton.classList.remove('hide')
    }

    function reset(){ 
        playButton.classList.remove('hide')
        pauseButton.classList.add('hide')
        stopButton.classList.add('hide')
        setButton.classList.remove('hide')
    }

    function getMinutes(){
        let newMinute = prompt("Digite quanto tempo")
        if (!newMinute){
            return false
        }
        return newMinute
    }


    return {reset, play, pause, getMinutes}
}



