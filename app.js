const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");//캔버스 내에서 픽셀을 컨트롤한다.2D로
const colors = document.getElementsByClassName("jsColor");
const range = document.querySelector("#jsRange");
const canvasFillBtn = document.querySelector("#jsMode");
const canvasCleanBtn = document.querySelector("#jsClean");

const initialColor = "#2c2c2c";

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;



ctx.strokeStyle = initialColor; //컨트롤하는 픽셀들이 해당 컬러를 가진다
ctx.fillStyle = initialColor;
ctx.lineWidth = 2.5; //픽셀의 두께

let painting = false;
let filling = false;

function stopPainting(event) {
    painting = false;
}


function startPainting(event) {
    painting = true;
}


function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {//painting이 false면
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
        // ctx.closePath();
    }
}


function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

}


if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);//클릭할때
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
}


if (colors) {
    Array.from(colors).forEach(color => color.addEventListener("click",
        (e) => {
            const color = e.target.style.backgroundColor;
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
        }
    ));
}

if (canvasCleanBtn) {
    canvasCleanBtn.addEventListener("click", () => {
        window.location.reload();
    });
}

if (canvasFillBtn) {
    canvasFillBtn.addEventListener("click", () => {
        if (filling === true) {
            filling = false;
            canvasFillBtn.innerText = "Fill";
        } else {
            filling = true;
            canvasFillBtn.innerText = "Paint";

        }
    });
}

if (range) {
    range.addEventListener("input", (e) => {
        ctx.lineWidth = e.target.value;
    });
};