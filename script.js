var input1 = document.getElementById("input1");

var ul = document.getElementById('liste');

var li = document.createElement("li");

var bouton1 = document.getElementById("bouton1");
	bouton1.addEventListener("click", f);

var bouton2 = document.getElementById('bouton2');
	bouton2.addEventListener("click", supprimer);

var input2 = document.getElementById("input2");

var ajouter = document.getElementById("ajouter");
	ajouter.addEventListener("click", f2);

var ul2 = document.getElementById('liste2');

function clearInput() {
	input1.value = "";
	input2.value = "";
}

function supprimer() {
	if (confirm("Voulez-vous supprimer les éléments sélectionnés ?")) {
	var boxes = document.getElementsByClassName('chk');
    var texts = document.getElementsByClassName('lbl');
	    for(var i = 0; i < boxes.length; i++){
	        
	        if(boxes[i].checked){
	            remove(boxes[i]);
	            remove(texts[i]);
	            
			}
		}
	}
}

function f() {

	if(input1.value =='') {
		alert('Le champs texte est vide, veuillez saisir du texte.');
	}
	else if (input1.value !=''){
		var li = document.createElement("li");
		
			for( i=0; i < 10; i++) {
			
			ul.appendChild(li);
			li.innerHTML = input1.value;

	    	input1.addEventListener('focus', clearInput);
    	}

	}
}

function f2() {

	if(input2.value =='') {
		alert('Le champs texte est vide, veuillez saisir du texte.');
	}
	else if (input2.value !=''){
		// var li2 = document.createElement("li");
		var div = document.createElement("div");
		var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.class = "chk";
		var label = document.createElement("label");
			label.class = 'lbl';

			for( i=0; i < 10; i++) {

			ul2.appendChild(div);
			label.innerHTML = input2.value;
			div.appendChild(checkbox);
			div.appendChild(label);
			
			input2.addEventListener('focus', clearInput);
			bouton2.addEventListener('click', supprimer);
    	}

	}
}