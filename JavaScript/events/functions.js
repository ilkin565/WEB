// JavaScript source code
function setImage()
{
    let filename = document.getElementById("image-file");
    let reader = new FileReader();
    reader.onload = function (e)
    {
        document.getElementById("photo").src = e.target.result;
    }
    reader.readAsDataURL(filename.files[0]);
}
function setBackground()
{
    let color_tool = document.getElementById('choose-color');
    let color = color_tool.value;
    //document.body.style.backgroundImage = "none";
    //document.body.style.backgroundColor = color;
    document.getElementById('color-sample').style.backgroundColor = inverse_color;
    document.getElementById('color-sample').style.width = "200px";
    document.getElementById('color-sample').style.height = "200px";
}
function switchBackground()
{
    let target = document.getElementById("switch-background").src;
    let path = target.split('/');
    let file = path[path.length - 1];
    //console.log(file);
    //if (file === "moon.png") document.getElementById("switch-background").src = "img/sun.png";
    //else document.getElementById("switch-background").src = "img/moon.png";
    //document.getElementById("switch-background").src = file === "moon.png" ? "img/sun.png" : "img/moon.png";
    //document.body.style.backgroundImage = "none";
    document.body.className = file === "moon.png" ? "dark" : "white";
    //document.body.style.backgroundColor = file === "moon.png" ? "black" : "white";
    //document.body.style.color = file === "moon.png" ? "white" : "black";
    document.getElementById("switch-background").src = `img/${file === "moon.png" ? "sun.png" : "moon.png"}`;
    /*
    ---------------------
    5 == "5":true;
    5 === "5":false;
    ---------------------
    */
}