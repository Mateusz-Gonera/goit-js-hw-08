import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on("timeupdate", ({ duration, percent, seconds }) => {
      throttle(() => { localStorage.setItem("videoplayer-current-time", `${seconds}`); }, 1000);
      
})
