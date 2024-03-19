
"use client";
import fscreen from 'fscreen';

export const handlefullscreen = (refImage) => {
    console.log(refImage.current);
        if (fscreen.fullscreenEnabled) {
          fscreen.addEventListener('fullscreenchange', handler, false);
          fscreen.requestFullscreen(refImage.current);
         }
         
         function handler() {
          if (fscreen.fullscreenElement !== null) {
            console.log('Entered fullscreen mode');
          } else {
            console.log('Exited fullscreen mode');
          }
         }
        }