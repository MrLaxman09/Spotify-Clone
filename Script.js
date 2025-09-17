console.log("Wellcome in SpotiFy")


//Initialize the Variable
let songIndex = 0;
let audioElement = new Audio("audio/Shaamat__Full_Video_.m4a");
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "lal ghaghra kaile ba kamal to ooo...", filepath: "audio/10.m4a", coverpath: "cover/1.jpg"},
    {songName: "AB bhi chahu isq bhi ...", filepath: "audio/01.m4a", coverpath: "cover/2.jpg"},
    {songName: "raja hindustani-jii", filepath: "audio/02.m4a", coverpath: "cover/3.jpg"},
    {songName: "rajau", filepath: "audio/03.m4a", coverpath: "cover/4.jpg"},
    {songName: "darad dele bada na-jii", filepath: "audio/04.m4a", coverpath: "cover/5.jpg"},
    {songName: "aap mujhe achhe-jii", filepath: "audio/05.m4a", coverpath: "cover/6.jpg"},
    {songName: "kao mil gya-jii", filepath: "audio/06.m4a", coverpath: "cover/7.jpg"},
    {songName: "tere bina  kaise jio i", filepath: "audio/07.m4a", coverpath: "cover/8.jpg"},
    {songName: "kaha gye o  din", filepath: "audio/08.m4a", coverpath: "cover/9.jpg"},
    {songName: "bahut pya karte hai tumko ii", filepath: "audio/09.m4a", coverpath: "cover/10.jpg"}
]

songItems.forEach((Element, i)=>{
    // console.log(Element, i)
    Element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    Element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
    
});

// audioElement.Play()

//Handle Play/Pause Click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity= 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity= 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //Update Seekbar
    progress = parseFloat((audioElement.currentTime/audioElement.duration)* 100)
    myprogressBar.value = progress;
});
myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})



const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay1')).forEach((Element)=>{
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
        })

}

Array.from(document.getElementsByClassName('songItemPlay1')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `audio/${songIndex+1}.m4a`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0; 
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
     
    })
})
   // this id using to when song end then display pause button 
// if(myprogressBar.value == 100){
//     Element.classList.remove('fa-circle-pause');
//     Element.classList.add('fa-circle-play');
// }

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `audio/${songIndex+1}.m4a`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; 
    audioElement.play();
    gif.style.opacity= 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previos').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `audio/${songIndex+1}.m4a`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; 
    audioElement.play();
    gif.style.opacity= 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})