function gerarCriptografia(){
    var palavra_1 = document.getElementById('palavra')
    var palavra_2 = (palavra_1.value.toLowerCase())
    var criptografada = ''

    if(palavra_2.trim() === ''){
       res.innerHTML= `<p>[ERRO] Digite uma palavra na caixa de texto!</p>`

    } else if(/\d/.test(palavra_2)){
       res.innerHTML = '<p>[ERRO] A caixa de texto não pode conter números!</p>'
    
    }else{
        document.getElementById('res').innerHTML = `<p>${palavra_2}</p>`

        for(var i= 0; i < palavra_2.length; i++){
            var letra = palavra_2[i]
            if(letra >= 'a' && letra <= 'z'){
                var numero = letra.charCodeAt(0) - 96
                criptografada += numero + ' '
            } else {
                criptografada += letra  
            }
        }    
    }res.innerHTML +=`<p>(${criptografada.trim()}) é a criptografia numérica de <b>${palavra_2}</b></p>`
}          