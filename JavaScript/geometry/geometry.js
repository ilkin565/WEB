// JavaScript source code
window.onload = () => {
    drawRhombus(5);
    drawSquare(5);
    drawTriangle(5);
    drawRevTriangle(5);
};

function drawRhombus(n) {
    n = parseInt(n);
    let res = "";

    for (let i = 0; i < n; i++) {
        res += " ".repeat(n - i - 1) + "/" + " ".repeat(i * 2) + "\\\n";
    }

    for (let i = n - 1; i >= 0; i--) {
        res += " ".repeat(n - i - 1) + "\\" + " ".repeat(i * 2) + "/\n";
    }
    document.getElementById('rhombus-out').textContent = res;
}

function drawSquare(n) {
    n = parseInt(n);
    let res = "";
    for (let i = 0; i < n; i++) {
        res += "* ".repeat(n) + "\n";
    }
    document.getElementById('square-out').textContent = res;
}

function drawTriangle(n) {
    n = parseInt(n);
    let res = "";
    for (let i = 1; i <= n; i++) {
        res += "* ".repeat(i) + "\n";
    }
    document.getElementById('triangle-out').textContent = res;
}

function drawRevTriangle(n) {
    n = parseInt(n);
    let res = "";
    for (let i = n; i >= 1; i--) {
        res += "* ".repeat(i) + "\n";
    }
    document.getElementById('rev-triangle-out').textContent = res;
}