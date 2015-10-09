
function showPosition(event){
	sx.value = event.screenX;
	sy.value = event.screenY;
	px.value = event.pageX;
	py.value = event.pageY;
	cx.value = event.clientX;
	cy.value = event.clientY;
}
window.addEventListener('load',function(){
	var sx = document.getElementById('sx');
	var sy = document.getElementById('sy');
	var px = document.getElementById('px');
	var py = document.getElementById('py');
	var cx = document.getElementById('cx');
	var cy = document.getElementById('cy');
	var el = document.getElementById("container");
	el.addEventListener("mousemove",function(){
		sx.textContent = event.screenX;
		sy.textContent = event.screenY;
		px.textContent = event.pageX;
		py.textContent = event.pageY;
		cx.textContent = event.clientX;
		cy.textContent = event.clientY;
	});
	
});

var i = 0,numberOfChildren;
$(function(){
	console.log("asd");
	//definitions
	var $_menu = $("#menu"),
	$_addButton = $("#addButton"),
	$_inputAdd = $(".inputAdd"),
	$_listItem = $(".listItems"),
	$_ul		=$("#ul1"),



	$_counter = $("#counter");


	//interactions
	console.log("lenght of ul " + $_ul.children().length);
	numberOfChildren = $_ul.children().length;

	$_addButton.on("click",function(){
		numberOfChildren++;
		$_counter.text(numberOfChildren);
		addNewItemIntoList();
		//$_ul.append("<li>ek</li>")
	});

	$_inputAdd.focus(function(){
		$(this).val(" ");

	});
	$_inputAdd.blur(function(){
		$(this).val("Add description");
	});
	$_listItem.on("click",function(){
		numberOfChildren--;
		$_counter.text(numberOfChildren);
		$(this).addClass("erase");
		$(this).append("asd");
	});

	//functions
	function addNewItemIntoList(){
		var $newListItem = "<li></li>"; 
		$_ul.append($newListItem);
		$_ul.children().addClass("listItems");
		$newListItem.textContent("eeee");
		$_listItem = $(".listItems");
	};


});
