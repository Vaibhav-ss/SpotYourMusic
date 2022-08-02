//For index

let si=0;
let audioElement = new Audio()
let masterplay=document.getElementById('masterplay')
let progressbar=document.getElementById('song_progress')
let gif=document.getElementById('gif')
let gifgif=document.getElementById('gifgif')
let songitem=Array.from(document.getElementsByClassName('song_item'));

let songs = [
     {sn:"Less than Zero",p:"songs/The_Weeknd_-_Less_Than_Zero.mp3",cover:"The_Weeknd_-_Dawn_FM.png"},
     {sn:"Phantom Regret",p:"songs/The_Weeknd_-_Phantom_Regret_by_Jimcom.mp3",cover:"The_Weeknd_-_Dawn_FM.png"},
     {sn:"Starry Eyes",p:"songs/The_Weeknd_-_Starry_Eyescom.mp3",cover:"The_Weeknd_-_Dawn_FM.png"},
     {sn:"Is There Someone Else",p:"songs/The_Weeknd_-_Is_There_Someone_Elsecom.mp3",cover:"The_Weeknd_-_Dawn_FM.png"},
     {sn:"Dawn FM",p:"songs/The_Weeknd_-_Dawn_FMcom.mp3",cover:"The_Weeknd_-_Dawn_FM.png"},
     {sn:"Gasoline",p:"songs/The_Weeknd_-_Gasolinecom.mp3",cover:"The_Weeknd_-_Dawn_FM.png"},
     {sn:"I Heard You're Married",p:"songs/The_Weeknd_ft_Lil_Wayne_-_I_Heard_You_re_Marriedcom.mp3",cover:"The_Weeknd_-_Dawn_FM.png"},
     {sn:"Out of Time",p:"songs/The_Weeknd_-_Out_of_Timecom.mp3",cover:"The_Weeknd_-_Dawn_FM.png"},
]
songitem.forEach((elements,i)=>{ 
    elements.getElementsByTagName('span')[0].innerText=songs[i].sn;
    elements.getElementsByTagName('img')[0].src=songs[i].cover;
});

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        gifgif.style.opacity=1;
        gif.style.opacity=1;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else{
        gifgif.style.opacity=0;
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})

console.log(audioElement.duration)
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})

audioElement.addEventListener('ended',()=>{
    si=si+1;
    allPlay();
    document.getElementById(si).classList.add('fa-volume-high');
    let s = songs[si].p;
    audioElement.src=s;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    document.getElementsByClassName('song_playing')[0].innerText=songs[si].sn;
    gifgif.style.opacity=1;
    gif.style.opacity=1;
})

const allPlay=()=>{
    Array.from(document.getElementsByClassName('start_song')).forEach((element)=>{
        if(element.classList.contains('fa-volume-high')){
            element.classList.remove('fa-volume-high')
        }
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('start_song')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        allPlay();
        si=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-volume-high');
        let s = songs[si].p;
        console.log(s);
        audioElement.src=s;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        console.log(songs[si].sn);
        document.getElementsByClassName('song_playing')[0].innerText=songs[si].sn;
        gifgif.style.opacity=1;
        gif.style.opacity=1;
    })
})

document.getElementById('pre').addEventListener('click',()=>{
    if(si==0){
        si=7;
    }
    else{
        si=si-1;
    }
    allPlay();
    document.getElementById(si).classList.add('fa-volume-high');
    let s = songs[si].p;
    audioElement.src=s;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    document.getElementsByClassName('song_playing')[0].innerText=songs[si].sn;
    gifgif.style.opacity=1;
    gif.style.opacity=1;
})

document.getElementById('next').addEventListener('click',()=>{
    if(si==7){
        si=0;
    }
    else{
        si=si+1;
    }
    allPlay();
    document.getElementById(si).classList.add('fa-volume-high');
    let s = songs[si].p;
    audioElement.src=s;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    document.getElementsByClassName('song_playing')[0].innerText=songs[si].sn;
    gifgif.style.opacity=1;
    gif.style.opacity=1;
})

//For spot