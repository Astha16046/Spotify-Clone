
  let songIndex=0;
  let audioElement =new Audio('songs/1.mp3');
  let masterPlay=document.getElementById('masterPlay');
  let myProgressBar=document.getElementById('myProgressBar');
  let gif=document.getElementById('gif');
  let masterSongName=document.getElementById('masterSongName');







let songs=
[
  {songName:"Tu hai Kaha" , filePath:"./songs/1.mp3" , coverPath:"cover/1.jpeg"},
  {songName:"Keshariya" , filePath:"./songs/2.mp3" , coverPath:"cover/2.jpeg"},
  {songName:"Maan Meri Jaan" , filePath:"./songs/3.mp3" , coverPath:"cover/3.jpeg"},
  {songName:"O Mahi O Mahi" , filePath:"./songs/4.mp3" , coverPath:"cover/4.jpeg"},
  {songName:"Pehle Bhi Mai" , filePath:"./songs/5.mp3" , coverPath:"cover/5.jpeg"},
  {songName:"Sari Duniyya Jala Dunga" , filePath:"./songs/6.mp3" , coverPath:"cover/6.jpeg"},

]

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
  } 
  else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
  }
})




audioElement.addEventListener('timeupdate',()=>{
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

  element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    songIndex = parseInt(element.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src='songs/${songIndex+1}.filePath';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=4){
    songIndex=0;
  }else{
    songIndex +=1;
  }
  audioElement.src='songs/${songIndex+1}.filePath';
  
  masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    makeAllPlays();
})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex=0;
  }else{
    songIndex -=1;
  }
  audioElement.src='songs/${songIndex+1}.filePath';
  
  masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    makeAllPlays();
})