
document.getElementById('logo').onclick = mudarCorFundo;

function mudarCorFundo(){
        var r = Math.random()*255;
        var g = Math.random()*255;
        var b = Math.random()*255;

        document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}

