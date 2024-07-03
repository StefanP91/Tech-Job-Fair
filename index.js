const video = document.getElementsByClassName("video-section-video");

let i 
for (i = 0; i < video.length; i++) {
    video[i].addEventListener("click", function() {
        const controls = this.nextElementSibling;
        if (controls.innerHTML === "►") {
            // controls.innerHTML = "❚❚";
            controls.innerHTML = "| |";
            this.play();
        }
        else {
            controls.innerHTML = "►";
            this.pause();
        }
            

    });

    video[i].addEventListener("mouseout", function (){
        const controls = this.nextElementSibling;
        if(!this.paused){
            controls.style.display = "none";
        }
    })

    video[i].addEventListener("mouseover", function (){
        const controls = this.nextElementSibling;
        controls.style.display = "flex";
    })

    video[i].addEventListener("ended", function (){
        const controls = this.nextElementSibling;
        controls.style.display = "flex";
        controls.innerHTML = "►";
    },
    false
);
}