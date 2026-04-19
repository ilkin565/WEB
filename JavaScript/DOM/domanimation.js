// JavaScript source code
var id = null;
var x_pos = 50;
var y_pos = 50;
var x_shift = 1;
var y_shift = 1;
var isMoving = false;

const elem = document.getElementById("animation");
updateClock();
setInterval(updateClock, 1000);
document.getElementById("fontSize").value = 16;
elem.style.fontSize = "16px";

function updateClock() 
{
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    elem.textContent = `${hours}:${minutes}:${seconds}`;
}

function changeFontSize() 
{
    const size = document.getElementById("fontSize").value;
    elem.style.fontSize = size + "px";
}

function toggleMove() 
{
    const intervalInput = document.getElementById("interval");
    const intervalValue = parseInt(intervalInput.value, 10);
if (isMoving) 
{
    clearInterval(id);
    id = null;
    isMoving = false;
} else
{
    id = setInterval(frame, intervalValue);
    isMoving = true;
}
}

function frame() 
{
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    
    const elemWidth = elem.offsetWidth;
    const elemHeight = elem.offsetHeight;
    
    const maxX = winWidth - elemWidth;
    const maxY = winHeight - elemHeight;
    
    x_pos += x_shift;
    y_pos += y_shift;
    
    elem.style.left = x_pos + 'px';
    elem.style.top = y_pos + 'px';
    
    if (x_pos <= 0) {
        x_shift = 1;
        x_pos = 0;
    } else if (x_pos >= maxX) {
        x_shift = -1;
        x_pos = maxX;
    }
    
    if (y_pos <= 0) {
        y_shift = 1;
        y_pos = 0;
    } else if (y_pos >= maxY) {
        y_shift = -1;
        y_pos = maxY;
    }
}