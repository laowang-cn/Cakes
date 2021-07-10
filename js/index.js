window.onload = function () {
    init();
}
//记录轮播图片的位置
let index = 0;

//记录小圆点的位置
let indexlis = 0;

let timer, timer2, scolltimer = null;

function init() {

    // //获取所有a链接
    // let allA = document.querySelectorAll('a');
    // //为a链接为他们添加阻止跳转事件
    // for (let i = 0; i < allA.length; i++) {
    //     allA[i].href = "javascript:;";
    // }


    //轮播图函数
    //定义定时器，动态调用轮播函数
    timer = setInterval(autoplay, 3000);

    //点击图片轮播
    //获取轮播图外层
    let banner=document.querySelector('.banner');
     //获取ul大盒子标签
     let uls = banner.querySelector('ul');
     
    banner.onmouseover=function(){
        clearInterval(timer);
        uls.style.animation = "none 0"
        timer=null;
    }
    banner.onmouseout=function(){
      timer = setInterval(autoplay, 3000);
    }
    let lis=banner.querySelectorAll('ol li');
     for (let i = 0; i < lis.length; i++) {
         lis[i].setAttribute('id',i);
         let indexs=lis[i].getAttribute('id');
       
         lis[indexs].onclick=function(e){
             e.stopPropagation()
            
             chageImg(indexs)
         }
     }
     

    //小图片轮播
    timer2 = setInterval(twoLunbo, 2000);

    //点击轮播事件调用
    onThreeb();

    //获取浏览器的总高度
    let wiHeight = document.body.clientHeight;


    //获取回滚标签
    let scotop = document.querySelector('.huigun');
    //获取滚动的高度
    let scloH = 0;


    //声明一个定时器一段时间调用窗口滚动函数
    scolltimer = setInterval(() => {

        scloH = window.pageYOffset;
        // console.log(scloH);
        if (scloH > 800) {
            scotop.style.display = 'block';
            // clearInterval(scolltimer)
        } else {
            scotop.style.display = 'none';
        }

    }, 100);

    //回到顶部点击事件
    scotop.onclick = function () {
        scotop.style.display = 'none';
        timer = setInterval(() => document.documentElement.scrollTop <= 0 ? clearInterval(timer) : window.scrollTo(0, document.documentElement.scrollTop - 100), 17);
    }
    //获取对应的登录注册的父级标签
    let af4 = document.querySelector('.nav .right a:nth-child(4)');
    let ul = af4.querySelector('ul');

    af4.addEventListener('mouseover', () => {
        ul.style.display = 'block';
        ul.onmouseout = function () {
            ul.style.display = 'none';
        }
    })
    af4.addEventListener('mouseout', () => {
        ul.onmouseout = function () {
            ul.style.display = 'none';
        }
    })

}
//控制index的变化
function autoplay() {
    index++;
    if (index == 4) {
        index = 0
    }
    chageImg(index);
   
}
//控制图片向左移动
function chageImg(index) {

    //获取最外层标签
    let banner = document.querySelector('.banner');
    //获取ul大盒子标签
    let ul = banner.querySelector('ul');
    //获取一个图片元素
    let img = ul.querySelector('li:first-child img');
    //获取所有图片
    let imgs = ul.querySelectorAll('img');
    //获取ol元素
    let ol = banner.querySelector('ol');
    //获取所有ol下li
    let lis = ol.querySelectorAll('li');
    //获取一张图片宽度
    let imgWidth = img.offsetWidth;
    //获取第二个文字上浮
    let tian = ul.querySelector('li:nth-child(2) .tian');
    //获取第三个文字上浮
    let tian2 = ul.querySelector('li:nth-child(3) .tian');
    index != 1 ? tian.style.bottom = "-40%" : tian.style.bottom = "40%", tian.style.transition = 2 + 's';

    index != 2 ? tian2.style.bottom = "-40%" : tian2.style.bottom = "30%", tian2.style.transition = 2 + 's';


    ul.style.marginLeft = -imgWidth * index + 'px';

    ul.style.animation = "op 3s infinite"
    // 排他思想，清除所有红色圆点
    for (let i = 0; i < lis.length; i++) {
        //动态清除所有红色圆点
        lis[i].className = ''

    }
    // console.log(index);
    //留下我自己
    lis[index].className = "active";

}

//控制小图片的位置
let twoindex = 0;
//控制li的位置
let twoliindex = 0;
function twoLunbo() {
    twoindex++;
    twoliindex++
    let luntu = document.querySelector('.luntu');
    let ul = luntu.querySelector('ul');
    let ol = luntu.querySelector('ol');
    let lis = ol.querySelectorAll('li');
    let img = ul.querySelector('li:first-child img');
    let imgWidth = img.offsetWidth;
    ul.style.marginLeft = -imgWidth * twoindex + 'px';
    ul.style.transition = 1 + 's';
    //排他思想
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = '';
    }
    lis[twoliindex].className = 'active';
    if (twoliindex == 1) {
        twoliindex = -1

    }
    // console.log(twoindex);
    if (twoindex == 0) {
        ul.style.transition = 'none';

    }
    if (twoindex == 2) {
        twoindex = -1;
        twoliindex = -1


    }

}
let i = 0;
//点击轮播事件
function onThreeb() {

    let arl = document.querySelector('.cilcklunbo .arrowl');
    let ar = document.querySelector('.cilcklunbo .arrowr');
    let box = document.querySelector('.cilcklunbo .click-box');

    let ul = box.querySelector('ul');
    //获取包裹图片的最外层盒子的宽度
    let boxW = box.offsetWidth;

    ar.onclick = function () {

        i++
        ul.style.left = -boxW * i + 'px';
        ul.style.transition = 1 + 's';
        if (i == 3) {
            i = 0;
            ul.style.left = 0 + 'px';
        }
    }
    arl.onclick = function () {

        i--
        ul.style.left = -boxW * i + 'px';
        ul.style.transition = 1 + 's';
        if (i < 0) {
            i = 2;

            ul.style.left = -boxW * i + 'px';
        }
    }

}