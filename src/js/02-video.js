import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(writeCurrentTime, 1000));


function writeCurrentTime({seconds}) {    
   localStorage.setItem("videoplayer-current-time", seconds);
   console.log({seconds})
}

const valueLocalStorage =  localStorage.getItem("videoplayer-current-time");
const currentTime = valueLocalStorage ?  valueLocalStorage : 0;
player.setCurrentTime(currentTime);