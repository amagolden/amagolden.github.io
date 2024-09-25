function showVideo() {
    // Prevent default link behavior
    event.preventDefault();

    // Find the video container and display it
    var videoContainer = document.getElementById("video-container");
    videoContainer.style.display = "block";
  }