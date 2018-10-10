var random_number;
var BtnNewGame = document.getElementById('BtnNewGame');
var blockMessage = document.getElementById('demo');
var controleSaisie = document.getElementById('contoleSaisie')

var btnSubmit = document.getElementById('btnSubmit');
var saisie = document.getElementById('example');
var nb_tentative;

BtnNewGame.addEventListener('click', function(){
    random_number  =  Math.floor(Math.random() * 101);
    nb_tentative = 0;
    blockMessage.innerHTML = 'J\'ai généré un nombre aléatoire pour toi mais je l\'ai perdu ! S\'il te plait, aide-moi à le retrouver !';
    btnSubmit.classList.remove('hidden');   
});

btnSubmit.addEventListener("click", function(){
    var reponse = saisie.value;
    nb_tentative++;
    if(reponse > 100 || reponse < 0){
        blockMessage.innerHTML = "Pauv' taré !";        
    } else if(reponse < random_number){
        controleSaisie.innerHTML('Plus');
    } else if(reponse > random_number){
        controleSaisie.innerHTML('Moins');
    } else {
        blockMessage.innerHTML="Vous êtes trop fort !! Vous avez gagné en " + nb_tentative + " coup(s)";
    }
});

   



















