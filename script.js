const canvas = document.getElementById('pookalamCanvas');
const ctx = canvas.getContext('2d');
const cx = canvas.width / 2;
const cy = canvas.height / 2;
function drawCircle(x, y, radius, color) //circle
{
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
function drawPetalRow(cx, cy, radius, petalLength, petalWidth, numPetals, color,angleOffset=0) 
{
    for (let i = 0; i < numPetals; i++) 
    {
        const angle = angleOffset + (2 * Math.PI * i) / numPetals;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle - Math.PI / 2); // Make petal point outward from the center
        ctx.beginPath();
        ctx.ellipse(0, 0, petalWidth, petalLength, 0, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    }
}
function drawDiamondRing( cx, cy, radius, size, numDiamonds, fillColor, borderColor, borderWidth, offset=0) 
{
    for (let i = 0; i < numDiamonds; i++) 
    {
        const angle = offset + (2 * Math.PI * i) / numDiamonds;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.rotate(Math.PI / 2);
        const diag = size / Math.sqrt(2);
        ctx.beginPath();
        ctx.moveTo(0, -diag);        // Top
        ctx.lineTo(diag, 0);         // Right
        ctx.lineTo(0, diag);         // Bottom
        ctx.lineTo(-diag, 0);        // Left
        ctx.closePath();
        ctx.lineWidth = borderWidth;
        ctx.strokeStyle = borderColor;
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}


function drawPookalam()//Pookalam 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(cx,cy,290,"#0b5626ff")
    drawCircle(cx, cy, 280, "#800023");// Outer orange circle
    drawPetalRow(cx, cy, 200, 80, 38,16, "#f2ff00ff");//petals on outer ring
    drawPetalRow(cx, cy, 200, 80, 38,16, "#ff6600ff",-Math.PI/5.5);//petals on outer ring
    drawPetalRow(cx, cy, 200, 40, 18,16, "#db0303ff",-Math.PI/5.5);
    drawPetalRow(cx, cy, 190, 20, 8,16, "#fcffcbff",-Math.PI/5.5);
    drawCircle(cx, cy, 177, "#0b5626ff");// Middle green ring
    drawCircle(cx, cy, 168, "#F5F5DC");// Middle white ring
    drawCircle(cx, cy, 162, "#800023");//middle brown ring
    drawCircle(cx, cy, 127, "#ffe600ff");
    drawDiamondRing(cx, cy, 124, 48, 6, "#ba55d3", "#ba55d3",0);// purple diamonds
    drawDiamondRing(cx, cy, 124, 48, 6, "#ff0000ff", "#ff0000ff",0,-Math.PI/6);//red diamonds
    drawCircle(cx, cy, 90, "#0b5626ff");
    drawCircle(cx, cy, 90, "#F5F5DC");// Inner white ring
    drawCircle(cx, cy, 85, "#c10db8ff");// Inner purple ring
    drawCircle(cx, cy, 80, "#850101ff");//Inner yellow ring
    drawPetalRow(cx,cy,40,40,14,8,"#ff0000ff",-Math.PI/8);// Outer red petals
    drawPetalRow(cx,cy,40,25,12,8,"#ffe600ff",-Math.PI/8);//inner yellow petals
    drawPetalRow(cx,cy,36,15,9,8,"#0a662d9d",-Math.PI/8)
    drawCircle(cx, cy, 25, "#0b5626ff");
    drawCircle(cx, cy, 23, "#FFFF00");// Center yellow circle
    drawCircle(cx, cy, 17, "#0b5626ff");
    drawCircle(cx, cy, 15, "#ff8c00");// Center dot
    drawCircle(cx, cy, 8, "#ffffffff");
}
window.onload = drawPookalam;
window.addEventListener("resize", drawPookalam);