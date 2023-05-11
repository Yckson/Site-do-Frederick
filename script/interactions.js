function playInvestigationVideo(ev){
    let video = document.querySelector(`video#${ev.target.id.substring(4)}`);
    document.querySelector('div.video-player').appendChild(video);
    console.log(video)
    document.body.style.overflow = "hidden";
    show(document.querySelector('div.background-video-player'));
    show(video);

}

function closeInvestigationVideo(ev){
    document.body.style.overflow = "auto";
    let videoPlayer = document.querySelector('div.video-player');
    let video = document.querySelector('div.video-player:last-child video');
    video.pause();
    hide(video);
    console.log(video);
    document.body.appendChild(video);
    hide(ev);
}