
setRem();
function setRem(){
    // 首先要获取html
    var html=document.querySelector('html'); 
    // 首先获取屏幕的宽度直接用屏幕的宽度除以要分成的份数
    var width=html.getBoundingClientRect().width;

    html.style.fontSize=width/16+'px';

}
window.addEventListener('resize',setRem);
window.addEventListener('orientationchange',setRem);