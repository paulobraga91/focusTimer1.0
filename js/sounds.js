export default function(){
  const buttonPressAudio = new Audio('./assets/audios_button-press.wav') 
  const kitchenTimer = new Audio('./assets/audios_kichen-timer.mp3')
  const bgAudio = new Audio('./assets/audios_bg-audio.mp3')

    bgAudio.loop = true

    function pressButton(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        kitchenTimer.play()
    }

  return{
    pressButton,
    timeEnd,
    bgAudio
  }

}