function login() {
	var resposta  = document.getElementById("inputResposta").value;
	var bolsonaro = document.getElementById("inputBolsonaro");
	resposta = resposta.toLowerCase();

	if (resposta == "cama" || bolsonaro.checked) {
		window.open("pages/entrada.html");
	} else {
		alert("Tente novamente!");
	}
}