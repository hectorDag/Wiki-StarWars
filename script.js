
let Nombre = document.getElementById("Input_Nombre");
let Imagen = document.getElementById("Img_Central");
let Tarjeta = document.getElementById("Tarjeta");
let Texto = document.getElementById("Tarjeta_Texto");
let Tarjeta_Img = document.getElementById("Tarjeta_Img");

function Buscar() {
    let Personaje = Buscar_Nombre(Nombre.value)
   
    if( Personaje.name == Nombre.value){
        Imagen.style.display = "none";
        Tarjeta.style.display = "inline-block";
        Texto.innerHTML = Personaje.name;
    }else{
        return alert("Personaje no encontrado: Intente otra vez ")
    }

    if( Personaje.height == 172 ) {
        Tarjeta_Img.src = "/Img/Luke Skywalker.jpg"
    }else if( Personaje.height == 167){
        Tarjeta_Img.src = "/Img/C-3PO.jpg"
    }else if( Personaje.height == 96){
        Tarjeta_Img.src = "/Img/R2-D2.png"
    }else if( Personaje.height == 202){
        Tarjeta_Img.src = "/Img/Darth Vader.jpg"
    }else if( Personaje.height == 150){
        Tarjeta_Img.src = "/Img/Leia Organa.webp"
    }else if( Personaje.height == 178){
        Tarjeta_Img.src = "/Img/Owen Lars.webp"
    }else if( Personaje.height == 165){
        Tarjeta_Img.src = "/Img/Beru Whitesun lars.webp"
    }else if( Personaje.height == 97){
        Tarjeta_Img.src = "/Img/R5-D4.jpg"
    }else if( Personaje.height == 183){
        Tarjeta_Img.src = "/Img/Biggs Darklighter.webp"
    }else{
        Tarjeta_Img.src = "/Img/Obi Wan Kenobi.webp"
    }

    return console.log(file)
}

function Buscar_Nombre(Nombre) {
    let Monitos = file.results;

    for(let i = 0; i <= Monitos.length; i++){
        if(Nombre == Monitos[i].name){
            return Monitos[i]
        }
    }

}



