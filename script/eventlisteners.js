var playButtons = document.getElementsByClassName('playButton');
for (var c = 0; c <= playButtons.length - 1; c++){
    playButtons[c].addEventListener('click', (event)=>{
        playInvestigationVideo(event);
    });
}

document.querySelector('div.video-player > button').addEventListener('click', (event)=>{
    closeInvestigationVideo(document.querySelector('div.background-video-player'));
})