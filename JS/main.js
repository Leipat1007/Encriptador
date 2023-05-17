//Inicio de la declaracion de arreglos para la encriptacion y desencriptacion
let CaracterAAlura = {
    'a':'ai','b':'b','c':'c','d':'d','e':'enter','f':'f',
    'g':'g','h':'h','i':'imes','j':'j','k':'k','l':'l',
    'm':'m','n':'n','ñ':'ñ','o':'ober','p':'p','q':'q','r':'r',
    's':'s','t':'t','u':'ufat','v':'v','w':'w','x':'x',
    'y':'y','z':'z',' ':' ','':''
}
let CaracterAMorse = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
    'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
    'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
    's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..', '0': '-----','1': '.----','2': '..---','3': '...--',
    '4': '....-', '5': '.....','6': '-....','7': '--...','8': '---..','9': '----.',
    ' ':'/'
}
let MorseAcaracter = {
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z','.----':'1','..---':'2','...--':'3','....-':'4',
    '.....':'5','-....':'6','--...':'7','---..':'8','----.':'9','-----':'0','/':' '
}
//Final de la declaracion de arreglos para la encriptacion y desencriptacion
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//Inicio de las funciones para la encriptacion y desencriptacion de los textos
function EncriptacionAlura(mensaje) {
    let codificado = "";
    let MensajeMinus = mensaje.toLowerCase();
    for (let i = 0; i < MensajeMinus.length; i++){
        let caracter = MensajeMinus[i];
        if (CaracterAAlura[caracter]){
            codificado += CaracterAAlura[caracter];
        }
    }
    return codificado;
}
function EncriptacionMorse(mensaje) {
    let codificado = "";
    let MensajeMinus = mensaje.toLowerCase();
    for (let i = 0; i < MensajeMinus.length; i++){
        let caracter = MensajeMinus[i];
        if (CaracterAMorse[caracter]){
            codificado += CaracterAMorse[caracter] + " ";
        }
    }
    return codificado;
}
function DesencriptacionAlura(mensaje) {
    let codificado = mensaje.toLowerCase();
    return codificado.replace(/ai|enter|imes|ober|ufat/gi, function(matched){
        switch(matched){
            case 'ai' : return 'a'
            case 'enter' : return 'e'
            case 'imes' : return 'i'
            case 'ober' : return 'o'
            case 'ufat' : return 'u'
            case ' ' : return ''
            default : return matched;
        }
    });
}
function DesencriptacionMorse(mensaje) {
    let codificado = [];
    let alfabeto = MorseAcaracter;
    let code = mensaje;
    code.split("   ").map(function(palabra){
        palabra.split(" ").map(function(letra){
            codificado.push(alfabeto[letra]);
        });
        codificado.push(" ");
    })
    return codificado.join("");
}
//Final de las funciones para la encriptacion y desencriptacion de los textos
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//Inicio de las funciones para las funcionalidades de los botones de la pagina
function encriptar(){
    var opcion = document.getElementById("select").value;
    var texto = document.getElementById("Txt1").value;
    var Area = document.getElementById("Area");
    if (texto === "" || texto === " "){
        alert ("Por favor ingrese el texto a encriptar!")
    }else{
        if (opcion === "0") {
            alert("Por favor escoja el tipo de encriptado que desea!")
        }
        if  (opcion === "1") {
            let codificacion = EncriptacionAlura(texto);
            document.getElementById("Txt2").innerHTML = codificacion;
            document.getElementById("Txt2").style.height = "80%";
            document.getElementById("Txt2").style.transition = "all 1s";
            document.getElementById("BotonC").style.display = "show";
            document.getElementById("BotonC").style.display = "inherit";
            Area.classList.add("Ocultar");
        }
        if (opcion === "2"){
            let codificacion = EncriptacionMorse(texto);
            document.getElementById("Txt2").innerHTML = codificacion;
            document.getElementById("Txt2").style.height = "80%";
            document.getElementById("Txt2").style.transition = "all 1s";
            document.getElementById("BotonC").style.display = "show";
            document.getElementById("BotonC").style.display = "inherit";
            Area.classList.add("Ocultar");
        }
    }
}
function desencriptar(){
    var opcion = document.getElementById("select").value;
    var texto = document.getElementById("Txt1").value;
    if (texto === "" || texto === " "){
        alert ("Por favor ingrese el texto a desencriptar!")
    }else{
        if (opcion === "0") {
            alert("Por favor escoja el tipo de desencriptado que desea!")
        }
        if  (opcion === "1") {
            let codificacion = DesencriptacionAlura(texto);
            document.getElementById("Txt2").innerHTML = codificacion;
            document.getElementById("Txt2").style.height = "80%";
            document.getElementById("Txt2").style.transition = "all 1s";
            BotonCopiar.style.display  = "Show";
            BotonCopiar.style.display = "Inherit";
            Area.classList.add("Ocultar");
        }
        if (opcion === "2"){
            let codificacion = DesencriptacionMorse(texto);
            document.getElementById("Txt2").innerHTML = codificacion;
            document.getElementById("Txt2").style.height = "80%";
            document.getElementById("Txt2").style.transition = "all 1s";
            BotonCopiar.style.display  = "Show";
            BotonCopiar.style.display = "Inherit";
            Area.classList.add("Ocultar");
        }
    }
}
function Copy(){
    var contenido = document.getElementById("Txt2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se ha copiado el texto!");
}
//Final de las funciones para las funcionalidades de los botones de la pagina
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//Inicio funcion para realizar el modo oscuro
function ModoOscuro(event){
    var labelcheck = document.getElementById("label_check");
    let logo = document.getElementById("Logo");
    let linked = document.getElementById("Linked");
    let git = document.getElementById("Git");
    let checked = event.target.checked;
    document.body.classList.toggle("oscuro");
    if (checked == true){
        labelcheck.innerHTML = '<i class="fa-solid fa-sun"></i>';
        logo.innerHTML = '<img src="Images/Logo-blanco.png" alt="Logo Encriptador-Alura" class="Logo">';
        linked.innerHTML = '<img src="Images/Linkedin-Blanco.png" alt="Link perfil Linkedin">';
        git.innerHTML = '<img src="Images/Git-Blanco.png" alt="Link perfil GitHub">';
    }else {
        labelcheck.innerHTML = '<i class="fa-solid fa-moon"></i>';
        logo.innerHTML = '<img src="Images/Logo.png" alt="Logo Encriptador-Alura" class="Logo">';
        linked.innerHTML = '<img src="Images/linkedin.svg" alt="Link perfil Linkedin">';
        git.innerHTML = '<img src="Images/github.svg" alt="Link perfil GitHub">';
    }
}
//Inicio funcion para realizar el modo oscuro
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//Asignacion de funciones a botones
var BotonEncriptar = document.getElementById("BotonE");
BotonEncriptar.addEventListener("click",encriptar);
var BotonDesencriptar = document.getElementById("BotonD");
BotonDesencriptar.addEventListener("click",desencriptar);
var BotonCopiar = document.getElementById("BotonC");
BotonCopiar.addEventListener("click",Copy);
var check = document.getElementById("Check");
check.addEventListener("change",ModoOscuro);