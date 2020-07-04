/* Função que valida o formulário de login */

function validalogin(){
	// pegar os valores digitados no campo de usuário e senha
	
	var usuario = document.getElementById("inputusuario").value;
	var senha = document.getElementById("inputsenha").value;
	
	// verificar se ambos os campos foram preenchidos
	// se foram preenchidos, deixa enviar o formulário
	// senão, avisa que tem erro e não envia o formulário
		
	if(usuario == "" || senha == "") {
		alert("Preencha os campos corretamente");
		return false;
	} else {
		alert ("Formulário Enviado!!!");
		return true;
	}
}