/**
 * Created by zzj on 2016/5/31.
 */
function aShow(li) {
    var showList=li.getElementsByTagName("ul")[0];
    showList.style.display="block";
}
function aHide(li){
    var hideList=li.getElementsByTagName("ul")[0];
    hideList.style.display="none"
}
window.onload=function() {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;

    function showbutton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = ' ';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function animate(offset) {
        animate:true;
        var newleft = parseInt(list.style.left) + offset;
        var time = 1000;
        var interval = 10;
        var speed = offset / (time / interval);

        function go() {
            animate:false;
            if ((speed < 0 && parseInt(list.style.left) > newleft) || speed > 0 && parseInt(list.style.left) < newleft) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);
            }
            else {
                list.style.left = newleft + 'px';
                if (newleft > -1199) {
                    list.style.left = -7194 + 'px';
                }
                if (newleft < -7194) {
                    list.style.left = -1199 + 'px';
                }
            }
        }

        go();
    }

    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 2000);
    }

    function stop() {
        clearInterval(timer);
    }

    next.onclick = function () {
        if (index == 6) {
            index = 1;
        }
        else {
            index += 1;
        }
        showbutton();
        animate(-1199);
    };
    prev.onclick = function () {
        if (index == 1) {
            index = 6;
        }
        else {
            index -= 1;
        }
        showbutton();
        animate(1199);
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -1199 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showbutton();
        }
    }
    container.onmouseout = play;
    container.onmouseover = stop;
    play();

//新闻页轮播
    var newList=document.getElementById('NewList');
    var leftButton=document.getElementById('aPrev');
    var rightButton=document.getElementById('aNext');
    leftButton.onclick=function () {
        newList.style.left=parseInt(newList.style.left)-1199+'px';
        if(parseInt(newList.style.left)<-1199){
            newList.style.left=0+'px';
        }
    };

    rightButton.onclick=function () {
        newList.style.left=parseInt(newList.style.left)+1199+'px';
        if(parseInt(newList.style.left)>0){
            newList.style.left=-1199+'px';
        }
    }
};