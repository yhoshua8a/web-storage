

if(localStorage.getItem("user") && localStorage.getItem("pass")){
   console.log("DATOS GUARDADOS")
    document.querySelector("#input-user").value = localStorage.getItem("user");
	document.querySelector("#input-pass").value = localStorage.getItem("pass");
}else{
	console.log("NO HAY DATOS GUARDADOS")
	sessionStorage.example = "session storage example";
}


function signIn(){
	const user = document.querySelector("#input-user").value;
	const pass = document.querySelector("#input-pass").value;

	if(document.querySelector("#check-save-data").checked && typeof(Storage) !== "undefined"){
		console.log("GUARDAR DATOS")
		localStorage.setItem("user", user);
		localStorage.setItem("pass", pass);
	}
}