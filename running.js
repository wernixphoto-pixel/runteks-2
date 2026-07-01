const text = "Selamat membaca, jangan lupa makan dan minum, jangan banyak begadang..padam air.. tutup pntu depan dan belakang";

const speed = 0.8;

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
