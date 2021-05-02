const videoElement = document.getElementById('video');
const button = document.getElementById('button');

const displayMediaOptions = {
    video: {
      cursor: "never",
    },
    audio: true
  };

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (errror) {
        // Catch Error Here
        console.log('Whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();