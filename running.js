const text = "HALO APA KABAR";

const speed = 1;

const ticker = document.getElementById("ticker");

ticker.innerHTML = text;

let pos = window.innerWidth;

function jalan(){

    pos -= speed;

    ticker.style.left = pos + "px";

    if(pos < -ticker.offsetWidth){
        pos = window.innerWidth;
    }

    requestAnimationFrame(jalan);
}

jalan();