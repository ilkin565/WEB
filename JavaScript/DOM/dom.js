?// JavaScript source code
document.title = "DOM";
//document.write("<h1>Document Object Model</h1>");
//document.write(document.head.title);
let header1 = document.createElement("h1");
header1.innerHTML = "Document Object Model";
document.body.prepend(header1);
document.body.bgColor = "#00C8C8C8";
let children = document.body.children;
console.log(children);
children[0].textContent = "????????? ?????? ?????????";
console.log(children[0].outerHTML);
//children[0].outerHTML = "<h2>DOM</h2>";
console.log(document.body.outerHTML);
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);
let statistics = document.createElement("div");
statistics.innerHTML = `?????????? ???????:${paragraphs.length};?????????? ??????????:${document.getElementsByTagName("h2").length};?????????? ????????:${document.getElementsByTagName("img").length}`;
document.body.prepend(statistics);