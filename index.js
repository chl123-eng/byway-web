window.onload=function(){
    var lis = document.querySelectorAll("#resourseLi")
    var resourseCont = document.querySelector(".resourseCont")
    var resImg = document.querySelector(".resImg");
    var resP = document.querySelector(".resP");
    var resLines = document.querySelectorAll(".resLine");
    var resLiDes = document.querySelectorAll(".resLiDes");
    var imgs = ["./img/resource1.png","./img/resource2.png","./img/resource3.png","./img/resource4.png","./img/resource5.png"]

    for(var i = 0; i < lis.length; i++){
        lis[i].onmouseover=function(j){
            return function() {
                resP.style.display = "none";
                resImg.src = imgs[j];
                resImg.style.display = "block";
                resLines[j].style.display = "inline-block";
                resLiDes[j].style.display = "inline-block";
            }
        }(i);
        lis[i].onmouseout=function(j){
            return function() {
                resP.style.display = "block";
                resImg.style.display = "none";
                resLines[j].style.display = "none";
                resLiDes[j].style.display = "none";
            }
        }(i);
    }
}
