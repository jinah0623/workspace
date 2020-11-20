'use strict;'
function changecolor(){
var p = document.getElementById("first");
var text = "p.id=" + p.id +"\n";        //text라는 변수
text += "p.tagName = " + p.tagName +"\n";   //계속 이어서 붙여줌
text += "p.innerHTML="+p.innerHTML +"\n";
text += "p.style.color="+p.style.color +"\n";
text += "p.onclick="+p.onclick +"\n";
text += "p.childElementCount="
        + p.childElementCount+"\n";
text += "너비 = "+p.offsetWidth +"\n";
text += "높이 = "+p.offsetHeight +"\n";
}

alert(text);