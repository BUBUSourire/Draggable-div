var dvObj = document.createElement("div");
document.body.appendChild(dvObj);
dvObj.className = ("dv");
dvObj.style.top = "auto";
var draggable = false;
var lastX;
var lastY;
dvObj.onmousedown = function (e) {
    draggable = true;
    lastX = e.clientX;
    lastY = e.clientY;
};
document.onmousemove = function (e) {
    if (draggable === true) {
        var x = e.clientX - lastX;
        var y = e.clientY - lastY;
        var top = parseInt(dvObj.style.top) || 0;
        var left = parseInt(dvObj.style.left) || 0;
        dvObj.style.top = top + y + "px";
        dvObj.style.left = left + x + "px";
        lastX = e.clientX;
        lastY = e.clientY;
    }
};
document.onmouseup = function () {
    draggable = false;
};
