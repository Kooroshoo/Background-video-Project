const btnElement = document.querySelector(".btn");
const videoElement = document.querySelector(".bg-video");
const preloaderElement = document.querySelector(".preloader");

btnElement.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnElement.offsetLeft);
    const y = (event.pageY - btnElement.offsetTop);

    btnElement.style.setProperty("--xPos", x + "px");
    btnElement.style.setProperty("--yPos", y + "px");

});

btnElement.addEventListener("click", () => {
    if (videoElement.classList.contains("no-brightness")) {
        videoElement.classList.remove("no-brightness");
        videoElement.play();
    } else {
        videoElement.classList.add("no-brightness");
        videoElement.pause();
    }
});

window.addEventListener("load", () => {
    
    setTimeout(function() {
        preloaderElement.classList.add("transparent");
        setTimeout(function() {
            preloaderElement.style.zIndex = "-2";
          }, 1000);
      }, 2000);
    
});