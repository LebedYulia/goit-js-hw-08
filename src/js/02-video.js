import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(writeCurrentTime, 1000));


function writeCurrentTime({seconds}) {    
   localStorage.setItem("videoplayer-current-time", seconds);
   console.log({seconds})
}

const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime);