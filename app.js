const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");//캔버스 내에서 픽셀을 컨트롤한다.2D로

canvas.width=document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height=document.getElementsByClassName("canvas")[0].offsetHeight;



ctx.strokeStyle="#2c2c2c"; //컨트롤하는 픽셀들이 해당 컬러를 가진다
ctx.lineWidth =2.5; //픽셀의 두께

let painting = false;

function stopPainting(event){
    painting = false;
}


function startPainting(event){
    painting = true;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){//painting이 false면
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
        // ctx.closePath();
    }
}





if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown',startPainting);//클릭할때
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}