function clickSubmit(){
    console.log("okok");
	var chave = getParameterByName('chaveApp');
    document.getElementById("chaveApp").value = chave;
    var login = $('#login').val();
    var senha = $('#senha').val();
    console.log('login: ' + login);
    console.log('senha: ' + senha);
    console.log('chave: ' + chave);
    $.post('http://localhost:3000/auth', {login: login, senha: senha, chaveApp: chave})
        .done(function(result){
            if(result.sucesso){
                console.log(result);
                console.log(result.urlCallback + '?access_token=' + result.token);
                window.location.replace("http://" + result.urlCallback + '?access_token=' + result.token);
            }
        });
	// document.formLogin.target = "_self";
	// document.formLogin.action = "http://localhost:3000/auth";
	// document.formLogin.submit();
}

// function clickSubmit(){
//     window.location.replace("http://www.w3schools.com");
// }

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}