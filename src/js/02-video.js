import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on("timeupdate", ({ duration, percent, seconds }) => {
      localStorage.setItem("videoplayer-current-time", `${seconds}`);
}) 

const actualTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(actualTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

console.log(actualTime);