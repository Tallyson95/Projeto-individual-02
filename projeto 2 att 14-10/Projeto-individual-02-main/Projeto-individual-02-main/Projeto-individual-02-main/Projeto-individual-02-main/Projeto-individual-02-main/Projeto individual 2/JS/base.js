campo = document.querySelector("#numero")
campo.onkeydown = function(e){
    tecla = (window.event)?
    event.keyCode:e.which
    if(tecla > 47 && tecla < 58){
        return true
    }
else if (tecla > 95 && tecla < 106){
    return true
}

else if (tecla == 8 || tecla == 46){
    return true
}
else{
    return false
}

}