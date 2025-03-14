function openVideoModal(videoPath) {
    const modal = document.getElementById('videoModal');
    const videoSource = document.getElementById('videoSource');
    const videoPlayer = document.getElementById('videoPlayer');

    // Set the video source
    videoSource.src = videoPath;
    videoPlayer.load(); // Load the new video

    // Display the modal
    modal.style.display = "block";
     // Play the video
     videoPlayer.play(); // Automatically play the video

    // Close the modal when the user clicks on <span> (x)
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        videoPlayer.pause(); // Pause the video when closing
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            videoPlayer.pause(); // Pause the video when closing
        }
    }
}