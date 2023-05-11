function playInvestigationVideo(ev){
    document.body.style.overflow = "hidden";
    show(document.querySelector('div.background-video-player'));
    let video = document.querySelector(`#${ev.target.id.substring(4)}`);
    if (video.id == "Video05"){
        let pwScreen = document.querySelector('div.pw');
        document.querySelector('div.video-player').appendChild(pwScreen);
        document.querySelector('div.video-player > button').style.color = "black";
        show(pwScreen);
        return null;

    }

    document.querySelector('div.video-player').appendChild(video);
    show(video);

}

function closeInvestigationVideo(ev){
    document.body.style.overflow = "auto";
    let video = document.querySelector('div.video-player:last-child video');
    if(video){
        video.pause();
        document.body.appendChild(video);
        hide(video);
    }
    document.body.appendChild(document.querySelector('div.pw'));
    document.querySelector('div.video-player > button').style.color = "white";
    hide(ev);
}

function checkPw(ev){
    let pw = document.getElementById('pw');
    let tpw = document.getElementsByTagName('meta')[3];
    let pwScreen = document.querySelector('div.pw');
    if (pw.value == tpw.getAttribute('important')){
        hide(pwScreen);
        document.body.appendChild(pwScreen);
        hide(document.querySelector('div.pw > span'));
        let video = document.querySelector(`video#Video05`);
        document.querySelector('div.video-player').appendChild(video);
        document.querySelector('div.video-player > button').style.color = "white";
        show(video);


    }
    else{
        show(document.querySelector('div.pw > span'));
        
    }

}

function playFashionMusic(ev){
    document.querySelector("audio#mFashion").play();
}