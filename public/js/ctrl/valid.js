/**
 * Created by quanquan.sun on 2017/8/8.
 */
function rand(){
    var str="abcdefghijklmnopqrstuvwxyz0123456789";
    var arr=str.split("");
    var validate="";
    var ranNum;
    for(var i=0;i<6;i++){
        ranNum=Math.floor(Math.random()*36); //随机数在[0,35]之间
        validate+=arr[ranNum];
    }
    return validate;
}
/*干扰线的随机x坐标值*/
function lineX(){
    var ranLineX=Math.floor(Math.random()*90);
    return ranLineX;
}
/*干扰线的随机y坐标值*/
function lineY(){
    var ranLineY=Math.floor(Math.random()*40);
    return ranLineY;
}
function clickChange(){
    var mycanvas=document.getElementById('mycanvas');
    var cxt=mycanvas.getContext('2d');
    cxt.fillStyle='#000';
    cxt.fillRect(0,0,90,40);
    /*生成干扰线20条*/
    for(var j=0;j<20;j++){
        cxt.strokeStyle='#fff';
        cxt.beginPath(); //若省略beginPath，则每点击一次验证码会累积干扰线的条数
        cxt.moveTo(lineX(),lineY());
        cxt.lineTo(lineX(),lineY());
        cxt.lineWidth=0.5;
        cxt.closePath();
        cxt.stroke();
    }
    cxt.fillStyle='red';
    cxt.font='bold 20px Arial';
    var text = rand();
    MPT.captid = text;
    document.getElementById('capId').value = MPT.captid;
    cxt.fillText(text,10,25); //把rand()生成的随机数文本填充到canvas中
}
clickChange();
/*点击验证码更换*/
var mycanvas = document.getElementById('mycanvas');
mycanvas.onclick=function(e){
    e.preventDefault(); //阻止鼠标点击发生默认的行为
    clickChange();
};