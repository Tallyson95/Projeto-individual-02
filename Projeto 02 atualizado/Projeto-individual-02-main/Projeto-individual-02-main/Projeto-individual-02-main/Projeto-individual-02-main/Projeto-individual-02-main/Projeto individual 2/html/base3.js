//cifra de cesar

function cifracesar(){
letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
mensagem=document.formu1.num3.toLowerCase()
chave=document.formu1.chave1.toLowerCase()
x = parseInt(chave)
crip=[]
for(i=0 ; i<mensagem.length ; i++){
    if(mensagem[i] != ' '){
        for(j=0 ; j<letras.length ; j++){
            if (mensagem[i]==letras[j]){
                crip[i]=letras[(j+x)%letras.length]
                break
            }
        }
    }
    else{
        crip[i]=' '
    }
    (crip.join(""))
}
}

function decifracesar(){
    letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
mensagem=document.formu1.num3.toLowerCase()
chave=document.formu1.chave1.toLowerCase()
x = parseInt(chave)
crip=[]
for(i=0 ; i<mensagem.length ; i++){
    if(mensagem[i] != ' '){
        for(j=0 ; j<letras.length ; j++){
            if (mensagem[i]==letras[j]){
                crip[i]=letras[(j-x)%letras.length]
                break
            }
        }
    }
    else{
        crip[i]=' '
    }
    (crip.join(""))
}
}

//fazer input de criptografar
//fazer input de descriptografar

botao=document.querySelector("#cesar")
botao.onclick = function(){
    resultado=(cifracesar)
    alert(resultado)
}


botao1=document.querySelector("#CONFIRMAR")
botao1.onclick = function(){
    resultado=(cifracesar)
    alert(resultado)

    
    
}
