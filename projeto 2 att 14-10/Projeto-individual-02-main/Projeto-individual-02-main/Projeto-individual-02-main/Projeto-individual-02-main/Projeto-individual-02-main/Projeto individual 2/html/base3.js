//cifra de cesar


letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
mensagem= document.formu1.num3 ("Escreva a Mensagem: ").toLowerCase()
chave= document.formu1.chave1 ("Informe a Chave: ")
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
botao1=document.querySelector("#cesar")

botao1=document.querySelector("#CONFIRMAR")
botao1.onclick = function(){
    resultado=(document.formu1.num3)
    alert(resultado)

    
    
}
