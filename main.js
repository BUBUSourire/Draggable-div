var dvObj = document.createElement("div");
document.body.appendChild(dvObj);
dvObj.className = ("dv");
dvObj.style.top = "auto";
var draggable = false;
var lastX;
var lastY;

if (document.body.ontouchstart !== undefined) {
    dvObj.ontouchstart = function (e) {
        draggable = true;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
    };
    document.ontouchmove=function(e){
        if (draggable === true) {
            var x = e.touches[0].clientX - lastX;
            var y = e.touches[0].clientY - lastY;
            var top = parseInt(dvObj.style.top) || 0;
            var left = parseInt(dvObj.style.left) || 0;
            dvObj.style.top = top + y + "px";
            dvObj.style.left = left + x + "px";
            console.log(x,y);
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
        }
    };
    document.ontouchend=function(){
        draggable = false;
    };
}else{
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
}