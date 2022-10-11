botao = document.querySelector("#btn")
botao.onclick = function(){
    checar = document.form1.campo.value
    tamanho = checar.length
    i=0
    verificar=[]
    while(i<tamanho){
        verificar.push(checar.charCodeAt(i))
        i=i+1
        document.form1.resultado.value=verificar
    

       }  
 
}
