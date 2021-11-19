// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const video = document.querySelector('.video-container');
const switchBTN = document.querySelector('.switch-btn');

switchBTN.addEventListener('click', function(){
    if(!switchBTN.classList.contains('slide')){
        switchBTN.classList.add('slide');
        video.pause();
    }
    else {
        switchBTN.classList.remove('slide');
        video.play();
    }
})