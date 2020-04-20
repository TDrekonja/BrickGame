var zacelo=0;
function start3(){
	zacelo++;
	if(zacelo==1){
	zakleni++;
	var konc=false;
	document.getElementById("bton3").opacity="1";
	document.body.style.background= "url('slike/source2.3.gif') center";
	document.body.style.backgroundSize= "cover";
	document.getElementById("spodnji").style.transform=" rotate(180deg)";	
	var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ballRadius = 10;
    var x = canvas.width/2;
    var y = canvas.height-30;
    var dx = 2;
    var dy = -2;
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;
    var rightPressed = false;
    var leftPressed = false;
    var brickRowCount = 5;
    var brickColumnCount = 3;
    var brickWidth = 75;
    var brickHeight = 20;
    var brickPadding = 10;
    var brickOffsetTop = 30;
    var brickOffsetLeft = 30;
    var score = 0;
    var lives = 3;
	
	var canvas2 = document.getElementById("myCanvas2");
    var ctx2 = canvas2.getContext("2d");
    var ballRadius2 = 10;
    var x2 = canvas.width/2;
    var y2 = canvas.height-30;
    var dx2 = 2;
    var dy2 = -2;
    var paddleHeight2 = 10;
    var paddleWidth2 = 75;
    var paddleX2 = (canvas2.width-paddleWidth2)/2;
    var rightPressed2 = false;
    var leftPressed2 = false;
    var brickRowCount2 = 5;
    var brickColumnCount2 = 3;
    var brickWidth2 = 75;
    var brickHeight2 = 20;
    var brickPadding2 = 10;
    var brickOffsetTop2 = 30;
    var brickOffsetLeft2 = 30;
    var score2 = 0;
    var lives2 = 3;
	
	var zmaga=0;
	
	

    var bricks = [];
    for(var c=0; c<brickColumnCount; c++) {
        bricks[c] = [];
        for(var r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }
	
	var bricks2 = [];
    for(var c2=0; c2<brickColumnCount2; c2++) {
        bricks2[c2] = [];
        for(var r2=0; r2<brickRowCount2; r2++) {
            bricks2[c2][r2] = { x2: 0, y2: 0, status: 1 };
        }
    }
	
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
	document.addEventListener("keydown", keyDownHandler2, false);
    document.addEventListener("keyup", keyUpHandler2, false);

    function keyDownHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = true;
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
        }
    }
    function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        }
    }
	
	function keyDownHandler2(e) {
        if(e.keyCode == 65) {
            rightPressed2 = true;
        }
        else if(e.keyCode == 68) {
            leftPressed2 = true;
        }
    }
    function keyUpHandler2(e) {
        if(e.keyCode == 65) {
            rightPressed2 = false;
        }
        else if(e.keyCode == 68) {
            leftPressed2 = false;
        }
    }

    function collisionDetection() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
                var b = bricks[c][r];
                if(b.status == 1) {
                    if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                        dy = -dy;
                        b.status = 0;
                        score++;
                        if(score == brickRowCount*brickColumnCount) {
                            zmaga++;
							if(zmaga==2){
								alert("YOU WIN, CONGRATS!");
								zacelo=0;
								konc=true;
								zacetk=false;
								if(!lc)
									aniM3();
								return;
								throw new Error("Stopping the function!");
								/*document.getElementById("spodnji").style.transform=" rotate(180deg)";
								start3();*/
								/*document.getElementById("bton4").style.visibility=" visible";
								document.getElementById("bton3").style.visibility=" hidden";*/
							}
                        }
                    }
                }
            }
        }
    }
	function collisionDetection2() {
        for(var c2=0; c2<brickColumnCount2; c2++) {
            for(var r2=0; r2<brickRowCount2; r2++) {
                var b2 = bricks2[c2][r2];
                if(b2.status == 1) {
                    if(x2 > b2.x2 && x2 < b2.x2+brickWidth2 && y2 > b2.y2 && y2 < b2.y2+brickHeight2) {
                        dy2 = -dy2;
                        b2.status = 0;
                        score2++;
                        if(score2 == brickRowCount2*brickColumnCount2) {
                            zmaga++;
							if(zmaga==2){
								alert("YOU WIN, CONGRATS!");
								zacelo=0;
								konc=true;
								zacetk=false;
								if(!lc)
									aniM3();
								return;
								throw new Error("Stopping the function!");
								/*document.getElementById("spodnji").style.transform=" rotate(180deg)";
								start3();*/
								/*document.getElementById("bton4").style.visibility=" visible";
								document.getElementById("bton3").style.visibility=" hidden";*/
							}
                        }
                    }
                }
            }
        }
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#09b08e";
        ctx.fill();
        ctx.closePath();
    }
	function drawBall2() {
        ctx2.beginPath();
        ctx2.arc(x2, y2, ballRadius2, 0, Math.PI*2);
        ctx2.fillStyle = "#0095DD";
        ctx2.fill();
        ctx2.closePath();
    }
    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#09b08e";
        ctx.fill();
        ctx.closePath();
    }
	function drawPaddle2() {
        ctx2.beginPath();
        ctx2.rect(paddleX2, canvas2.height-paddleHeight2, paddleWidth2, paddleHeight2);
        ctx2.fillStyle = "#0095DD";
        ctx2.fill();
        ctx2.closePath();
    }
    function drawBricks() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
                if(bricks[c][r].status == 1) {
                    var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                    var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#09b08e";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
	function drawBricks2() {
        for(var c2=0; c2<brickColumnCount2; c2++) {
            for(var r2=0; r2<brickRowCount2; r2++) {
                if(bricks2[c2][r2].status == 1) {
                    var brickX2 = (r2*(brickWidth2+brickPadding2))+brickOffsetLeft2;
                    var brickY2 = (c2*(brickHeight2+brickPadding2))+brickOffsetTop2;
                    bricks2[c2][r2].x2 = brickX2;
                    bricks2[c2][r2].y2 = brickY2;
                    ctx2.beginPath();
                    ctx2.rect(brickX2, brickY2, brickWidth2, brickHeight2);
                    ctx2.fillStyle = "#0095DD";
                    ctx2.fill();
                    ctx2.closePath();
                }
            }
        }
    }
    function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#09b08e";
        ctx.fillText("Score: "+score, 8, 20);
    }
	function drawScore2() {
        ctx2.font = "16px Arial";
        ctx2.fillStyle = "#0095DD";
        ctx2.fillText("Score: "+score2, 8, 20);
    }
    function drawLives() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#09b08e";
        ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    }
	function drawLives2() {
        ctx2.font = "16px Arial";
        ctx2.fillStyle = "#0095DD";
        ctx2.fillText("Lives: "+lives2, canvas2.width-65, 20);
    }

    function draw() {
		try{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();
		
		ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        drawBricks2();
        drawBall2();
        drawPaddle2();
        drawScore2();
        drawLives2();
        collisionDetection2();

        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy < ballRadius) {
            dy = -dy;
        }
        else if(y + dy > canvas.height-ballRadius) {
            if(x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            }
            else {
                lives--;
                if(!lives) {
                    alert("GAME OVER");
					zacelo=0;
                    /*document.location.reload();*/
					konc=true;
					zacetk=false;
					zakleni=0;
					throw new Error("Stopping the function!");
                }
                else {
                    x = canvas.width/2;
                    y = canvas.height-30;
                    dx = 3;
                    dy = -3;
                    /*paddleX = (canvas.width-paddleWidth)/2;*/
                }
            }
        }
		
		if(x2 + dx2 > canvas2.width-ballRadius2 || x2 + dx2 < ballRadius2) {
            dx2 = -dx2;
        }
        if(y2 + dy2 < ballRadius2) {
            dy2 = -dy2;
        }
        else if(y2 + dy2 > canvas2.height-ballRadius2) {
            if(x2 > paddleX2 && x2 < paddleX2 + paddleWidth2) {
                dy2 = -dy2;
            }
            else {
                lives2--;
                if(!lives2) {
                    alert("GAME OVER");
					zacelo=0;
                    /*document.location.reload();*/
					konc=true;
					zacetk=false;
					zakleni=0;
					throw new Error("Stopping the function!");
                }
                else {
                    x2 = canvas2.width/2;
                    y2 = canvas2.height-30;
                    dx2 = 3;
                    dy2 = -3;
                    /*paddleX = (canvas2.width-paddleWidth2)/2;*/
                }
            }
        }

        if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
        }
        else if(leftPressed && paddleX > 0) {
            paddleX -= 7;
        }
		
		if(rightPressed2 && paddleX2 < canvas2.width-paddleWidth2) {
            paddleX2 += 9;
        }
        else if(leftPressed2 && paddleX2 > 0) {
            paddleX2 -= 9;
        }

        x += dx;
        y += dy;
		x2 += dx2;
        y2 += dy2;
		if(!konc)
        requestAnimationFrame(draw);
	}
	catch(err){}
}
	if(konc)
		return;
	draw();
	}else(zacelo==2)
		console.log('kmet');
}
function aniM3(){
	document.getElementById('bton3').className ='classname';
	document.getElementById('bton4').className ='classname2';
	sessionStorage.setItem("level", "bton4");
	zakleni=0;
}