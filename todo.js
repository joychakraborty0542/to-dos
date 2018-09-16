// var li =document.querySelectorAll("li")
// for (i=1 i<li.length i++){}
// li[i].addEventListener("mouseover", function(){
//   li[i].style.color="green";
// });

// li[i].addEventListener("mouseout", function(){
// 	li[i].style.color="black";
// });
// 
var li =document.querySelectorAll("li")
for (i=0; i<li.length; i++){
li[i].addEventListener("mouseover", function(){
  this.classList.add("selected");
});

li[i].addEventListener("mouseout", function(){
	this.classList.remove("selected");
});
	li[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}
