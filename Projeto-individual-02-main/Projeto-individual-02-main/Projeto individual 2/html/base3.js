
campo = document.querySelector("#flexRadioDefault1")
//criptografando

codigo = btoa(campo)

//descriptografando
campo2 = document.querySelector("#flexRadioDefault2")
resposta = atob(codigo)
console.log(resposta)