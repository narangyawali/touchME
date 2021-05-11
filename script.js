var boxes = document.querySelectorAll(".box");
var container = document.querySelector(".container");

boxes.forEach(element => {
    element.innerHTML = "TOUCH Me";
   element.addEventListener("mouseover",setposition);
    
});

function setposition(){
	this.style.right = rright();

    this.style.top =rtop(); 
}

function rtop(){
	var top = parseInt(Math.floor(Math.random()*window.innerHeight));
    return top+"px";
	
}

function rright(){
	var right = parseInt(Math.floor(Math.random()*window.innerWidth));
    return right+"px";
}












// var id1 = document.querySelector("#b1");
// id1.addEventListener("mouseover",mouseOver);
// function mouseOver(){
// 	this.style.right ="55px";
//     this.style.top ="155px";
// }

