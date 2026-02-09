// JavaScript source code
function createNumbers() {
    const container = document.getElementById('numbers');
    for (let i = 1; i <= 12; i++) {
        const number = document.createElement('div');
        number.className = 'number';
        number.innerText = i;
        
        const angle = i * 30;
        number.style.transform = `rotate(${angle}deg)`;
        number.innerHTML = `<span style="display:inline-block; transform:rotate(-${angle}deg)">${i}</span>`;
        
        container.appendChild(number);
    }
}

function updateClock() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const secDeg = (sec / 60) * 360;
    const minDeg = ((min + sec / 60) / 60) * 360;
    const hrDeg = ((hr % 12 + min / 60) / 12) * 360;

    document.getElementById('second').style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
}

createNumbers();
setInterval(updateClock, 1000);
updateClock();