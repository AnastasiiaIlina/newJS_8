

 const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");
 const buttons = Array.from(document.querySelectorAll("button"));

 const onKeydown = (event)=> {
 	for(var i=0; i<buttons.length; i++){
		if(event.key === keys[i]){
		 	buttons[i].classList.add('keyboard__btn--active');

             if(document.querySelector('#slideThree').checked){
                 playSound(buttons[i].getAttribute('data-note'));
             }
        }
    }
}

const playSound = note => {
 const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

 window.addEventListener("keydown", onKeydown);


