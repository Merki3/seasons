document.getElementById('playVideo').addEventListener('click', function() {
    const messageContainer = document.getElementById('messageContainer');
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('video');
    const emojiBackground = document.querySelector('.emoji-background');
    
    // Show the emoji background
    emojiBackground.style.display = 'block';
    
    // Show message and GIF
    messageContainer.style.display = 'block';
    
    // Set the video source and show it
    video.src = "https://www.youtube.com/embed//CnVVjLOGVoY?autoplay=1"; // Autoplay the video
    videoContainer.style.display = 'block';
});
