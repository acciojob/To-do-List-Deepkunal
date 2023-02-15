//your code here

var ol=document.getElementById(todoList);

function adTodo()
	{
		if(todoValue.value){
			var li=document.createElement('li');
			li.textContent=todoValue.value;
			ol.appendChild(li);
			todoValue.value="";
		}
	}
btn.addEventListner('click',addTodo);
