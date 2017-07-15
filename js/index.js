/**
 * Created by gogeek on 2017/7/14.
 */


window.onload = function () {
    //获取运动目标元素，并初始化其样式
    var box = document.getElementById("box");
    //默认文字
    var strArr = ['这', '里', '是', '七', '个', '字', '啊','多','放','几','个','字','比','较','好','看'];
    //根据数组间隔时间创建标签
    var i = 0;
    var date = 500  //单位毫秒
    var create = setInterval(function () {
        if (i < strArr.length) {
            var div = document.createElement('div');
            div.innerText = strArr[i];
            box.appendChild(div);
            i++
        } else {
            for (let j = 0; j < box.children.length; j++) {
                move(box.children[j]);
            }
            clearInterval(create)
        }
    }, date);

    function move(obj) {
        //初速度
        var height = obj.offsetHeight;
        var width = obj.offsetWidth;
        var speedX = _.random(-width, width)
        var speedY = _.random(-height, height);
        //设置定时器，实现运动
        setInterval(function () {
            //将该定时器设为obj专属

            if (obj.offsetLeft <= 0) {
                speedX = _.random(1, width);
                speedY = _.random(-height, height);
            }
            if (obj.offsetLeft + obj.offsetWidth >= document.documentElement.clientWidth) {
                speedX = _.random(-width, -1);
                speedY = _.random(-height, height);
            }
            if (obj.offsetTop <= 0) {
                speedX = _.random(-width, width);
                speedY = _.random(1, height);
            }
            if (obj.offsetTop + obj.offsetHeight >= document.documentElement.clientHeight) {
                speedX = _.random(-width, width);
                speedY = _.random(-height, -1);
            }
            obj.style.position = 'absolute';
            obj.style.left = obj.offsetLeft + speedX + "px";
            obj.style.top = obj.offsetTop + speedY + "px";
        }, 30);
    }
}