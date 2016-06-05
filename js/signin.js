function login() {
	var resposta  = document.getElementById("inputResposta").value;
	var bolsonaro = document.getElementById("inputBolsonaro");
	username = username.toLowerCase();

	alert("Apertou!!");

	if (username == "cama") {
		alert("Acertou!!");
	} else if (bolsonaro.checked) {
		alert("Acertou!!");
	} else {
		alert("Resposta errada!");
	}
}